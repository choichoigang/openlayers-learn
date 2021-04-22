import React from "react";
import GlobalReset from "./style/globalStyle";
import MarkerMap from "./components/Page/MarkerMap";

function App(): JSX.Element {
  return (
    <div>
      <GlobalReset />
      <MarkerMap />
    </div>
  );
}

export default App;
