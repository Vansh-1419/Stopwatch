const time = document.querySelector(".time");
const seconds = document.querySelector(".seconds");
const minutes = document.querySelector(".minutes");
const hours = document.querySelector(".hours");
const start = document.querySelector("#start");
const stopl = document.querySelector("#stop");
let second = `${0}`;
let mint = 0;
let hr = `${0}`;

const sec = (second) => {
  setTimeout(() => {
    seconds.textContent = `${second}`;
  }, 1000 * second);
};

const min = (mint) => {
  setTimeout(() => {
    second = `${0}`;
    seconds.textContent = second;
    while (second <= 60) {
      sec(second);
      second++;
    }

    minutes.textContent = mint;
  }, 60000 * mint);
};
const hour = (hr) => {
  setTimeout(() => {
    mint = `${0}`;
    minutes.textContent = mint;
    while (mint <= 60) {
      min(mint);
      mint++;
    }
    hours.textContent = hr;
  }, 60000 * 60 * hr);
};

start.addEventListener("click", () => {
  if (second <= 60) {
    while (second <= 60) {
      sec(second);
      second++;
    }
  }
  if (second > 60) {
    while (mint <= 60) {
      min(mint);
      mint++;
    }
  }
  if (mint > 60) {
    while (hr <= 60) {
      hour(hr);
      hr++;
    }
  }
});
stopl.addEventListener("click", () => {});
