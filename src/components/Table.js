import React from "react";
import Note from "./Note";
import NewNote from "./NewNote";

function Table({ notes, onAddNewNote, isLoad, setNotes }) {
  return (
    <div className="table">
      <h1 className="table__title">Таблица CRUD</h1>
      <div className="table__add-area">
        <NewNote handleNewNote={onAddNewNote} isLoad={isLoad} />
      </div>
      <div className="table__list">
        {notes.map((note, i) => (
          <Note
            key={note._id}
            dataNote={note}
            notes={notes}
            setNotes={setNotes}
          />
        ))}
      </div>
    </div>
  );
}

export default Table;
