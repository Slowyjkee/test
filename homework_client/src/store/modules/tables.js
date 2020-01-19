import {GET_TABLE} from "../types/action";
import {api, apiData} from "../../utils/api";
import {SET_TABLE} from "../types/mutation";

export default  {
    namespaced:true,
    state: {
        list:[]
    },
    mutations: {


        [SET_TABLE](state, {data, tableName}){

            state[tableName] = data

        },


    },


    actions: {

        async [GET_TABLE]({ commit }, payload){

            let {table} = payload;

            let data = await api({METHOD:'get', URL:'/persons', PARAMS:{table:table}});

            try {
                commit('SET_TABLE', {data :data.data,  tableName :payload.table})

            } catch (e) {

                console.trace(e)

            }
        },

    },
    getters: {

    }
}
