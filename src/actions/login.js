import {post} from '../untils/request'
export function logins(option){
  return {
    type:'LOGIN',
    payload:post("http://api.baxiaobu.com/index.php/home/v1/login",option)
  }
}