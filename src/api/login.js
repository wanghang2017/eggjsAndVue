import axios from "axios";


const instance = axios.create({
    baseURL:"http://127.0.0.1:7001"
})

axios.interceptors.response.use(function (response) {
    // console.log(response);
    return response.data;
  }, function (error) {
      console.log(error);
    return Promise.reject(error);
  });




function login(data){
    return instance.post("/api/v1/login",data)
}


export {
    login
}