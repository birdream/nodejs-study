// let funArr = []
// for (let i = 0; i < 10; i++) {
//   funArr.push(() => {
//     console.log(i)
//   })
// }

// funArr.forEach((fn) => {
//   fn()
// })

//*******************************************
// var funcs = [];

// for (var i = 0; i < 10; i++) {
//   funcs.push((
//     function(val) {
//       return function() {
//         console.log(val)
//       }
//     }
//   )(i));
// }

// funcs.forEach(function(func) {
//   func(); // 输出数值 "10" 十次
// });
//*******************************************

let counter = (
  function() {
    let i = 0
    return {
      get: () => {
        console.log('i = ' + i)
      },
      set: (val) => {
        i = val
      },
      incre: () => {
        ++i
      }
    }
  }
)()

counter.set(555)
counter.incre()
counter.get()