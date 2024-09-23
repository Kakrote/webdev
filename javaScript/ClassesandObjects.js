class Animal{
    constructor(){
        console.log("I am constructoer")// calls as soon as the object is created.
    }
    eats(){
        console.log("I am eating")

    }
    no_Lags(legs){
        console.log(legs)
    }
}
rabit=new Animal()
rabit.eats()
rabit.no_Lags(4)