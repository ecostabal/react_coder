import React from 'react'
import Item from '../Item/Item'

function ItemList(props) {
    const {products} = props;
    return (
        <div className="divContainer">
            {products.map((item) => (
                <Item key={item.id} {...item} />
            ))}
        </div>        
    )
}

export default ItemList