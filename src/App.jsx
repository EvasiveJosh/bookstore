import { useState } from "react";
import "./App.css";
// import editPopUp from "./components/editPopUp";
import { BookList } from "./components/booklist";

function App() {
  return (
    <div className="flex">
      <div className="add-button"></div>
      <div className="listgroup">
        
        <BookList/>
        
      </div>
    </div>
  );
}

export default App;
