const remoteURL = "http://localhost:5002"

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
}
}