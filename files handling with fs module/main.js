const { error } = require('console')
const fs= require('fs')
// console.log(fs)
console.log("staring")
fs.writeFile("hero.txt","hello hero how are",()=>{
    console.log("done")
    fs.readFile("hero.txt",(error,data)=>{
        console.log(error,data.toString())
    })
    fs.appendFile("hero.txt","\n great",(e,d)=>{
        console.log(d)
    })
})
console.log("ending")