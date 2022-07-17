import React from "react";
import {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setCategory] = useState ("All")

  function handleSelectedCategory(event) {
    setCategory(event.target.value)
  }

  const updateCategory = items.filter((item) => {
    if(selectedCategory === 'All'){
      return true;
    }else {
      return item.category === selectedCategory;
    }
  })


  return (
    <div className="ShoppingList">
      <div className="Filter">
        {/* <select name="filter"> */}
        <select name="filter" onChange={handleSelectedCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
      {updateCategory.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
