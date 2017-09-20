import queryString from 'query-string'
import _ from 'lodash';
import config from './confing.js'
const request = {
  get(url,params) {
    if(params) {
      url += '?' + queryString.stringify(params)
    }
    return fetch(url)
    .then((res)=>res.json())
  },
  post(url,body){
    const options = _.extend(config.header,{
      body: JSON.stringify(body)
    })
    return fetch(url,options)
      .then(res=>res.json())
  }
}
export default request
