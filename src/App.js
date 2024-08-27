import React, { useState } from 'react';
import './App.css';
import Card from './components/card'; 
import { items } from './constants/items';

function App() {
  // Inisialisasi state 'cards' dengan nilai awal dari 'items'
  const [cards, setCards] = useState(items);

  const containerStyle = { 
    display: 'flex', 
    justifyContent: 'center', 
    flexDirection: 'column', 
    alignItems: 'center', 
    paddingLeft: 20 
  };

  const cardContainerStyle = { 
    display: 'flex', 
    flexDirection: 'column', 
    rowGap: 20, 
    paddingLeft: 20 
  };

  const cardStyle = { 
    border: '2px solid black', 
    borderRadius: 10, 
    width: 350, 
    paddingLeft: 20 
  };

  const headStyle = { 
    textAlign: 'center'
  };

  // Fungsi untuk menambah item baru
  const handleAddItem = () => {
    const newCard = { 
      title: 'New Card h2', 
      subtitle: 'New Card h3' 
    };
    setCards([...cards, newCard]);
  };

  // Fungsi untuk menghapus item terakhir
  function handleRemoveItem() {
    if (cards.length > 0) {
      setCards(cards.slice(0, -1)); // Menghapus item terakhir dari array
    }
  }

  return (
    <div style={containerStyle}>
      <h1 style={headStyle}>Task: Add Three Card Elements</h1>
      <div style={cardContainerStyle}>
        {cards.map((card, index) => (
          <Card key={index} title={card.title} subtitle={card.subtitle} style={cardStyle} />
        ))}
      </div>
      <button onClick={handleAddItem} style={{ marginTop: 10 }}>Tambah Item</button> {/* Tombol tambah item */}
      <button onClick={handleRemoveItem} style={{ marginTop: 10 }}>Hapus Item</button> {/* Tombol hapus item */}
    </div>
  );
}

export default App;
