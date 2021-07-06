import React from "react";

class Note extends React.Component {
  constructor(props) {
    super(props);

    this.dataNote = props.dataNote;
    this.infoNote = props.dataNote.data;
    this.deleteCard = this.deleteCard.bind(this);
    this.editNote = this.editNote.bind(this);

    this.addNewName = this.addNewName.bind(this);
    this.addNewAge = this.addNewAge.bind(this);
    this.addNewEmail = this.addNewEmail.bind(this);
    this.addNewPhone = this.addNewPhone.bind(this);

    this.state = {
      isEdit: false,
      editInfo: this.infoNote,
    };
  }

  deleteCard() {
    return this.props.handleDeleteNote(this.dataNote);
  }

  editNote() {
    this.setState({
      isEdit: !this.state.isEdit,
    });

    this.dataNote.data = this.state.editInfo;

    return this.props.handleEditNote(this.dataNote);
  }

  addNewName(e) {
    this.setState({
      editInfo: { ...this.state.editInfo, name: e.target.value },
    });
  }

  addNewAge(e) {
    this.setState({
      editInfo: { ...this.state.editInfo, age: e.target.value },
    });
  }

  addNewEmail(e) {
    this.setState({
      editInfo: { ...this.state.editInfo, email: e.target.value },
    });
  }

  addNewPhone(e) {
    this.setState({
      editInfo: { ...this.state.editInfo, phone: e.target.value },
    });
  }

  onCardClickEdit = () => {
    this.setState({
      isEdit: !this.state.isEdit,
    });
  };

  render() {
    return (
      <li className="table__item">
        {/* Если была нажата(true) кнопка "Редактировать", то включаем инпуты для изменения значений */}
        {this.state.isEdit ? (
          <>
            <input
              className="table__input table__column-name_type_name"
              type="text"
              name="name"
              placeholder="Имя"
              required
              value={this.state.editInfo.name}
              onChange={this.addNewName}
            />
            <input
              className="table__input table__column-name_type_age"
              type="number"
              name="age"
              placeholder="Возраст"
              required
              value={this.state.editInfo.age}
              onChange={this.addNewAge}
            />
            <input
              className="table__input table__column-name_type_email"
              type="email"
              name="email"
              placeholder="E-mail"
              required
              value={this.state.editInfo.email}
              onChange={this.addNewEmail}
            />
            <input
              className="table__input table__column-name_type_phone"
              type="number"
              name="phone"
              placeholder="Номер телефона"
              required
              value={this.state.editInfo.phone}
              onChange={this.addNewPhone}
            />
            <div className="table__btns-area">
              <button
                // Если включен режим редактирования(isEdit === true), то меняем кнопку редактирования на кнопку сохранения.
                // Верна и обратная логика.
                className={this.state.isEdit ? `saveBtn` : `editBtn`}
                // В случае если была нажата кнопка редактирвоания, будет отображаться кнопка сохранения, при нажатии на которую будет
                // вызвана функция-колбэк для сохранения измененных данных.
                onClick={
                  this.state.isEdit ? this.editNote : this.onCardClickEdit
                }
              ></button>
              <button className="removeBtn" onClick={this.deleteCard}></button>
            </div>
          </>
        ) : // Если кнопка "Редактировать" не нажималась(false), то проверяем наличие data-информации(data: {name, age, email, phone}).
        // Если data-информация присутствует(true), то отображаем эту информацию в соответствующих полях.
        this.state.editInfo ? (
          <>
            <p className="table__text table__text_type_name">{`${
              this.state.editInfo.name
                ? // Если в data-информации присутствует поле с информацией об имени, то отображаем его в соответсвующем поле.
                  // Если имя отсутствует, то уведомляем об этом пользователя. Такое условие для всех полей строки.
                  this.state.editInfo.name
                : `Имя не указано`
            }`}</p>
            <p className="table__text table__text_type_age">{`  ${
              this.state.editInfo.age ? this.state.editInfo.age : `—`
            }`}</p>
            <p className="table__text table__text_type_email">{`  ${
              this.state.editInfo.email
                ? this.state.editInfo.email
                : `E-mail не указан`
            }`}</p>
            <p className="table__text table__text_type_phone">{`  ${
              this.state.editInfo.phone
                ? this.state.editInfo.phone
                : `Телефон не указан`
            }`}</p>
            <div className="table__btns-area">
              <button
                className={this.state.isEdit ? `saveBtn` : `editBtn`}
                onClick={this.onCardClickEdit}
              ></button>
              <button className="removeBtn" onClick={this.deleteCard}></button>
            </div>
          </>
        ) : (
          // Если data-информация отсутствует(false), то отображаем поле с информацией об остутствии data-информации.
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
              <button className="removeBtn" onClick={this.deleteCard}></button>
            </div>
          </>
        )}
      </li>
    );
  }
}

export default Note;
