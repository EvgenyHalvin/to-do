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

  return (
    <Table
      notes={notes}
      setNotes={setNotes}
      onAddNewNote={addNewNote}
      isLoad={isLoad}
    />
  );
}

export default App;
