import React, { useState } from "react";
import Text from "components/Typography/Text";
import Modal from "./Modal";
import Heading from "components/Typography/Heading/Heading";
import Button from "components/Button";

export default {
  title: "Core/Modal",
  component: Modal,
};

export const Default = (): React.ReactNode => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <Button onClick={() => setIsVisible(true)}>Open Default Modal</Button>

      <Modal
        isOpen={isVisible}
        closeModal={() => setIsVisible(false)}
        variant="default"
      >
        <Heading size={800} marginTop={0}>
          Default Modal
        </Heading>
        <Text>Some random content</Text>
        <Button isFullWidth onClick={() => setIsVisible(false)}>
          Close
        </Button>
      </Modal>
    </>
  );
};

export const Trail = (): React.ReactNode => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <Button onClick={() => setIsVisible(true)}>Open Trail Modal</Button>

      <Modal
        isOpen={isVisible}
        closeModal={() => setIsVisible(false)}
        variant="trail"
      >
        <Heading size={800} marginTop={0}>
          Trail Modal
        </Heading>
        <Text>Some random content</Text>
        <Button isFullWidth onClick={() => setIsVisible(false)}>
          Close
        </Button>
      </Modal>
    </>
  );
};
