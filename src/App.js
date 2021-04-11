import React, { useState } from 'react';
import items from './data';
import Gun from './Gun';
import Category from './Categories'
const allCategories = ['all', ...new Set(items.map((item) => item.category))]
console.log(allCategories);
function App() {
  const [gunItems, setGunItems] = useState(items)
  const [categories, setCategories] = useState(allCategories);


  const filterItems = (category) => {
    if (category === 'all') {
      setGunItems(items);
      return;
    }
    const newItems = items.filter((items) =>
      items.category === category
    );
    setGunItems(newItems);
  };
  return (
    <main>    <div className="">
      <header className="App-header">
        <h1>Pew Pew List</h1>
      </header>
      <section className="Category">
        <Category categories={categories} filterItems={filterItems} />
        <Gun items={gunItems} />
      </section>
    </div>
    </main>

  );
}

export default App;
