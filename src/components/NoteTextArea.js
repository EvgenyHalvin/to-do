import React from "react";

function NoteTextArea({
  dataNote,
  isEdit,
  isLoaded,
  note,
  onCardClickEdit,
  handleChange,
  deleteCard,
  editNote,
}) {
  return (
    <div className="table__item">
      {isEdit ? (
        <>
          <input
            className="table__input table__column-name_type_name"
            type="text"
            name="name"
            placeholder="Имя"
            required
            value={note.name || ""}
            onChange={handleChange}
            autoFocus
          />
          <input
            className="table__input table__column-name_type_age"
            type="number"
            name="age"
            placeholder="Возраст"
            required
            value={note.age || ""}
            onChange={handleChange}
          />
          <input
            className="table__input table__column-name_type_email"
            type="email"
            name="email"
            placeholder="E-mail"
            required
            value={note.email || ""}
            onChange={handleChange}
          />
          <input
            className="table__input table__column-name_type_phone"
            type="number"
            name="phone"
            placeholder="Номер телефона"
            required
            value={note.phone || ""}
            onChange={handleChange}
          />
          <div className="table__btns-area">
            <button
              className={isLoaded ? `spinner` : isEdit ? `saveBtn` : `editBtn`}
              onClick={isEdit ? editNote : onCardClickEdit}
              disabled={isLoaded}
            ></button>
            <button className="removeBtn" onClick={deleteCard}></button>
          </div>
        </>
      ) : dataNote.data ? (
        <>
          <p className="table__text table__text_type_name">{`${
            note.name ? note.name : `Имя не указано`
          }`}</p>
          <p className="table__text table__text_type_age">{`  ${
            note.age ? note.age : `—`
          }`}</p>
          <p className="table__text table__text_type_email">{`  ${
            note.email ? note.email : `E-mail не указан`
          }`}</p>
          <p className="table__text table__text_type_phone">{`  ${
            note.phone ? note.phone : `Телефон не указан`
          }`}</p>
          <div className="table__btns-area">
            <button
              className={isEdit ? `saveBtn` : `editBtn`}
              onClick={onCardClickEdit}
            ></button>
            <button className="removeBtn" onClick={deleteCard}></button>
          </div>
        </>
      ) : (
        <>
          <div
            style={{
              padding: "0 10px",
              backgroundColor: "#FFDFDE",
              width: "671px",
              borderRadius: "2px",
            }}
          >
            {`Информация отсутствует(data not found)`}
          </div>
          <div className="table__btns-area">
            <button className="editBtn editBtn_disabled"></button>
            <button className="removeBtn" onClick={deleteCard}></button>
          </div>
        </>
      )}
    </div>
  );
}

export default NoteTextArea;
