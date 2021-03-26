import React from "react";
import {
  Button,
  withAccessibilityErrors,
  A11yContextProvider,
} from "ada-design";

const ImageWithA11y = withAccessibilityErrors(() => {
  return (
    <img
      src="https://rnpet.com.br/wp-content/uploads/2020/02/Welsh-Corgi-Pembroke.jpg"
      alt="Awesome Corgi"
    />
  );
});

function App() {
  return (
    <A11yContextProvider isEnabled={true}>
      <div className="App" role="main">
        <h1>This is my awesome page</h1>
        <a href="#main-content">Skip to main content</a>

        <ImageWithA11y />

        <main id="main-content">
          <Button>Test</Button>
        </main>
      </div>
    </A11yContextProvider>
  );
}

export default App;
