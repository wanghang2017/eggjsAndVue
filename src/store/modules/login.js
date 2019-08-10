import {login} from "@/api/login";


// initila state
const state = {
    username: "",
    password: "",
    userInfo: {},

}

// getters 
const getters = {
    sex: (state, getters, rootState) => state.userInfo["sex"]
}
const actions = {
    login: ({ commit},payload) => {
        let { username, password } = payload;
        console.log(username,password, "xxx");
        login({ username, password }).then(
            userInfo => {
                console.log(userInfo,"ddd");
                commit("updateUserInfo",userInfo)
            },
            () => {

            }
        )
    }
}

const mutations = {
    updateUserInfo: (state, userInfo) => {
        state.userInfo = userInfo;
    }
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}