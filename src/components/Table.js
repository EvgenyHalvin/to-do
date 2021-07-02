import React from "react";
import Note from "./Note";
import { api } from "../utils/api.js";
import NewNote from "./NewNote";

function Table() {
  const [notes, setNotes] = React.useState([]);

  React.useEffect(() => {
    api
      .getRecords()
      .then((recordsData) => {
        setNotes(recordsData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function addNewNote(newData){
    const newRecord = {
      data: newData,
    };
    setNotes([...notes, newRecord]);
  }

  function removeNote(index) {
    setNotes(notes.filter((_, k) => k !== index));
  }

  return (
    <div className="table">
      <h1 className="table__title">Таблица CRUD</h1>
      <div className="table__add-area">
        <NewNote handleNewNote={addNewNote} />
      </div>
      <div className="table__column-names">
        <p className="table__column-name table__column-name_type_name">Имя</p>
        <p className="table__column-name table__column-name_type_age">
          Возраст
        </p>
        <p className="table__column-name table__column-name_type_email">
          E-mail
        </p>
        <p className="table__column-name table__column-name_type_phone">
          Номер телефона
        </p>
      </div>
      <div className="table__list">
        {notes.map((note, i) => (
          <Note
            key={i}
            id={i}
            dataNote={note}
            handleDeleteNote={() => removeNote(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default Table;
