/*function signature/sample */
// function cashOut(money) {
//     if(typeof money !== 'number' || money <= 0){
//         return 'Invalid'
//     }
//   let cashOutCharge = 1.75 / 100
//   return money * cashOutCharge
// }
// let output = cashOut("mewauu")
// console.log(output)


// function  validEmail(email) {
//     if (typeof email !== 'string') {
//         return 'Invalid'
//     }
//    let specialCharacter = '.-_+@'
//    if (specialCharacter.includes(email[0])) {
//     return false
//    }
//    if (!email.includes('@')) {
//     return false
//    }
//    if (email.includes(' ')) {
//     return false
//    }
//    if (email.slice(-4) !== '.com') {
//     return false
//    }
//    return true

// }
// let output = validEmail("Mewo@cat.com")
// console.log(output)



// function  electionResult(votes) {
//   if(!Array.isArray(votes)) {
//     return 'Invalid'
//   }
//   let mangoCountVotes = 0
//   let bananaCountVotes = 0
//   for (const vote of votes){
//     if (vote === 'mango') {
//         mangoCountVotes++
//     }
//     else if (vote === 'banana') {
//         bananaCountVotes++
//     }
//   }
//   if (mangoCountVotes > bananaCountVotes) {
//     return 'Mango'
//   }
//   else if(bananaCountVotes > mangoCountVotes){
//     return 'Banana'
//   }
//   else {
//     return 'Draw'
//   }
// }
// let output = electionResult("mango , banana")
// console.log(output)


// function  isBestFriend(f1, f2) {
//     if(typeof f1 !== 'object' || typeof f2 !== 'object'){
//         return 'Invalid'
//     }
//    return f1.bestFriend === f2.roll && f2.bestFriend === f1.roll ? true : false
// }
// let output = isBestFriend({ name:"kashem", roll: 2, bestFriend: 11},
//     "Kashem er Kono Bondhu Nai"
//     )
// console.log(output)



// function  calculateWatchTime(times) {
//     if(Array.isArray(times)){
//         return 'Invalid'
//     }
//     for (const time of times) {
//      if(typeof time != 'number'){
//         return 'Invalid'
//      }
//     }
//     totalWatchTimes = 0
//    for (const time of times) {
//     totalWatchTimes += time
//    }
//    let hour = Math.floor(totalWatchTimes / 3600)
//    let minute = Math.floor((totalWatchTimes / 60) % 60)
//    let second = totalWatchTimes % 60
//    return {
//     hour, minute, second
//    }
// }
// let output = calculateWatchTime([100, 3800, "90" ])
// console.log(output)