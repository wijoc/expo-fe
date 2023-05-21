const namespaced = true

const state = {
  vxUSess: {},
  vxAccess: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9iZXRhXC9sb2dpbiIsImlhdCI6MTY3NDQ0NjYwOCwiZXhwIjozNTY2NjA2NjA4LCJuYmYiOjE2NzQ0NDY2MDgsImp0aSI6IjFoVjZuOTkxTVZGVFVFa1IiLCJzdWIiOjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjciLCJ0eXBlIjoiYWNjZXNzX3Rva2VuIn0.eUQUJx15yNTqjHYKlpsWiOWbLe9ZfHeWobYTg8WU4Is'
}

const mutations = {
  setUsess: function (state, payload) {
    this.vxUSess = payload
  }
}

const actions = {
  async sessLogin ({ commit }, payload) {
    console.log('login')
  }
}

export default {
  namespaced, state, mutations, actions
}
