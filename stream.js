const fs = require('fs'),
  path = require('path'),
  out = process.stdout

// let filePath = ''
// let newFilePath = ''

// let readStream = fs.createReadStream(filePath)
// let writeStream = fs.createWriteStream(newFilePath)

// readStream.on('data', (chunk) => {
//   passedLen += chunk.length

//   if (writeStream.write(chunk) === false) {
//     readStream.pause()
//   }
// })

// readStream.on('end', () => {
//   writeStream.end()
// })

// writeStream.on('drain', () => {
//   readStream.resume()
// })

let n = 0
let begin = new Date()
setTimeout(function go() {
  // out.clearLine()
  out.cursorTo(0)
  out.write('n now is = ' + n)
  if (n < 50) {
    n++
    setTimeout(go, 200)

  } else {
    let end = new Date()
    console.log('\n\r it is end now for ' + (end - begin) / 1000 + ' sec')
  }
}, 200)

process.on('exit', () => {
  console.log('it is end now ********************')
})