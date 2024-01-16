import Modal from "./Modal";
import {useModal} from '../../../hooks/useModal.js';
import CommunicationForm from "../../internalcomunicationsform/index.jsx";
const Modals = () => {
 const [isOpenFormAdd, openFormAdd, closeFormAdd] = useModal(false); // 
  return (
    <div>
      <button className="button" onClick={openFormAdd}>➕</button>
      <Modal isOpen={isOpenFormAdd} closeModal={closeFormAdd}>
        <h3>New Communication</h3>
        <CommunicationForm />
      </Modal>
    </div>
  );
};

export default Modals;
