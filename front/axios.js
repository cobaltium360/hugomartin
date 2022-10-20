import axios from 'axios'

const instance = axios.create({
    baseURL: "https://www.hugomartin.lol/api",

  })

  instance.interceptors.request.use(async config => {
    if (typeof window !== 'undefined') {
      const token = window.localStorage.getItem('token');
    
    if(token){
      config.headers.authorization = "Bearer " + token;
    }
    return config
    }

    
    
  });

export { instance }
