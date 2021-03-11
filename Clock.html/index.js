// const question = (name) => {
//   if (name === "Hridey") {
//     return function (topic) {
//       console.log(`Hi ${name}. What is ${topic}`);
//     };
//   }
//   if (name === "Karan") {
//     return function () {
//       console.log(`Hi ${name}. What is ${topic}`);
//     };
//   }
//   if (name === "Mohit") {
//     return function () {
//       console.log(`Hi ${name}. What is ${topic}`);
//     };
//   } else {
//     console.log("No question");
//   }
// };
// const q = question("Hridey");
// q("ui");

// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let arr = a.map((x) => {
//   return x < 4;
// });
// console.log(arr);
// let ar1 = a.filter((y) => {
//   return y > 2;
// });
// console.log(ar1);
// const hr = () => {
//   console.log("Heyy i'm arrow function");
// };
// hr();
// function x(y) {
//   yxy = y;
//   console.log(yxy);
// }
// x(function y() {
//   return 5;
// });

// const company = [
//   { name: "Hridey", c: "Developer", start: 2020 },
//   { name: "Karan", c: "Tester", start: 2020 },
// ];
// let c = company.map((x) => {
//   return x.name, x.c;
// });
// console.log(c);
class DigitalClock {
  constructor(element) {
    this.element = element;
  }
  start() {
    this.update();
    setInterval(() => {
      this.update();
    }, 100);
  }
  update() {
    const part = this.getTimeParts();
    const mFormat = part.minute.toString().padStart(2, "0");
    const second = part.second.toString().padStart(2, "0");
    const tFormat = `${part.hour}:${mFormat}:${second}`;
    const amPm = part.isAm ? "AM" : "PM";
    const dte = part.date;
    const m = part.month;
    const y = part.year;
    const dFormat = `${dte}/${m + 1}/${y}`;
    this.element.querySelector(".clock-time").innerText = tFormat;
    this.element.querySelector(".clock-ampm").innerText = amPm;
    this.element.querySelector(".date").innerText = dFormat;
    // this.element.querySelector(".month").innerText = m;
  }
  getTimeParts() {
    const now = new Date();
    return {
      hour: now.getHours() % 12 || 12,
      minute: now.getMinutes(),
      second: now.getSeconds(),
      isAm: now.getHours() < 12,
      date: now.getDate(),
      month: now.getMonth(),
      year: now.getFullYear(),
    };
  }
}
const clockElement = document.querySelector(".clock");
const clockObj = new DigitalClock(clockElement);
clockObj.start();
