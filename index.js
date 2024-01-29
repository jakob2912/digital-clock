//Get time format
let timeFormat = 24;

document.getElementById('militaryTime').addEventListener('click', () => {
  timeFormat = 24;
  updateClock();
})

document.getElementById('normalTime').addEventListener('click', () => {
  timeFormat = 12;
  updateClock();
})

function updateClock() {
  const now = new Date();
  let hours = now.getHours().toString().padStart(2, 0);
  let timeString;

  //Make time to normal time format if necessary
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
  
  document.getElementById('clock').textContent = timeString;
}

setInterval(updateClock, 1000);