import Modal from "../../Modal/Modal.js";
import "../profile.css";
import {useModal} from '../../../hooks/useModal.js';
import PasswordChange from "../../changePassword/index.jsx";
const ChangePassword = () => {
  
  const [isOpenFormAdd, openFormAdd, closeFormAdd] = useModal(false);
  return (
    <div>
    <button className="change-btn" onClick={openFormAdd}>
                  {" "}
                  <p className="text-ch">Change Password </p>
      </button>
      <Modal isOpen={isOpenFormAdd} closeModal={closeFormAdd}>
        <PasswordChange />
      </Modal>
    </div>
  );
};

export default ChangePassword;
