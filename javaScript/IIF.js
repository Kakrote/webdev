async function  spleep() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(44)
        }, 3000);
    })
}
// let s=await spleep()
// console.log(s)    This will give the error so instaded of making a new async funtion we will use IIf
(async function main() {
    let a=await spleep()
    console.log("hello")
})()

// this is called IIF instent invoked function.