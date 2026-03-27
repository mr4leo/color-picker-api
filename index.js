const colorPickEl = document.getElementById('color-picker')
const dropDownEl = document.getElementById('drop-down')
const getSchemeBtnEl = document.getElementById('get-scheme-btn')

const colorBlock1El = document.getElementById('color-block-1')
const colorBlock2El = document.getElementById('color-block-2')
const colorBlock3El = document.getElementById('color-block-3')
const colorBlock4El = document.getElementById('color-block-4')
const colorBlock5El = document.getElementById('color-block-5')

const hex1El = document.getElementById('hex-1')
const hex2El = document.getElementById('hex-2')
const hex3El = document.getElementById('hex-3')
const hex4El = document.getElementById('hex-4')
const hex5El = document.getElementById('hex-5')


// Color Pick Event Listener
colorPickEl.addEventListener('input', (e)=>{
    const colorVal = colorPickEl.value
})

// Get Scheme Button Event Listener
getSchemeBtnEl.addEventListener('click', (e)=>{
    let colorVal = colorPickEl.value
    colorVal = colorVal.replace('#', '');
    const dropDownVal = dropDownEl.value

    fetchFunction(dropDownVal, colorVal)
})


function fetchFunction(dropDownVal, colorVal){

fetch(`https://www.thecolorapi.com/scheme?hex=${colorVal}&mode=${dropDownVal}&count=5`)
.then(response=>response.json())
.then(data=> 
{
    console.log('color Val:', colorVal)
    console.log('Data:', data)
    render(data)

    // data.colors.forEach(element => {
    //     console.log(element.hex)
    // });  
}
)
}

function render(data){
console.log('NEW COLOR TEST', data.colors[0].hex.clean)

colorBlock1El.style.backgroundColor = `#${data.colors[0].hex.clean}`;
colorBlock2El.style.backgroundColor = `#${data.colors[1].hex.clean}`;
colorBlock3El.style.backgroundColor = `#${data.colors[2].hex.clean}`;
colorBlock4El.style.backgroundColor = `#${data.colors[3].hex.clean}`;
colorBlock5El.style.backgroundColor = `#${data.colors[4].hex.clean}`;

hex1El.textContent = `#${data.colors[0].hex.clean}`;
hex2El.textContent = `#${data.colors[1].hex.clean}`;
hex3El.textContent = `#${data.colors[2].hex.clean}`;
hex4El.textContent = `#${data.colors[3].hex.clean}`;
hex5El.textContent = `#${data.colors[4].hex.clean}`;
}




// function fetchFunction(){
// fetch('https://www.thecolorapi.com/scheme?hex=0047AB&rgb=0,71,171&mode=analogic&count=5')
// .then(response=>response.json())
// .then(data=>
// {
//     console.log('Fetch function results')
//     console.log('Here is the response data', data)
//     console.log('Here are the colors', data.colors)

//     data.colors.forEach(element => {
//         console.log(element.hex)
//     });  
// }
// )
// }






// User clicks color
// User selects color mode
// User clicks get scheme
// Fetch function is called
// colorMode is plugged in to fetch
// colorVal is plugged into fetch API

// const colorMode1El = document.getElementById('color-mode-1')
// const colorMode2El = document.getElementById('color-mode-2')
// const colorMode3El = document.getElementById('color-mode-3')