import React, {useEffect, useState} from "react"
import './App.css';
import Recipe from "./Recipe"

const App = () => {
  const APP_ID = "3f5e28b0"
  const APP_KEY = "b24237ed22026056db5556f8e64c4666";
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState("")
  const [query, setQuery] = useState("")
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
  useEffect( () => {
    getRecipes()
  }, [query])
  const getRecipes = async () => {
    const response = await fetch(url)
    const data = await response.json()
    const hits = data.hits
    setRecipes(hits)
  }
  const updateSearch = e => {
    setSearch(e.target.value)
  }
  const getSearch = e => {
    e.preventDefault()
    setQuery(search)
    setSearch("")
  }
  return(
    <div className="App">
      <form className="searchForm" onSubmit={getSearch}>
        <input type="text" className="searchBar" value={search} onChange={updateSearch}/>
        <button type="submit"className="searchButton">Search</button>
      </form>
      <div className="recipes">
      {recipes.map(recipe => (
        <Recipe
        Title={recipe.recipe.label}
        Image={recipe.recipe.image}
        Health_Labels={recipe.recipe.healthLabels}
        Calories={recipe.recipe.calories}
        Ingredients={recipe.recipe.ingredientLines}
        Link={recipe.recipe.url} />
    ))}
    </div>
    </div>
  )
}

export default App;
