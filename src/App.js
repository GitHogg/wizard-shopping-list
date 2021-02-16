import { useState } from 'react';
import './App.css';
import Headline from "./headline";
import Form from "./form";
import ShoppingListItem from "./shoppingListItem";



function App() {
  
  const [shoppingList, setShoppingList] = useState([])

  function addShoppingItem(title) {
    const newShoppingItem = { title, isDone: false }
    setShoppingList([...shoppingList, newShoppingItem])
  }

  function toggleCheckbox(indexToToggle) {
    const itemToToggle = shoppingList.find((item, index) => index === indexToToggle)
    itemToToggle.isDone = !itemToToggle.isDone
    const firstHalf = shoppingList.slice(0,indexToToggle)
    const secondHalf = shoppingList.slice(indexToToggle + 1)

    setShoppingList([...firstHalf, itemToToggle, ...secondHalf])
  }



  return (
    <div className="App">
      <Headline className="headline">Wizard shopping list</Headline>
      <Form onCreateShoppingItem={addShoppingItem}/>
      {shoppingList.map(({title, isDone}, index) => <ShoppingListItem title={title} isDone={isDone} onToggleItem = {()=>toggleCheckbox(index)}/>)}
    </div>
  );
}

export default App;
