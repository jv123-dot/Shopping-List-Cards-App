import { useState, } from "react"
import { Modal, ModalHeader } from "react-bootstrap"


type UpdateButtonProps = {
    id: number
    changeDescription: (idToUpdate: number, description: string) => void
}


export default function UpdateButtonDescription({ changeDescription, id }: UpdateButtonProps) {

    const [isEditing, setIsEditing] = useState(false) // state variables to manage text area box inside modal, whether it's in edit mode or not
    const [text, setText] = useState('') // state variables to change text in the description
    const [isModalOpen, setIsModalOpen] = useState(false) // state variables to manage the Modal(open, closed)
    
    const handleEdit = () => { // changes state of isediting to be true
        setText('')
        setIsEditing(true)
    }

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => { // function to change the state "text" to be whatever is in the input field
        setText(e.target.value)
    }

    const handleSave = () => { // calls changeDescription function, saving the new value, and changes isediting to be false, 
    // closes modal by changing ismodalopen state to false
        setText('')
        changeDescription(id, text)
        setIsEditing(false)
        setIsModalOpen(false)
    }

    const handleClose = () => { // function to change state of isediting or ismodalopen to false. Closing editing box or the modal
        setIsEditing(false)
        setIsModalOpen(false)
    }

    return ( 
            <div>
                <button className="btn btn-dark btn-sm" 
                onClick={() => setIsModalOpen(true)}>Edit</button>
                <Modal show={isModalOpen} onHide={handleClose}>
                <ModalHeader>
                    <Modal.Title>Edit Description</Modal.Title>
                </ModalHeader>
                <Modal.Body>
                {isEditing && ( 
                    <div>
                        <div>
                            <textarea value={text} onChange={handleChange}/>    
                        </div>
                        <div>
                            <button className="btn btn-success btn-sm me-1" onClick={handleSave}>Save</button>
                            <button className="btn btn-danger btn-sm" onClick={() => setIsModalOpen(false)}>Close</button>
                        </div>
                    </div>
                )}
                {!isEditing && (
                <div>
                <button className="btn btn-dark me-1" onClick={handleEdit}>Edit</button> 
                <button className="btn btn-danger" onClick={() => setIsModalOpen(false)}>Close</button>
                </div>           
                )}             
                </Modal.Body>
                </Modal>
            </div>    
    )
}