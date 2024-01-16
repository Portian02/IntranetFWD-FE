import "./modal.css"

const Modal = ({children, isOpen, closeModal}) => {

    const handleModalContainerClick = (e) => e.stopPropagation() // This is to avoid the modal to close when clicking inside the modal

    return (
        <article onClick={closeModal} className={`modal ${isOpen&& "is-open"}`}>
            <div onClick={handleModalContainerClick} className="modal-container">
                <button className="modal-close" onClick={closeModal}>X</button>
                {children} {/* This is the content of the modal */}
            </div>    
        </article>
    )
}

export default Modal