import React from "react";
import ReactDOM from "react-dom";
import "./static/fonts.css";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import "./static/custom.css";

ReactDOM.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
  document.getElementById("root")
);
