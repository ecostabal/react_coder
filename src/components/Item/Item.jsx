import "./Item.css";


function Item(props) {
    const {title,description, img, price, stock} = props;

    return (
        <div className="tarjeta">
            <img width="200" src={img} alt="" />
            <h1>{title}</h1>
            <p>{description}</p>
            <h2>💰 $ {price}</h2>
            <span>Unidades Disponibles: {stock}</span>
        </div>
    )
}

export default Item;