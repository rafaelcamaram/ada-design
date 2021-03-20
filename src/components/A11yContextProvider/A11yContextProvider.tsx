import React, { useRef } from "react";
import { Queue } from "async-fifo-queue";
import { reset, configure, run, AxeResults } from "axe-core";

import { A11yContext } from "hoc/withAccessibilityErrors/withAccessibilityErrors";
import View from "components/View";

type Props = {
  isEnabled: boolean;
};

const A11yContextProvider: React.FC<Props> = ({ children, isEnabled }) => {
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
    <A11yContext.Provider
      value={{
        queue: currentQueue.current,
        addTask: addTask,
        popNextTaskAndRun: popNextTaskAndRun,
        isEnabled: isEnabled,
      }}
    >
      <View>{children}</View>
    </A11yContext.Provider>
  );
};

export default A11yContextProvider;
