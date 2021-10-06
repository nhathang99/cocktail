import React from 'react'
import SearchForm from "./SearchForm";
import CocktailList from './CocktailList';
function Home() {
    return (
        <div>
            <SearchForm/>
            <CocktailList/>
        </div>
    )
}

export default Home
