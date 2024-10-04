import "./modal.css";

const Modal = ({ setShowModal }) => {
  return (
    <div className="modal">
      <div className="modal__background" onClick={() => setShowModal(false)}>
        <div className="modal__container">
          <div className="modal__controls">
            <button
              type="button"
              className="modalClose"
              onClick={() => setShowModal(false)}
            >
              close
            </button>
          </div>
          <h1>Modal Content</h1>
        </div>
      </div>
    </div>
  );
};

export default Modal;
