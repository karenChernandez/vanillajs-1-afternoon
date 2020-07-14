//console.log('Hello!!!!!!!!!!')
let gameScore= []

function play(clickedId){
let player1= document.getElementById('player')
let selectedBox = document.getElementById(clickedId)

if(player1.innerText === 'X'){
player1.innerText= 'O'
selectedBox.innerText = 'X'
gameScore[clickedId]='X'
}else{ 
player1.innerText = 'X'
selectedBox.innerText = 'O'
gameScore[clickedId]='O'
}

console.log('what is the GameScore?', gameScore)

let topLeft = gameScore[0]
let topCenter = gameScore[1]
let topRight = gameScore[2]
let middleLeft = gameScore[3]
let middleCenter = gameScore[4]
let middleRight = gameScore[5]
let bottomLeft = gameScore[6]
let bottomCenter = gameScore[7]
let bottomRight = gameScore[8]


    if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight) {
        alert(`${topLeft} is the winner`);
        return;
    }
    if (middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight) {
        alert(`${middleLeft} is the winner`);
        return;
    }
    if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight) {
        alert(`${bottomLeft} is the winner`);
        return;
    }
    if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
        alert(`${topLeft} is the winner`);
        return;
    }
    if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter) {
        alert(`${topCenter} is the winner`);
        return;
    }
    if (topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
        alert(`${topRight} is the winner`);
        return;
    }
    if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight) {
        alert(`${topLeft} is the winner`);
        return;
    }
    if (bottomLeft !== undefined && bottomLeft === middleCenter && bottomLeft === topRight) {
        alert(`${bottomLeft} is the winner`);
        return;
    }



//     if (topLeft !== undefined && topLeft === topCenter && topLeft=== topRight){
//       alert(`${topLeft} is the Winner!`)
//       return;
//     } else if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter){
//         alert(`${topCenter} is the Winner!`)
//     } else if (topRight !== undefined && topRight === middleRight && topRight === bottomRight){
//         alert(`${topRight} is the Winner!`)
//     } else if (middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight){
//       alert(`${middleLeft} is the Winner!`)
// //else if(middleCenter !== undefined && middleCenter === middleLeft === middleRight ){
//     //  alert(`${middleCenter} is the Winner!`)
//   //}else if(middleRight !== undefined && middleRight === middleLeft === middleCenter){
//     //  alert(`${middleRight} is the Winner!`)
//     } else if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight){
//       alert(`${bottomLeft} is the Winner!`)
//   }else if(bottomCenter !== undefined && bottomCenter === bottomRight === bottomLeft){
//       alert(`${bottomCenter} is the Winner!`)
//   }else if(bottomRight !== undefined && bottomRight === bottomLeft === bottomCenter){
//       return(`${bottomRight} is the Winner!`)
//   }
 let boardFull = true;
for(let i = 0; i<=8; i++){
    if (gameScore[i] === undefined){
        boardFull = false
    }
}
if(boardFull === true){
        alert("Cat's game, there is not winner!!!")
    }
}




