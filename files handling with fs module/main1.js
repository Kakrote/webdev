import fs from "fs/promises"
let a= await fs.readFile("hero.txt")
console.log(a.toString())