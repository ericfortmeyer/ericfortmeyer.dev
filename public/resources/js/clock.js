const clock = (timeEl) => {
  const date = new Date();
  timeEl.textContent = date.toLocaleTimeString();
  timeEl.setAttribute("datetime", date.toISOString());
};
const timeElement = document.querySelector("#time");
setInterval(clock, 1000, timeElement);
