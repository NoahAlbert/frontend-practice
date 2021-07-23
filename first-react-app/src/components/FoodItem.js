import React from 'react'

const FoodItem = (props) => {
    return(
        <div>
            <h5>{props.item.foodName}</h5>
            <p>{props.item.ingredients}</p>
            <p><strong>{props.item.price}</strong></p>
        </div>
    )
}

export default FoodItem