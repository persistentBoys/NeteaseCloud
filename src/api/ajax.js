import axios from 'axios'

function Axios(methods,url,params,data){
    axios({
        method:'get'||methods,
        url:url,
        params:params,
        data:data
    })
}

export default Axios