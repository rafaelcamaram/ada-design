import React from "react";
import Card from "./";
import View from "components/View";

export default {
  title: "Core/Card",
  component: Card,
};

export const Default = (): React.ReactNode => {
  return (
    <View height="100%" backgroundColor="#f6f9fb" padding={32}>
      <Card
        margin={32}
        headerContent="Card Title"
        footerContent="Footer content"
      >
        Card Content
      </Card>
      <Card margin={32} headerContent="Second Card Title">
        Card Content
      </Card>
    </View>
  );
};
