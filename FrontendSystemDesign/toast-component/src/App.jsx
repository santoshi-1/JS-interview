import { StrictMode } from "react";
import "./App.css";
import useNotification from "./hooks/use-notification";

function App() {
  const { NotificationComponent, triggerNotification } =
    useNotification("top-right");

  return (
    <StrictMode>
      <div>
        <button
          onClick={() => {
            triggerNotification({
              type: "success",
              message: "File Sent Successfully!",
              duration: 10000,
            });
          }}
        >
          Trigger Success
        </button>
        <button
          onClick={() => {
            triggerNotification({
              type: "error",
              message: "File Sent Successfully!",
              duration: 10000,
            });
          }}
        >
          Trigger Error
        </button>
        {NotificationComponent}
      </div>
    </StrictMode>
  );
}

export default App;
