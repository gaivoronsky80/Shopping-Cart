import React from 'react'

export default function RemoveButton(props) {
    return (
        <button 
            className="btn btn-outline-dark"
            onClick = {
            () => props.removeFromCart(props.cartItem)}>Remove from cart
        </button>
    )
}
