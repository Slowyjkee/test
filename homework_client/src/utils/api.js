import axios from 'axios'

export const api = ({METHOD, URL, PARAMS = {}}) => {

    return axios({
        method: METHOD,
        url: `${process.env.VUE_APP_MAIN_API + URL}`,
        params: PARAMS,
    })

};

export const apiData = ({METHOD, URL, DATA }) => {

    return axios({
        method: METHOD,
        url: `${process.env.VUE_APP_MAIN_API + URL}`,
        data: DATA,
    })

}
