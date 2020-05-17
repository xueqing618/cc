import {post} from '../untils/request'
import api from '../services/api' 
export function list(option){
  return {
    type:"LIST",
    payload:post(api.serach,option)
  }
}