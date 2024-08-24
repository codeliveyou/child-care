import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* Wrap the application in a div with full width and height and a specific font */}
    <div className="font-sora w-full h-full">
      {/* Render the main application component */}
      <App />
    </div>
  </React.StrictMode>,
);
