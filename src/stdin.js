import readline from 'readline'
// create class for create only one intreface

export default (question) => {
  return new Promise((resolve, reject) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })
    rl.question(`${question} `, (stdin) => {
      resolve(stdin)
      rl.close()
    })
  });
}