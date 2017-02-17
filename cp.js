const cp = require('child_process')
cp.exec('ls -l', (e, out, err) => {
  if (!e) {
    console.log(out)
    console.log('************')
    console.log(err)
  }
})