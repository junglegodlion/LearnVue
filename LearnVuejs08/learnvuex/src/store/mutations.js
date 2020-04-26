import {INCREMENT} from "./mutations-types";
import Vue from "vue";

export default {
  // 方法
  [INCREMENT](state) {
    state.counter++
  },
  decrement(state) {
    state.counter--
  },
  incrementCount(state,count) {
    state.counter += count
  },
  addStudent(state, stu) {
    state.students.push(stu)
  },

  updateInfo(state) {
    state.info.name = 'coderwhy'

    // 错误的代码: 不能在这里进行异步操作
    // setTimeout(() => {
    //   state.info.name = 'coderwhy'
    // }, 1000)


    // 这里添加属性，做不到响应式
    // state.info['address'] = '洛杉矶'

    Vue.set(state.info, 'address', '洛杉矶')

    // 删除属性
    // 该方式做不到响应式
    // delete state.info.age
    // Vue.delete(state.info, 'age')
  }
}
