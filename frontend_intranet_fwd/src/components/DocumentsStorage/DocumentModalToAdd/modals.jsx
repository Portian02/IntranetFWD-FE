import Modal from "../../Modal/Modal.js";
import {useModal} from '../../../hooks/useModal.js';
import "./btn.css";
import DocumentsStorageForm from "../../DocumentsStorageForm/index.jsx";
const ModalsDocumentsAdd = () => {
 const [isOpenFormAdd, openFormAdd, closeFormAdd] = useModal(false); // 
  return (
    <div>
       <div id="documents-add-container" onClick={openFormAdd} tabIndex="0" className="plusButton">
      <svg className="plusIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
        <g mask="url(#mask0_21_345)">
          <path d="M13.75 23.75V16.25H6.25V13.75H13.75V6.25H16.25V13.75H23.75V16.25H16.25V23.75H13.75Z"></path>
        </g>
      </svg>
    </div>
      <Modal isOpen={isOpenFormAdd} closeModal={closeFormAdd}>
        <DocumentsStorageForm />
      </Modal>
    </div>
  );
};

export default ModalsDocumentsAdd;
