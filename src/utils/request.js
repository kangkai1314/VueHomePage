import axios from 'axios'

const service = axios.create({
  baseURI: 'http://localhost:8080'
})

export default service
