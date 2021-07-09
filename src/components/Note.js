import React, { useState } from "react";
import { api } from "../utils/api";
import NoteTextArea from "./NoteTextArea";

function Note({ dataNote, notes, setNotes }) {
  const [isEdit, setIsEdit] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [note, setNote] = useState({
    name: dataNote.data.name,
    age: dataNote.data.age,
    email: dataNote.data.email,
    phone: dataNote.data.phone,
  });

  function onCardClickEdit() {
    setIsEdit(true);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setNote((note) => ({
      ...note,
      [name]: value,
    }));
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

  // Удаление записи из таблицы
  function removeNote() {
    setIsDeleted(true);

    api
      .deleteRecord(dataNote._id)
      .then(() => {
        setNotes(notes.filter((n) => n._id !== dataNote._id));
      })
      .catch((err) => {
        console.log(err);
        setIsDeleted(false);
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
      deleteNote={removeNote}
      editNote={editNote}
      isDeleted={isDeleted}
    />
  );
}

export default Note;
