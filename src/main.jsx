// import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// export const GeneralContext=createContext()
ReactDOM.createRoot(document.querySelector("#root")).render(<App />);

{
  /* <GeneralContext.Provider value={{myName:"Hein Htet"}}>
        <App />
    </GeneralContext.Provider> */
}
