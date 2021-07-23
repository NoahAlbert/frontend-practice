import React from 'react'
import FoodItem from './FoodItem'

const food = [
    {
        id: 1,
        foodName: "Pork Shoyu Ramen",
        price: "1500 ¥",
        ingredients: "Noodles, Pork, Broth, Egg, Mushroom, Chili"
    },
    {
        id: 2,
        foodName: "Miso Ramen",
        price: "1200 ¥",
        ingredients: "Noodles, Miso, Broth, Egg, Green Onion, Chili"
    },
    {
        id: 3,
        foodName: "Spicy Tonkatsu",
        price: "1400 ¥",
        ingredients: "Noodles, Pork, Broth, Egg, Onion, Chili, Bamboo Chutes"
    },
]

const FoodItems = () => {
    return(
        <>
            <h2>MENU</h2>
            {food.map(dish => (
                <FoodItem key={dish.id} item={dish} />
            ))}
        </>
    )
}

export default FoodItems