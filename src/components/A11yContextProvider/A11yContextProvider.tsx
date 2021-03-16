import React, { useEffect, useRef } from "react";
import { Queue } from "async-fifo-queue";
import axe, { AxeResults } from "axe-core";

import { A11yContext } from "../../hoc/withAccessibilityErrors/withAccessibilityErrors";
import View from "../View";

const A11yContextProvider: React.FC = ({ children }) => {
  const currentQueue = useRef(new Queue());

  console.log("Constructor A11yContextProvider");
  useEffect(() => {
    console.log("Init A11yContextProvider");
  }, []);

  useEffect(() => {
    console.log("The queue has changed!");
    console.log(`Size: ${currentQueue.current.currSize}`);
  }, [currentQueue.current.currSize]);

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

      axe.reset();
      if (config) {
        axe.configure(config);
      }

      console.log(`Before axe.run: ${componentId}`);

      const adaResponse: AxeResults = await axe.run(
        document.getElementById(componentId),
        options,
      );
      console.log(`After axe.run: ${componentId}`);

      resolve(adaResponse);
    });
  };

  const popNextTaskAndRun = async () => {
    const isEmpty = currentQueue.current.isEmpty();

    if (!isEmpty) {
      console.log("There's a item, let's get it");

      const nextTask = await currentQueue.current.get();

      nextTask();
    } else {
      console.log("Sorry, the queue is empty");
    }
  };

  /* Responsible to put a new task in the queue and get the run the next one if it exists */
  const addTask = async (
    componentId: string,
    successCallback: (result: AxeResults) => void,
  ) => {
    console.log(`Adding a new task ${componentId}`);
    const isEmptyPreviously = currentQueue.current.isEmpty();
    console.log({ isEmptyPreviously });

    await currentQueue.current.put(async () => {
      console.log("The current size is: " + currentQueue.current.currSize);
      console.log(`Running task ${componentId}`);
      const result: AxeResults = await runTask(componentId);
      console.log(`Result for task ${componentId}`);

      console.log({ result });
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
      }}
    >
      <View>{children}</View>
    </A11yContext.Provider>
  );
};

export default A11yContextProvider;
