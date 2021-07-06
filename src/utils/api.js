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

  putRecords(data) {
    return fetch(`${this._baseUrl}/api/records`, {
      method: "PUT",
      headers: this._headers,
      body: JSON.stringify(data),
    }).then(this._checkResponse);
  }

  deleteRecord(id) {
    return fetch(`${this._baseUrl}/api/records/${id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  editRecord(id, data) {
    return fetch(`${this._baseUrl}/api/records/${id}`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({data})
    }).then(this._checkResponse);
  }
}

export const api = new Api(configApi);
