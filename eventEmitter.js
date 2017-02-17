const events = require('events')
const EventEmitter = events.EventEmitter
const util = require('util')

function myEmitter() {
  EventEmitter.call(this)
}

util.inherits(myEmitter, EventEmitter)
const myEmitterIns = new myEmitter()

myEmitterIns.on('newListener', function(name, listener) {
  console.log("新事件的名字:", name);
  console.log("新事件的代码:", listener);
  setTimeout(function() { console.log("我是自定义延时处理机制"); }, 1000);
});

myEmitterIns.on('data', function(o) {
  //   setTimeout(() => {
  //     util.log('receive the data: ' + JSON.stringify(o))
  //     util.log(this)
  //   }, 5000)
  for (let i = 0; i < 100000; i++)
    for (let j = 0; j < 10000; j++)
  ;
  util.log('receive the data: ' + JSON.stringify(o))
})
myEmitterIns.on('norman', (o) => {
  setImmediate(() => {
    util.log('receive the data: ' + JSON.stringify(o))
  })

})

myEmitterIns.emit('data', { a: 1, b: 2, c: 3 })
myEmitterIns.emit('norman', 'norman is ok to be a bf')