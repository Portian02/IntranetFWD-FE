import Modal from "../../../Modal/Modal.js";
import { useModal } from "../../../../hooks/useModal.js";
import UpdateCommunicationForm from "../update/index.jsx";
import "./btn.css";
const UpdateModals = ({ id, initialData }) => {
  const [isOpenUpdate, openUdating, closeUpdate] = useModal(false); //
  return (
    <div>
      <button
        className="cube cube-hover"
        id= "btn"
        onClick={openUdating}
        type="button"
      >
        <div className="bg-top">
          <div className="bg-inner"></div>
        </div>
        <div className="bg-right">
          <div className="bg-inner"></div>
        </div>
        <div className="bg">
          <div className="bg-inner"></div>
        </div>
        <div className="text-update">Update</div>
      </button>
      <Modal isOpen={isOpenUpdate} closeModal={closeUpdate}>
        <h3>Updating the Communication</h3>
        <UpdateCommunicationForm id={id} initialData={initialData} />
      </Modal>
    </div>
  );
};

export default UpdateModals;
