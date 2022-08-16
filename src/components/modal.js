import './modal.css';

const Modal = ({ handleClose, show, current }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          <img src={current.anime_img} alt="movie poster" className="img"/>
          <button type="button" onClick={handleClose}>
            Close
          </button>
        </section>
      </div>
    );
};

export default Modal