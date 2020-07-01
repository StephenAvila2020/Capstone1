const remoteURL = "http://localhost:5002"

export default {
  getByEmail (email) {
    return fetch(`${remoteURL}/users?email=${email}`).then(result => result.json())
  },
  get(id) {
    return fetch(`${remoteURL}/users/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/users`).then(result => result.json())
  },
  getUserGroup(id) {
    return fetch(`${remoteURL}/users/${id}?_expand=group`).then(result => result.json())
  },
  delete(id) {
    return fetch(`http://localhost:5002/users/${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
  },
  post(newUser) {
    return fetch(`${remoteURL}/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
    }).then(data => data.json())
},
update(editedUser) {
  return fetch(`${remoteURL}/users/${editedUser.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(editedUser)
  }).then(data => data.json());
}
}