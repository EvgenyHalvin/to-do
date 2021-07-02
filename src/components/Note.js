import React from "react";

class Note extends React.Component {
  constructor(props) {
    super(props);

    this.id = props.id;
    this.removeNote = props.handleDeleteNote;
    this.infoNote = props.dataNote.data;

    this.state = {
      isEdit: false,
      editInfo: this.infoNote,
    };
  }

  onCardClickEdit = () => {
    this.setState({
      isEdit: !this.state.isEdit,
    });
  };

  render() {
    return (
      <li className="table__item">
        {this.state.isEdit ? (
          <input
            type="text"
            defaultValue={this.state.editText}
            className="table__item-input"
            onChange={this.handleChange}
            autoFocus
          ></input>
        ) : this.state.editInfo ? (
          <>
            <p className="table__text table__text_type_name">{` ${
              this.id + 1
            }.  ${
              this.state.editInfo.name
                ? this.state.editInfo.name
                : `Имя не указано`
            }`}</p>
            <p className="table__text table__text_type_age">{`  ${
              this.state.editInfo.age
                ? this.state.editInfo.age
                : `Возраст не указан`
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
              <button className="removeBtn" onClick={this.removeNote}></button>
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
              {`${this.id + 1}. Информация отсутствует(data not found)`}
            </div>
            <div className="table__btns-area">
              <button
                className="editBtn editBtn_disabled"
              ></button>
              <button className="removeBtn" onClick={this.removeNote}></button>
            </div>
          </>
        )}
      </li>
    );
  }
}

export default Note;
