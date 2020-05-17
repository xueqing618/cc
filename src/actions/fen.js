import {post} from '../untils/request'
export function getname(option){
  console.log(option)
  return {
    type:"HOME_NAME",
    payload:post("https://blogs.zdldove.top/Home/Apis/listWithPage",option)
  }
}