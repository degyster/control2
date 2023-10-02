
import React, { useState } from "react";
import './App.css';

function App() {
  const initialData = [
    { id: 1, name: 'Велосипед', price: 1000, count: 1 },
    { id: 2, name: 'Самокат', price: 700, count: 1 },
    { id: 3, name: 'Ролики', price: 1300, count: 2 },
    { id: 4, name: 'Сноуборд', price: 19000, count: 4 }
  ];

  const [items, setItems] = useState(initialData);

  function addNewItem() {
    const newItem = prompt("Имя и цена через пробел").split(' ');
    if (newItem.length === 2) {
      const [name, price] = newItem;
      const newItemObject = {
        id: Date.now(),
        name,
        price: parseFloat(price), // Преобразуем цену в число
        count: 1
      };
      setItems([...items, newItemObject]);
    } else {
      alert("Неверно");
    }
  }

  function incrementCount(id) {
    const updatedItems = items.map((item) => {
      if (item.id === id && item.count < 25) {
        return { ...item, count: item.count + 1 };
      }
      return item;
    });
    setItems(updatedItems);
  }

  function decrementCount(id) {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        if (item.count > 1) {
          return { ...item, count: item.count - 1 };
        } else {
          removeItem(id);
          return null; 
        }
      }
      return item;
    });
  
    const filteredItems = updatedItems.filter((item) => item !== null);
    setItems(filteredItems);
  }
  

  function removeItem(id) {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  }

  return (
    <div className="App_osnova">
      <h1 className='App_title'>Список товаров:</h1>
      <div className='App_itemList'>
        <button onClick={addNewItem}>Добавить новый предмет</button>
        {items.map((item) => (
          <div key={item.id} onDoubleClick={() => removeItem(item.id)}>
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <p>Количество: {item.count}</p>
            <button onClick={() => incrementCount(item.id)}>+</button>
            <button onClick={() => decrementCount(item.id)}>-</button>
          </div>
        ))}

      </div>
    </div>
  );
}

export default App;

