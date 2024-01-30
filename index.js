//Get time format
let timeFormat = 12;

//Update Clock when loading the page
updateClock();

document.getElementById('militaryTime').addEventListener('click', () => {
  timeFormat = 24;
  updateClock();
})

document.getElementById('normalTime').addEventListener('click', () => {
  timeFormat = 12;
  updateClock();
})

//Update the clock every 1000ms => every 1 second
setInterval(updateClock, 1000);

//Update Clock Function that updates the clock
function updateClock() {
  //Get hours
  const now = new Date();
  let hours = now.getHours().toString().padStart(2, 0);
  let timeString;

  //Make time to normal time format if necessary
  //Also add minutes and seconds
  if (timeFormat === 12) {
    const meridiem = hours >= 12? 'PM' : 'AM';
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
  } else {
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    timeString = `${hours}:${minutes}:${seconds}`
  }
  
  //Replace the time on the page with a current time
  document.getElementById('clock').textContent = timeString;
}

