const counterValue = document.querySelector("#value")
const decrementBtn = document.querySelector("#decrement")
const incrementBtn = document.querySelector(".increment")



const handleClick = () => {
  console.log("click event listener callback");
};

decrementBtn.addEventListener("click", handleClick);