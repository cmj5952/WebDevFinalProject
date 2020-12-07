
const init = () => {
    redRaceButton.addEventListener('click', start);
    resetButton.addEventListener('click', reset);
  }
  
  
  const redRaceButton = document.getElementById('redRaceButton');
  const greenRaceButton = document.getElementById('greenRaceButton');
  const resetButton = document.getElementById('reset');
  const cars = document.getElementsByClassName("cars");
  const carBlue = document.getElementById('carBlue');
  const carRed = document.getElementById('carRed');
  const output = document.getElementById('output');
  
  
  
  const getRandomTime = () => {
    return Math.floor((Math.random() * 3))* 150;
  }
  
  
  const calculateWinner = (carRedTime, carBlueTime) => {
      if(carBlueTime < carRedTime){
        console.log("Red won");
            output.innerText = "Blue won!";
      } else if(carBlueTime > carRedTime ){
        output.innerText = "Red won!";
      } else {
        output.innerText = "Draw!"
      }
   
    setTimeout( () => {
        carBlue.classList.add('moveRight');
  
     }, carBlueTime,9000);
  
      setTimeout( () => {
        carRed.classList.add('moveRight');
  
     }, carRedTime, 9000);
  }
  
  const start = () => {
      redRaceButton.style.display = "none";
      greenRaceButton.style.display = "block";
      resetButton.style.display = "block";
      console.log("Reset button was clicked")
  
      
      let carBlueTime = getRandomTime();
      let carRedTime = getRandomTime();
    
      
      calculateWinner(carRedTime, carBlueTime);
  }
  
  const reset = () => {
    carBlue.classList.remove('moveRight');
    carRed.classList.remove('moveRight');
  
     redRaceButton.style.display = "block";
     greenRaceButton.style.display = "none";
     output.innerText = "";
    resetButton.style.display = "";
   
  } 
  
  init();