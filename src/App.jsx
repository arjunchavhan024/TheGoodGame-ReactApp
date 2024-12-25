import React, { useState, useEffect } from 'react'
import "./App.css"


const App = () => {
  const [cards, setCards] = useState([])
  const [querry, setQuerry] = useState('');

  const fetchData = async () =>{
    let a = await fetch("https://api.sampleapis.com/beers/ale");
    let data = await a.json();
    setCards(data);
    console.log(data)
  }

  useEffect( () => {
    fetchData();
  }, [])
  const searchData = cards.filter((card) => card.name.toLowerCase().includes("Blue"))
  console.log(searchData)
  return (
    <div>
      <div className="container">
        <nav class="navbar">
            <input type="text" name="search" placeholder='Search anything...' id="search-fild" onChange={ (e) => setQuerry(e.target.value.toLowerCase())} />
        </nav>
        {cards.filter((card) => card.name.toLowerCase().includes(querry)).map((card) => {
          return <div key={card.id} className="cards">
            <div className="card" style={{width: "18rem"}}>
            <img src={card.image} className="card-img-top" alt="" />
            <div className="card-body">
              <h5 className="card-title">Name: {card.name}</h5>
              <h6 class="card-subtitle mb-2 text-body-secondary">Price: {card.price}</h6>
              <p className="card-text">Review out Of 5 {card.rating.average}</p>
              <a href="#" class="btn btn-primary">Buy Now</a>
            </div>
            </div>
          </div>
        })}
      </div>

    </div>
  )
}

export default App
