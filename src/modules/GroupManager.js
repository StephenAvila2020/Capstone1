const remoteURL = "https://the-survial-guide.herokuapp.com/"

export default {
  get(id) {
    return fetch(`${remoteURL}/groups/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/groups`).then(result => result.json())
  },
  getWithUsers(id) {
    return fetch(`${remoteURL}/groups/${id}?_embed=users`)
            .then(result => result.json())
},
delete(id) {
  return fetch(`https://the-survial-guide.herokuapp.com/groups/${id}`, {
      method: "DELETE"
  })
  .then(result => result.json())
},
post(newGroup) {
  return fetch(`${remoteURL}/groups`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(newGroup)
  }).then(data => data.json())
},
update(editedGroup) {
return fetch(`${remoteURL}/groups/${editedGroup.id}`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(editedGroup)
}).then(data => data.json());
}
}