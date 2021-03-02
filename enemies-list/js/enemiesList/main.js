console.log("My Enemies List!")
console.log("----------------")



const getEnemies = () => {
    const enemies = [
        {
            firstName: "Joshua",
            lastName: "Flowers",
            offenses: [
                "Being a jerk to me in elementary school",
                "Not being nice to me in elementary school"
            ],
            isReallyHated: true
        },
        {
            firstName: "Darth",
            lastName: "Vader",
            offenses: [
                "Cut off Luke's hand",
                "Murdered all those kids",
                "Unkind management practices"
            ],
            isReallyHated: false
        },
        {
            firstName: "Leon",
            lastName: "Peck",
            offenses: [
                "Keeps giving me a hotplate"
            ],
            isReallyHated: false
        }
    ]
    
    for (let enemy of enemies) {
        if (enemy.isReallyHated === true) {
            console.log(`${enemy.firstName} ${enemy.lastName} Really, really dislike!`)
        }
        else {
            console.log(`${enemy.firstName} ${enemy.lastName}`)
        }
    }
    return enemies
}

console.log(getEnemies())
