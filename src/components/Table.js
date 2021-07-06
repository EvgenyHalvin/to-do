import React from "react";
import Note from "./Note";
import NewNote from "./NewNote";

function Table(props) {
  const { notes, onAddNewNote, onDeleteNote, onEditNote } = props;

  return (
    <div className="table">
      <h1 className="table__title">Таблица CRUD</h1>
      <div className="table__add-area">
        <NewNote handleNewNote={onAddNewNote} />
      </div>
      <div className="table__list">
        {notes.map((note, i) => (
          <Note
            key={note._id}
            id={i}
            dataNote={note}
            handleDeleteNote={onDeleteNote}
            handleEditNote={onEditNote}
          />
        ))}
      </div>
    </div>
  );
}

export default Table;
