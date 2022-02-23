const progress = document.querySelectorAll(".progress-done");
const finish = document.getElementById("finish-btn");

finish.addEventListener("click", () => {
  for (let i = 0; i < progress.length; i++) {
    progress[i].textContent = "100%";
    progress[i].style.width = "100%";
  }
});
