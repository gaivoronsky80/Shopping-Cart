import React from 'react';
import AddBtn from './add-btn';
import RemoveBtn from './remove-btn';

export default function ProductListItem(props) {
    return (
        <div className="product-list-item">
            <h4>{props.product.name}</h4>
            <img 
                height = {100}
                title = {props.product.name}
                src = {`/products/${props.product.image}`}
                alt="product"
            />
            <div>
                <p>{props.product.description}</p>
            </div>
            <div>
                <h5>${props.product.price}</h5>
            </div>
            <AddBtn 
                cartItem={props.cartItem} 
                product={props.product} 
                addToCart={props.addToCart}
            />
            {
                props.cartItem
                    ? <RemoveBtn 
                    cartItem={props.cartItem} 
                    product={props.product} 
                    removeFromCart={props.removeFromCart}
                    />
                    : null
            }
        </div>
    )
}
