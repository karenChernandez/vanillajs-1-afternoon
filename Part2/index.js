//console.log('The house always wins!')

const idBox = document.getElementById('idBox');
const colorBox = document.getElementById('colorBox');
//console.log('idInput', idBox)
console.log('colorInput', colorBox)

function setCard(){
    console.log('idbox', idBox.value)
    const card = document.getElementById(idBox.value);
    console.log("setCard -> card ", card )
    card.style.color = colorBox.value;
}
