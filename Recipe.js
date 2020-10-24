import React from "react"
import style from "./recipe.module.css"

const Recipe = ({Title, Image, Health_Labels, Calories, Ingredients, Link}) => {
    return (
        <div className={style.recipe}>
            <h1>{Title}</h1>
            <img className={style.image}  src={Image} alt={Title} />
            <span><h3>{Health_Labels}</h3><h3>{Math.round(Calories)}</h3></span>
            <ol>
                {Ingredients.map(ingredient => {
                    return (
                        <li>{ingredient}</li>
                    )
                })}
            </ol>
            <a href={Link}>For more information</a>
        </div>
    )
}
export default Recipe