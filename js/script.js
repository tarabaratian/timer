let timer = document.getElementById("btn");

timer.addEventListener("click", () => {
  setInterval(clock, 100);
});
function clock() {
  let time = new Date();
  let clock = document.getElementById("clock");
  clock.innerText = time.toLocaleTimeString();
}
