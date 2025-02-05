import SideBar from "./SideBar";
import ItemList from "./ItemList";
import broccoliimage from "./assets/reactbroccoli.png"
import apples from "./assets/apples.png"
import carrots from "./assets/carrots.png"
import bananas from "./assets/bananas.png"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from "react";



const testData = [
    {
        id: 0,
        order: 1,
        text: "Broccoli",
        description: "Lorem ipsum dolor sit amet",
        image: broccoliimage
    },
    {
        id: 1,
        order: 2,
        text: "Apples",
        description: "Lorem ipsum dolor sit amet",
        image: apples
    },
    {
        id: 2,
        order: 3,
        text: "Carrots",
        description: "Lorem ipsum dolor sit amet",
        image: carrots
    },
    {
        id: 3,
        order: 4,
        text: "Carrots",
        description: "Lorem ipsum dolor sit amet",
        image: carrots
    },
    {
        id: 4,
        order: 5,
        text: "Carrots",
        description: "Lorem ipsum dolor sit amet",
        image: carrots
    }
]


export default function App() { // setting initial state (cardData) to be equal to testData object array
    const [cardData, setCardData] = useState(testData)

    // // card delete // changing state by calling setCardData and iterating over the object array with filter(),
    const deleteCard = (idToDelete: number) => { // c represents each object in the array. Filter method creates a new array and returns whichever items were selected by their ID
        setCardData(cardData.filter(c => c.id !== idToDelete)) // we use !== to ID in this case to return everything but the one we intend to delete
    }
    // --------- 

    
    // // creating card // uses spread operator to copy the old array and add this object to it to update the state
    const addCard = ( name: string, description: string) => {
        setCardData([
            ...cardData, {
                id: cardData.length,
                order: cardData.length + 1,
                text: name,
                description: description,
                image: bananas
            }
        ])
    }
    // ------


    // updating an aspect of the card. In this case the description  
    const changeDescription = (idToUpdate: number, newDescription: string) => {
        setCardData(cardData.map(card => 
            card.id !== idToUpdate ? card : {
                ...card, 
                description: newDescription
            }
        ))
    }
    // ---------

    
    // changing background color
    const [color, setColor] = useState('sidebar1') // setting initial "color" state variable to be sidebar1

    const changeColorID = () => { // function to update the state, changing the name of the ID for CSS styling using ternary operator
        setColor(color === 'sidebar1' ? 'sidebar2' : 'sidebar1')
    }
    // ---------

    return (
        <> 
            <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap Navbar Test</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <Nav.Link> <button className="btn btn-sm btn-info" onClick={changeColorID}>Change Color</button></Nav.Link>
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link> <button className="btn btn-sm btn-info" onClick={changeColorID}>Change Color</button></Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="d-flex flex-column container p-5 mx-auto" id={color}>
                <div className="d-flex flex-grow-1">
                    <SideBar addCard={addCard}/>
                    <ItemList changeDescription={changeDescription} cardData={cardData} deleteCard={deleteCard}/>
                </div>
            </div>
        </>
    )

}