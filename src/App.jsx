import { useState } from "react";
import "./App.css";
// import editPopUp from "./components/editPopUp";
import { BookList } from "./components/booklist";
import { AddBookPopUp } from "./components/AddBookModal";
import { EditBookPopUp } from "./components/EditBookModal";

function App() {
  
  const [openAddModal,setAddModal] = useState(false);
  return (
    <div className="flex">
      <div className="add-button">
        <button className="openAddButton" onClick={() => {setAddModal(true);}}>Click Here to Add Book</button>
        {openAddModal && <AddBookPopUp closeAddBook={setAddModal}/>}
      </div>
      <div className="listgroup">
        <BookList/>
      </div>
    </div>
  );
}

export default App;
