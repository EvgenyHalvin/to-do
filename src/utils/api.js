import { configApi } from "./constants.js";

class Api {
  constructor(configApi) {
    this._baseUrl = configApi.baseUrl;
    this._headers = configApi.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Произошла ошибка: ${res.status}`);
  }

  getRecords() {
    return fetch(`${this._baseUrl}/api/records`, {
      headers: this._headers,
    }).then(this._checkResponse);
  }

  // putRecords(dataNote) {
  //   return fetch(`${this._baseUrl}/api/records`, {
  //     method: "PUT",
  //     headers: this._headers,
  //     data: JSON.stringify({
  //       name: dataNote.name,
  //       age: dataNote.age,
  //       email: dataNote.email,
  //       phone: dataNote.phone,
  //     }),
  //   }).then(this._checkResponse);
  // }
}

export const api = new Api(configApi);
