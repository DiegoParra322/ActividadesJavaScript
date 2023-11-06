alert("Hi hero, I know you want to rescue the princess, and to do so you need to kill those fucking dragons, I was told you only have one gun and some bullets, but first let´s evaluate if you can survive the mission.");




dragones = prompt("How many dragons do you see?")


if(isNaN(dragones)==true || dragones ===''){

    do{
        alert("Enter a valid number with caracters from 0 to 9 ")
        dragones = prompt("How many dragons do you see?")
    }
    while(isNaN(dragones)==true || dragones ==='')

}

else if (isNaN(dragones)==false){

    dragones= Number(dragones)


};



heroeSabe = prompt("Enter true if you know how many bullets you have, otherwise false.")

let sabe = heroeSabe.toLowerCase();

if (sabe=="true"){
    sabe = Boolean(1)
}
else if (sabe=="false"){
    sabe = Boolean(0)
};


if(sabe !== true && sabe !== false){

    do{
        alert("Please type in true or false correctly")

        sabe = prompt("Enter true if you know how many bullets you have, otherwise false.");
        sabe = sabe.toLowerCase();

    }
    while(sabe !== "true" && sabe !== "false"); 
};

if (sabe=="true"){
    sabe = Boolean(1)
}
else if (sabe=="false"){
    sabe = Boolean(0)
};


if (sabe==true){

    totalBalas = prompt("Enter the amount of bullets as a number with caracters from 0 to 9")
    
    if(isNaN(totalBalas)==true || totalBalas ===''){
    
        do{
            alert("Enter a valid number with caracters from 0 to 9 ")
            totalBalas = prompt("Enter the amount of bullets as a number with caracters from 0 to 9")
        }
        while(isNaN(totalBalas)==true || totalBalas  ==='')
    
    }

    else  if (isNaN(totalBalas)==false){

        totalBalas= Number(totalBalas);
    
    
    }


}

else if (sabe == false){

    alert("Not a problem, I´ll count them remotely, clik ok to know")
    totalBalas=Math.floor(Math.random()*10)
    alert(`You currently have ${totalBalas} available`)

};



let balasNecesarias = dragones*2




if (sabe==true && totalBalas >= balasNecesarias){
    alert("Go hero, do what you know to do, you´ll survive")
}

else if (sabe==false && totalBalas >= balasNecesarias ){
    alert("Go hero, do what you know to do, you´ll survive")
}
else {
    alert(`You won´t survive the mission, we were recently informed a dragon can be killed with at least 2 bullets, you have ${totalBalas} bullets and there are ${dragones} dragons please return to the base`)
}