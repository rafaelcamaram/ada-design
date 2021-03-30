import React, { useRef } from "react";
import { DefaultTheme } from "styled-components";
import { Queue } from "async-fifo-queue";
import { reset, configure, run, AxeResults } from "axe-core";

import { A11yContext } from "hoc/withAccessibilityErrors/withAccessibilityErrors";
import View from "components/View";
import ThemeProvider from "components/ThemeProvider";

export type Props = {
  isEnabled: boolean;
  value?: Partial<DefaultTheme>;
  shouldShowSuccess?: boolean;
  shouldShowIncomplete?: boolean;
};

const ADADesignProvider: React.FC<Props> = ({
  children,
  value,
  isEnabled,
  shouldShowIncomplete = true,
  shouldShowSuccess = true,
}) => {
  const currentQueue = useRef(new Queue());

  /* Responsible to run a task and resolve with the ADA result of it */
  const runTask = async (componentId: string): Promise<AxeResults> => {
    return await new Promise(async (resolve) => {
      const baseConfig = {
        config: {},
        options: {
          restoreScroll: true,
        },
      };
      const { config, options = {} } = baseConfig;

      reset();
      if (config) {
        configure(config);
      }

      const adaResponse: AxeResults = await run(
        document.getElementById(componentId),
        options,
      );

      resolve(adaResponse);
    });
  };

  const popNextTaskAndRun = async () => {
    const isEmpty = currentQueue.current.isEmpty();

    if (!isEmpty) {
      const nextTask = await currentQueue.current.get();

      nextTask();
    }
  };

  /* Responsible to put a new task in the queue and get the run the next one if it exists */
  const addTask = async (
    componentId: string,
    successCallback: (result: AxeResults) => void,
  ) => {
    const isEmptyPreviously = currentQueue.current.isEmpty();

    await currentQueue.current.put(async () => {
      const result: AxeResults = await runTask(componentId);

      if (successCallback) {
        successCallback(result);
      }

      popNextTaskAndRun();
      return result;
    });

    if (isEmptyPreviously) {
      popNextTaskAndRun();
    }
  };

  return (
    <ThemeProvider value={value}>
      <A11yContext.Provider
        value={{
          queue: currentQueue.current,
          addTask: addTask,
          popNextTaskAndRun: popNextTaskAndRun,
          isEnabled: isEnabled,
          shouldShowSuccess: shouldShowSuccess,
          shouldShowIncomplete: shouldShowIncomplete,
        }}
      >
        <View>{children}</View>
      </A11yContext.Provider>
    </ThemeProvider>
  );
};

export default ADADesignProvider;
