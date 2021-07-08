import React, { useState } from "react";
import { api } from "../utils/api";
import Table from "./Table";

function App() {
  const [notes, setNotes] = useState([]);
  const [isLoad, setIsLoad] = useState(false);

  // Рендер записей с сервера
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

  // Добавление записи в таблицу
  function addNewNote(newData) {
    setIsLoad(true);

    const newRecord = {
      data: newData,
    };

    api
      .putRecords(newRecord)
      .then((res) => {
        setNotes([...notes, res]);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoad(false);
      });
  }

  // Удаление записи из таблицы
  function removeNote(note) {
    api
      .deleteRecord(note._id)
      .then(() => {
        setNotes(notes.filter((n) => n._id !== note._id));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
      <Table
        notes={notes}
        onAddNewNote={addNewNote}
        onDeleteNote={removeNote}
        isLoad={isLoad}
      />
  );
}

export default App;
