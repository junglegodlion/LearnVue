export default {
  // aUpdateInfo(context) {
  //   setTimeout(() => {
  //     context.commit('updateInfo')
  //     },1000)
  // },

  // aUpdateInfo(context, payload) {
  //   setTimeout(() => {
  //     context.commit('updateInfo')
  //     console.log(payload.message);
  //     payload.success()
  //   }, 1000)
  // },

  aUpdateInfo(context,payload) {
    // setTimeout(() => {
    //   context.commit('updateInfo')
    //   console.log(payload);
    // },1000)


    return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.commit('updateInfo');
        console.log(payload);

        resolve('1111111')
      }, 1000)
    })
  },
}
