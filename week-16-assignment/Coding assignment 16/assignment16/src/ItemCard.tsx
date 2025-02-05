import DeleteButton from "./CardDelButton"
import CheckBox from "./Checkbox"
import UpdateButtonDescription from "./UpdateButton"

type ItemCardProps = {
    cardData: { id: number, order: number, text: string, description: string, image: string }[];
    deleteCard: (idToDelete: number) => void;
    changeDescription: (idToUpdate: number, description: string) => void
}


export default function ItemCard({cardData, deleteCard, changeDescription} : ItemCardProps) { // iterates over testData array and creates a card for each item in the array. It takes a prop called testProp that has 3 properties
    return (
        <div className="container mt-5 mb-4">
            <div className="row row-cols-md-3">
                {cardData.map(ld => (
                    <div key={ld.id} className="col">
                        <Card testProp={ld} changeDescription={changeDescription} deleteCard={deleteCard}/>
                    </div>
                ))}
            </div>
        </div>
    )
}


function Card({testProp, deleteCard, changeDescription} : 
    { testProp: {
        id: number,
        text: string, 
        description: string, 
        image: string}; 
        deleteCard: (id: number) => void;  
        changeDescription: (idToUpdate: number, description: string) => void }) {
    return (
        <div className="container">
            <div className="row">
                <div className="mb-4">
                    <div className="card" style={{maxWidth: "250px"}}>
                        <img src={testProp.image} className="card-img-top" style={{ height: "200px"}}/>
                        <div className="card-body">
                            <UpdateButtonDescription 
                            id={testProp.id}
                            changeDescription={changeDescription}/>
                        <h5 className="card-title">{testProp.text}</h5>
                        <span>{testProp.description}</span>
                        <DeleteButton deleteCard={() => deleteCard(testProp.id)}/>
                        <CheckBox/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

{/* <Card key={ld.id} testProp={ld}/>)} */}