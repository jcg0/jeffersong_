import React from "react";
import "./App.css";
import Portfolio from "./pages/Portfolio";
// import the library
import { library } from "@fortawesome/fontawesome-svg-core";

// import your icons
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(fab, fas, far);

function App() {
  return (
    <div>
      <Portfolio />
    </div>
  );
}

export default App;
