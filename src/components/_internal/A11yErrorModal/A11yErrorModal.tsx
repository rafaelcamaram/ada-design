import React, { useMemo, useState } from "react";

import Flex from "components/Flex";
import Text from "components/Typography/Text";
import Modal from "components/Modal";
import ToggleSection from "components/ToggleSection";

import A11yErrorModalItemHeader from "./A11yErrorModalItemHeader";
import A11yErrorModalTabs from "./A11yErrorModalTabs";
import A11yErrorModalItemContent from "./A11yErrorModalItemContent";

type Props = {
  passes: any;
  incomplete: any;
  violations: any;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

const customModalStyle = {
  content: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
  },
} as const;

const A11yErrorModal: React.FC<Props> = ({
  passes,
  incomplete,
  violations,
  isOpen,
  setIsOpen,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const data = useMemo(() => {
    const dataByIndex = {
      0: violations,
      1: passes,
      2: incomplete,
    };

    return dataByIndex[selectedIndex] || [];
  }, [selectedIndex]);

  return (
    <Modal
      isOpen={isOpen}
      closeModal={() => setIsOpen(false)}
      variant="trail"
      customModalStyle={customModalStyle}
    >
      {isOpen && (
        <>
          <A11yErrorModalTabs
            passes={passes}
            incomplete={incomplete}
            violations={violations}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          />

          <Flex maxHeight={400} padding={32} paddingTop={16} overflowY="scroll">
            {data.length === 0 ? (
              <Text>No records available</Text>
            ) : (
              <Flex width="100%" flexDirection="column">
                {data.map((record, index) => {
                  return (
                    <ToggleSection
                      key={`${selectedIndex}-${index}`}
                      width="100%"
                      isToggleDisabled={!record.impact}
                      headerComponent={() => (
                        <A11yErrorModalItemHeader record={record} />
                      )}
                    >
                      {({ isCollapsed, setIsCollapsed }) => {
                        if (isCollapsed) return null;

                        return (
                          <A11yErrorModalItemContent
                            record={record}
                            setIsCollapsed={setIsCollapsed}
                          />
                        );
                      }}
                    </ToggleSection>
                  );
                })}
              </Flex>
            )}
          </Flex>
        </>
      )}
    </Modal>
  );
};

export default A11yErrorModal;
