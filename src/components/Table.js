import React from "react";
import Note from "./Note";
import NewNote from "./NewNote";

function Table({ notes, onAddNewNote, onDeleteNote, isLoad }) {
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
            handleDeleteNote={onDeleteNote}
          />
        ))}
      </div>
    </div>
  );
}

export default Table;
