import React, { useState } from "react";
import Note from "./Note";
import NewNote from "./NewNote";

function Table({ notes, onAddNewNote, onDeleteNote, isLoad }) {
  const [globalId, setGlobalId] = useState(null);

  function cancelEdit() {
    console.log("ok")
  }

  return (
    <div
      className="table"
      onClick={(e) => {
        if (globalId) {
          if (globalId !== e.target.closest(".table__item")?.id) {
            cancelEdit();
            setGlobalId(null);
          }
        }
      }}
    >
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
            setGlobalId={setGlobalId}
          />
        ))}
      </div>
    </div>
  );
}

export default Table;
