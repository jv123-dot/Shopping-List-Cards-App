import ItemCard from "./ItemCard"

type ItemListProps = {
    cardData: { id: number, order: number, text: string, description: string, image: string }[];
    deleteCard: (idToDelete: number) => void;
    changeDescription: (idToUpdate: number, description: string) => void
}

export default function ItemList({cardData, deleteCard, changeDescription} : ItemListProps) {
    return (
        <div className="d-flex flex-grow-1 flex-column ms-3">
            <div className="d-flex justify-content-center align-items-center bg-light">
                <ItemCard changeDescription={changeDescription} cardData={cardData} deleteCard={deleteCard}/>
            </div>
        </div>
    )
}