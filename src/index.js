import React from "react";
import { createRoot } from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <MantineProvider withGlobalStyles withNormalizeCSS>
    <App />
  </MantineProvider>
);
