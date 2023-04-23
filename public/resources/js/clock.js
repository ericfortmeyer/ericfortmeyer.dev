const clock = (timeEl) => {
  const date = new Date();
  timeEl.textContent = date.toLocaleTimeString();
  timeEl.setAttribute("datetime", date.toISOString());
};
setInterval(clock, 1000, timeElement);
