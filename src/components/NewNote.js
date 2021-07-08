import React, { useState } from "react";

function NewNote({ handleNewNote, isLoad }) {
  const [newNote, setNewNote] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setNewNote((newNote) => ({
      ...newNote,
      [name]: value,
    }));
  }

  function submitNote(e) {
    e.preventDefault();
    return handleNewNote(newNote);
  }

  function addNote(e) {
    submitNote(e);
    setNewNote({
      ...newNote,
      name: "",
      age: "",
      email: "",
      phone: "",
    });
  }

  return (
    <form name="noteform" className="table__form">
      <input
        className="table__input table__column-name_type_name"
        type="text"
        name="name"
        placeholder="Имя"
        required
        value={newNote.name || ""}
        onChange={handleChange}
        autoFocus
      />
      <input
        className="table__input table__column-name_type_age"
        type="number"
        name="age"
        placeholder="Возраст"
        required
        value={newNote.age || ""}
        onChange={handleChange}
      />
      <input
        className="table__input table__column-name_type_email"
        type="email"
        name="email"
        placeholder="E-mail"
        required
        value={newNote.email || ""}
        onChange={handleChange}
      />
      <input
        className="table__input table__column-name_type_phone"
        type="tel"
        name="phone"
        placeholder="Номер телефона"
        required
        value={newNote.phone || ""}
        onChange={handleChange}
      />
      <button
        type="submit"
        onClick={addNote}
        className={
          newNote.name.length <= 1
            ? `submit-btn submit-btn_disabled`
            : `submit-btn`
        }
        disabled={newNote.name.length <= 1 || isLoad}
      >
        <div
          className={
            isLoad
              ? `spinner spinner_small`
              : `add-icon ${
                  newNote.name.length <= 1
                    ? `add-icon_disabled`
                    : `add-icon_active`
                }`
          }
        />
      </button>
    </form>
  );
}

export default NewNote;
