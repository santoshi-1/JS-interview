import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="app">
      <h1>Open a Modal</h1>
      <button
        onClick={() => {
          setShowModal(!showModal);
        }}
      >
        Open Modal
      </button>

      {showModal ? (
        <Modal showModal={showModal} setShowModal={setShowModal} />
      ) : null}
    </div>
  );
}

export default App;
