window.addEventListener('keydown', setName)

const removeBtn = document.getElementById('remove')

removeBtn.addEventListener('click', handleRemove)

function handleRemove() {
    window.removeEventListener('keydown', updateName)
    window.removeEventListener('keydown', getName)  
    window.removeEventListener('keydown', setName)  
}

// Function expressiong
const getName = function (params) {
    //statement
    console.log('expression')
}
window.addEventListener('keydown', getName)
//Function declaration
// let result = setName()
// console.log(result)
function setName(a=1, b=0) {
 //statement
    console.log('Hello')
   
    // console.log(a,b)
    
    let result = a + b
    return result
}
// result = setName(undefined, 6)
// console.log(result)

//Arrow Function 
const updateName = () => {
    //statement
    console.log('arrow')
  
}
window.addEventListener('keydown', updateName)
