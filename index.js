const time = document.querySelector(".time");
const seconds = document.querySelector(".seconds");
const minutes = document.querySelector(".minutes");
const hours = document.querySelector(".hours");
const start = document.querySelector("#Start");
let second = `${0}`;
let minute = 0;
let mint = 0;

//seconds
const sec = (second) => {
  setTimeout(() => {
    seconds.textContent = second;
    console.log(seconds.textContent);
  }, 1000 * second);
};
//minutes
const min = (minute) => {
  setTimeout(() => {
    second = 0;
    seconds.textContent = 0;
    minutes.textContent = minute;
    console.log(seconds.textContent);
  }, 6000 * minute);
};

start.addEventListener("click", () => {
  if (second < 10) {
    while (second <= 10) {
      sec(second);
      second++;
    }
    if ((second = 10)) {
      second = 0;
      while (minute <= 10 && second <= 10) {
        min(minute);
        minute++;
        sec(second);
        second++;
      }
    }
  }
});
