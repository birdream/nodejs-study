// let stack = []
// let next_index = 0

// function next() {
//   let fn = stack[next_index]
//   next_index = next_index + 1
//   if (typeof fn === 'function') fn()
// }

// function lazyMan(name) {
//   console.log(name)
//   next()
// }

// (function() {
//   function _$(els) {
//     console.log(els + '\r\n')
//   }
//   _$.prototype = {
//     each: function(fn) {
//       for (let i = 0, len = this.elements.length; i < len; i++) {
//         fn.call(this, this.elements[i])
//       }
//       return this
//     },
//     sleepFirst: function(time) {
//       setTimeout(function() {
//         console.log('Wake up after ' + time)
//         next()
//       }, time * 1000)
//     },
//     haha: function(name) {
//       console.log('haha ' + name)
//       next()
//     },
//     hehe: function() {
//       console.log('hehe')
//     }
//   }
//   global.$ = function(name) {
//     return new _$(name)
//   }
// })()

// $('fuck').haha('norman').hehe(5)

// function $() {
//   let stack = []
//   for (let i = 0, len = arguments.length; i < len; i++) {
//     let ele = arguments[i]
//     stack.push(ele)
//   }
//   return stack
// }

// function Dog() {}
// let next_index = 0

// function next() {
//   let stack = Object.keys(Dog)
//   console.log(stack)
//   let fn = stack[next_index]
//   next_index = next_index + 1
//   if (typeof fn === 'function') fn()
// }

// Dog.prototype.setName = function(name) {
//   console.log(name)
//   this.name = name
//   return this
// }

// Dog.prototype.setColor = function(cor) {
//   new Promise((rs, rj) => {
//     if (err) rj(err)

//     setTimeout(() => {
//       console.log(cor)
//       this.color = cor
//     }, 1000)


//   })
//   return this
// }

// Dog.prototype.speak = function() {
//   console.log(this.name + ' ' + this.color)
//   return this
// }

// let dog = new Dog()
// dog.setName('anthony').setColor('black').speak()

function _lazyMan(name) {
  this.tasks = []
  let that = this
  let fn = (function(n) {
    return function() {
      console.log('my name is ' + n)
      that.next()
    }
  })(name)
  this.tasks.push(fn)

  //保证上面操作完成以后才执行next
  setTimeout(() => {
    that.next()
  }, 0)
}

_lazyMan.prototype.next = function() {
  let fn = this.tasks.shift()
    // 因为执行最后一次的时候fn已经没有了，为空，就不会往下继续执行
  fn && fn()
}

_lazyMan.prototype.sleep = function() {
  let that = this
  let fn = (function() {
    return function() {
      setTimeout(() => {
        console.log('i am sleep for 1 sec')
        that.next()
      }, 1000)
    }
  })()
  this.tasks.push(fn)
  return this
}

_lazyMan.prototype.eat = function() {
  let that = this
  let fn = (function() {
    return function() {
      console.log('i am eatting')
      that.next()
    }
  })()
  this.tasks.push(fn)
  return this
}
_lazyMan.prototype.sleepFirst = function(time) {
  let that = this
  let fn = (function() {
    return function() {
      setTimeout(() => {
        console.log('i am sleep first ' + time)
        that.next()
      }, time * 1000)


    }
  })()
  this.tasks.splice(1, 0, fn)
  return this
}

function lazyMan(name) {
  return new _lazyMan(name)
}

lazyMan('norman').sleep().eat().sleepFirst(0.5)

// let tarr = [1, 2, 3]
// tarr.push(4)
// tarr.splice(0, 0, 0)
//   // let a = tarr.shift()let
// console.log(tarr)
//   // console.log(a)

let fn_t = (function() {
  return () => {
    console.log('***************')
  }
})()

let arr = []
let b = arr.shift()
console.log(b)
  // fn_t
  // console.log(arr[0])