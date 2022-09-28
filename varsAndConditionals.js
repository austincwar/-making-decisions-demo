/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let jonSnowAttack = 25
let jamieLannisterAttack =  35

if (jonSnowAttack > jamieLannisterAttack)  {
    console.log("Jon Snow has better attack than Jamie Lannister")
} else if (jamieLannisterAttack > jonSnowAttack) {
    console.log("Jamie Lannister has better attack than Jon Snow")
} else { 
    console.log("Jamie Lannister has the same attack as Jon Snow")
}

let jonSnowHealth = 100
let jonSnowDefense = 0

// jamie lannister has attacked

if (jonSnowHealth <= jamieLannisterAttack) {
    console.log("Jon Snow has been slain.")
} else {
    jonSnowHealth = jonSnowHealth - jamieLannisterAttack
    //jonSnowHealth -= jamieLannisterHealth
    console.log(`Jon Snows Health is down to ${jonSnowHealth}`)
 //   console.log('here is health ' + jonSnowHealth)
 //   console.log('here is jon snow health', jonSnowHealth)
}


//adding 25 to original amount due to picking up a shield
jonSnowDefense += 25


// jamie attacks again
if (jonSnowHealth <= jamieLannisterAttack - jonSnowDefense) {
    console.log("Jon snow  has been slain")
} else {
    jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense)   
    console.log(`Jon Snows Health is down to ${jonSnowHealth}`)
}