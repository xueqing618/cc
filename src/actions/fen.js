import {post} from '../untils/request'
import api from '../services/api' 
console.log(api.list)
export function getname(option){
 
  return {
    type:"HOME_NAME",
    payload:post(api.list,option)
  }
}