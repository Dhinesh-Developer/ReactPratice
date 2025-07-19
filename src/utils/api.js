// custom axios creation
const api = axios.create({
  baseURL : 'https://jsonplaceholder.typicode.com/posts',
  headers:{
    'Authorization' : 'Bearer <TOKEN>'
  }
});

// interceptors for authorization and authentications.
axios.interceptors.request.use(request => {
  console.log('Starting request',request);
  return request;
})

axios.interceptors.response.use(response => {
  console.log('response ',response);
  return response;
})

export default api;