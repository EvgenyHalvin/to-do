import React, { useState } from "react";
import { api } from "../utils/api";
import NoteTextArea from "./NoteTextArea";

function Note({ dataNote, handleDeleteNote, setGlobalId }) {
  const [isEdit, setIsEdit] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [note, setNote] = useState({
    name: dataNote.data.name,
    age: dataNote.data.age,
    email: dataNote.data.email,
    phone: dataNote.data.phone,
  });

  function onCardClickEdit() {
    setIsEdit(true);
    setGlobalId(dataNote._id)
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setNote((note) => ({
      ...note,
      [name]: value,
    }));
  }

  function deleteCard() {
    return handleDeleteNote(dataNote);
  }

  // Редактирование записи
  function editNote() {
    setIsLoaded(true);

    api
      .editRecord(dataNote._id, note)
      .then(() => {
        setIsEdit(false);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoaded(false);
      });
  }

  return (
    <NoteTextArea
      dataNote={dataNote}
      isEdit={isEdit}
      isLoaded={isLoaded}
      note={note}
      onCardClickEdit={onCardClickEdit}
      handleChange={handleChange}
      deleteCard={deleteCard}
      editNote={editNote}
      setGlobalId={setGlobalId}
    />
  );
}

export default Note;
