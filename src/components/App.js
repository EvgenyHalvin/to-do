import React from "react";
import { api } from "../utils/api";
import Table from "./Table";

function App() {
  const [notes, setNotes] = React.useState([]);

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

  // Редактирование записи
  function editNote(note) {
      api
        .editRecord(note._id, note.data)
        .then(() => {
          
        })
        .catch((err) => {
          console.log(err);
        });
  }

  // Индикатор загрузки
  function renderLoading(isLoading, formSelector) {
    const currentForm = document.querySelector(formSelector)
    const currentTextButton = currentForm.querySelector('.popup__submit-button');
  
    if (isLoading) {
      currentTextButton.textContent = 'Сохранение...';
      currentTextButton.setAttribute('disabled', true);
      currentTextButton.style.backgroundColor = '#787373'
    } else {
      currentTextButton.textContent = 'Сохранить';
      currentTextButton.removeAttribute('disabled', true);
      currentTextButton.style.backgroundColor = '#000'
    }
  }

  return (
    <Table
      notes={notes}
      onAddNewNote={addNewNote}
      onDeleteNote={removeNote}
      onEditNote={editNote}
    />
  );
}

export default App;
