// import { testData } from "./ItemCard"

type CardButtonDeleteProps = {
    deleteCard: () => void
}

export default function DeleteButton({deleteCard} : CardButtonDeleteProps) {
    return (
        <div>
            <button className="btn btn-danger float-end btn-sm" onClick={deleteCard}>X</button>
        </div>
    )
}

