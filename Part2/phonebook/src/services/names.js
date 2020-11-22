import axios from 'axios'

const baseUrl = 'http://localhost:3001/names'

const getAll = () => {
    return axios.get(baseUrl)
}

const create = newObject => {
    return axios.post(baseUrl, newObject)
}

export default {getAll, create}

/* 
const update = (id, newObject) => {
    return axios.put(`${baseUrl}/${id}`, newObject)
}
export default {getAll, create, update}

*/