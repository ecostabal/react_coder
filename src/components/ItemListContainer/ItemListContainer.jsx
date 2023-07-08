import "./ItemListContainer.css";


function ItemListContainer(props){
    return (
    <div className="divContainer">
        <h1>{props.greeting}</h1>
    </div>
    )
}

export default ItemListContainer;