import { useState } from "react";
import SideBarButton from "./SideBarButton"

type SidebarProps = {
    addCard: ( name: string, description: string) => void
}

export default function SideBar({addCard}: SidebarProps) {
    const [itemName, setItemName] = useState("")
    const [itemDescription, setItemDescription] = useState('')

    function handleSubmit(event: any) { // don't know what to put as the type, did find "React.FormEvent<HTMLFormElement>" as a potential option online but not sure
        event.preventDefault();

        addCard(itemName, itemDescription)
        setItemName('')
        setItemDescription('')
    }

    function handleClear() {
        setItemName('')
        setItemDescription('')
    }


    return (
        <div>
            <form method="post" onSubmit={handleSubmit}>
                    <h4 className="text-body-emphasis">Item name.</h4>
                        <label className="text-white mb-1">
                            <input className="mt-1 mb-3" 
                            name="postItemName"
                            onChange={(event) => setItemName(event.target.value)}
                            value={itemName}
                            />
                        </label>    
                    <hr/>
                    <h5 className="text-body-emphasis">Item description.</h5>
                        <label>
                            <textarea className="mb-3" rows={3} cols={18}
                            name="postDescription"
                            onChange={(event) => setItemDescription(event.target.value)}
                            value={itemDescription} 
                            />
                        </label>
                    <hr/>
                    <h5 className="text-body-emphasis">Item image.</h5>
                        <label className="form-label text-body-emphasis">
                            <input name="postImg" className="form-control mb-2" type="file"></input>
                        </label>
                    <SideBarButton />
                </form>
                <button className="btn btn-secondary" onClick={handleClear}>Clear Form</button>
        </div>
    )
}


// const handleChange = (event) => setFormValues({
//     ...formValues,
//     [event.target.name]: event.target.value
// })