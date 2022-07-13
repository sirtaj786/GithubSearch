import axios from "axios"
function fetchUser(query,page=1,limit=5){
    if(!query){
        return new Promise.reject("query should be provided")

    }
    return axios.get (`https://api.github.com/search/users?_page=${page}&_limit=${limit}`,{
       params:{ q:query
       }
    })
}
export default fetchUser