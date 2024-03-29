import { useState } from "react";
import "./App.css";
// import editPopUp from "./components/editPopUp";
import { bookList } from "./components/booklist";

function App() {
  return (
    <div className="flex">
      <h1>Book Store</h1>
      <div className="add-button"></div>
      <div className="listgroup">
        
        <bookList/>
        
      </div>
    </div>
  );
}

export default App;
