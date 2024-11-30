function adivinar(num){
    let numAdivinar=Math.floor(Math.random() * 100) + 1;
    if(num==numAdivinar){
        console.log("ganaste");
    }else{
        console.log("eres malo y era "+numAdivinar);
    }
}

adivinar(50);