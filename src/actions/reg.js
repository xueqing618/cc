import {post} from '../untils/request'
export function regs(option){
  return {
    type:'REG',
    payload:post("http://api.baxiaobu.com/index.php/home/v1/register",option)
  }
}