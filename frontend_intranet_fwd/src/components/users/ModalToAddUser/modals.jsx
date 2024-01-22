import Modal from "../../Modal/Modal.js";
import Signup from "../../signup/index.jsx";
import { useModal } from "../../../hooks/useModal.js";
import "./btn.css";
const ModalsUserAdd = () => {
  const [isOpenFormAdd, openFormAdd, closeFormAdd] = useModal(false); //
  return (
    <div>
  <div id="user-list-btn-add" onClick={openFormAdd} tabIndex="0" className="plusButton">
      <svg className="plusIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
        <g mask="url(#mask0_21_345)">
          <path d="M13.75 23.75V16.25H6.25V13.75H13.75V6.25H16.25V13.75H23.75V16.25H16.25V23.75H13.75Z"></path>
        </g>
      </svg>
    </div>
      <Modal isOpen={isOpenFormAdd} closeModal={closeFormAdd}>
        <h3>New Communication</h3>
        < Signup/>
      </Modal>
    </div>
  );
};

export default ModalsUserAdd;
