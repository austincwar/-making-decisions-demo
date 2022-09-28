/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let jonSnowAttack = 25
let jamieLannisterAttack =  55

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

// villager throws jon snow a health kit, but health can't exceeed 100
if (jonSnowHealth + 50 >= 100) {
    jonSnowHealth = 100
} else {
    jonSnowHealth += 50
}

console.log('jon snow health after the heath kit is ' + jonSnowHealth)

let coinLandsHands = true

if (coinLandsHands) {
    console.log("The fight continues")
} else {
    console.log("Jon is allowed to run away")
}

// jamie attacks jon 5 times
for (let i = 0; i < 5; i++) {
    jonSnowHealth -= jamieLannisterAttack - jonSnowDefense
    console.log('jon\'s health is now ' + jonSnowHealth)
} 

// write logic in the for loop that detects if jon's health gets 0 or less, in which 
// case, you will print that jon is dead and you will stop further loop iterations (see the "break" JS keyword for leaving a loop early)

//Post-lab assingment 2
//write the for loop (including the llogic you wrote for the first assignment) as a while loop
// it should behave exactly the same