import axios from 'axios'
export const state = {
  userdetails:[]
}
const nodeServerURL = process.env.VUE_APP_NODE_SERVER

export const getters = {
  getuserdetails(state) {
    return state.userdetails
  }
}

export const mutations = {
  SET_USER_DETAILS(state, newValue) {
    state.userdetails = newValue
  }
}

export const actions = {
  async saveuserdetails({ commit, dispatch, getters }, data) {
    console.log('TCL: Sending data to backend -> data', data)
    try {
      const response = await axios({
        method: 'post',
        url: `${nodeServerURL}afoofa`,
        data,
      })
      console.log('TCL: Backend -> response', response.data)
      commit('SET_USER_DETAILS', data)
      return response.data
    } catch (error) {
      console.log('TCL: getAuthToken -> error', error)
      throw error
    }
  },
}
