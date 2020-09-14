import React from 'react'



function Search ({handleInput, search})
{
    return (
    <section className="search-box" >
      <input type="text" placeholder="Sök efter en film..." onChange={handleInput} onKeyPress={search}/>
      <i className="fa fa-search" />
    </section>
     
    )
}
export default Search