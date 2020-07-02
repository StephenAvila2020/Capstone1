const remoteURL = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${remoteURL}/achievements/${id}`).then(result => result.json())
    },
    // gets all Achievements that are not completed
    getAll() {
        return fetch(`${remoteURL}/achievements?completed=false`).then(result => result.json())
    },
    // posts new Achievement to json after submitted in add Achievement
    post(newAchievement) {
        return fetch(`${remoteURL}/achievements`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newAchievement)
        }).then(data => data.json())
    },
    // updates the Achievement name and put to json
    update(editedAchievement) {
        return fetch(`${remoteURL}/achievements/${editedAchievement.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedAchievement)
        }).then(data => data.json())
    },
    // changes the boolean of completed from false to true when the checkbox is clicked in Achievement to complete
    complete(id) {
       return fetch(`${remoteURL}/achievements/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ completed: true })
        }).then(r => r.json())
    },
    // gets all Achievement marked true for completed Achievement
    getAllCompleted() {
        return fetch(`${remoteURL}/achievements?completed=true`).then(result => result.json())
    },
    // patch to change completed Achievement back to false
    incomplete(id) {
        return fetch(`${remoteURL}/achievements/${id}`, {
             method: "PATCH",
             headers: {
                 "Content-Type": "application/json"
             },
             body: JSON.stringify({ completed: false })
         }).then(r => r.json())
     },
}