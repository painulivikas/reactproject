import React, { useState } from 'react';


import './App.css';
import FruitList from './FruitList';



const App = () => {

  const [inputList, setInputList] = useState("");

  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);

  };

  const listOfItems = () => {
    setItems((oldItems) => {
      inputList.replace('-', ' ')
      return [...oldItems, inputList];
    });
    setInputList("");
  };


  const deleteItems = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrelements, index) => {
        return index !== id;
      })
    })
  };

  return (
    <div className='main_div'>
      <div className='center_div'>
        <br />
        <h1>Fruit List With Quantity</h1>
        <br />
        <input type="text" placeholder='Add Fruit Name' value={inputList} onChange={itemEvent} />
        <button onClick={listOfItems}>Submit</button>

        <ol>
          {Items.map((itemval, index) => {
            return <FruitList
              key={index}
              id={index}
              text={itemval}
              onSelect={deleteItems} />;

          })
          }
        </ol>
      </div>
    </div>
  )
};

export default App;
