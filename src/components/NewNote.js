import React from "react";
import { btnClass } from "../utils/constants.js";

export default class NewNote extends React.Component {
  constructor(props) {
    super(props);

    this.addNewName = this.addNewName.bind(this);
    this.addNewAge = this.addNewAge.bind(this);
    this.addNewEmail = this.addNewEmail.bind(this);
    this.addNewPhone = this.addNewPhone.bind(this);
    this.submitNote = this.submitNote.bind(this);

    this.state = {
      name: "",
      age: "",
      email: "",
      phone: "",
    };
  }

  addNewName(e) {
    this.setState({ name: e.target.value });
  }

  addNewAge(e) {
    this.setState({ age: e.target.value });
  }

  addNewEmail(e) {
    this.setState({ email: e.target.value });
  }

  addNewPhone(e) {
    this.setState({ phone: e.target.value });
  }

  submitNote(e) {
    e.preventDefault();
    const { name, age, email, phone } = this.state;
    const newData = { name, age, email, phone };
    this.setState({ name: "", age: "", email: "", phone: "" });
    return this.props.handleNewNote(newData);
  }

  render() {
    return (
      <form name="noteform" className="table__form">
        <input
          className="table__input table__column-name_type_name"
          type="text"
          name="name"
          placeholder="Имя"
          required
          value={this.state.name}
          onChange={this.addNewName}
          autoFocus
        />
        <input
          className="table__input table__column-name_type_age"
          type="number"
          name="age"
          placeholder="Возраст"
          required
          value={this.state.age}
          onChange={this.addNewAge}
        />
        <input
          className="table__input table__column-name_type_email"
          type="email"
          name="email"
          placeholder="E-mail"
          required
          value={this.state.email}
          onChange={this.addNewEmail}
        />
        <input
          className="table__input table__column-name_type_phone"
          type="number"
          name="phone"
          placeholder="Номер телефона"
          required
          value={this.state.phone}
          onChange={this.addNewPhone}
        />
        <button
          type="submit"
          onClick={this.submitNote}
          className={
            this.state.name.length <= 1 ? `${btnClass} submit-btn_disabled` : btnClass
          }
          disabled={(this.state.name.length <= 1) || this.props.isLoad}
        >
          <div
            className={
              this.props.isLoad
                ? `spinner spinner_small`
                : `add-icon ${
                    this.state.name.length <= 1
                      ? `add-icon_disabled`
                      : `add-icon_active`
                  }`
            }
          />
        </button>
      </form>
    );
  }
}
