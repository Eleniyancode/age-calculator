"use strict";

const dayEl = document.getElementById("day");
const monthEl = document.getElementById("month");
const yearEl = document.getElementById("year");
const button = document.getElementById("button");

//get today date to calculate the age of the input
const todayDate = new Date();

button.addEventListener("click", () => {
  //form validation when all the input field is empty
  if (dayEl.value === "" && monthEl.value === "" && yearEl.value === "") {
    document.getElementById("label-day").style.color = "hsl(0, 100%, 67%)";
    document.getElementById("day").style.borderColor = "hsl(0, 100%, 67%)";
    document.getElementById("error-day").textContent = "This field is required";
    document.getElementById("error-day").style.color = "hsl(0, 100%, 67%)";

    document.getElementById("label-month").style.color = "hsl(0, 100%, 67%)";
    document.getElementById("month").style.borderColor = "hsl(0, 100%, 67%)";
    document.getElementById("error-month").textContent =
      "This field is required";
    document.getElementById("error-month").style.color = "hsl(0, 100%, 67%)";

    document.getElementById("label-year").style.color = "hsl(0, 100%, 67%)";
    document.getElementById("year").style.borderColor = "hsl(0, 100%, 67%)";
    document.getElementById("error-year").textContent =
      "This field is required";
    document.getElementById("error-year").style.color = "hsl(0, 100%, 67%)";
  }

  //formating the value input in the input field into a date format to check if a day is a valid day in a calender year
  let dob = [];
  dob.push(Number(monthEl.value), dayEl.value, yearEl.value);
  console.log(dob);

  const date = dob.join("/");
  const dateInDATEFORMAT = new Date(date);
  console.log(dateInDATEFORMAT);

  const isValidDate =
    dateInDATEFORMAT.getFullYear() === Number(yearEl.value) &&
    dateInDATEFORMAT.getMonth() + 1 === Number(monthEl.value) &&
    dateInDATEFORMAT.getDate() === Number(dayEl.value);

  // console.log(typeof dateInDATEFORMAT.getFullYear());
  // console.log(typeof yearEl.value);

  console.log(isValidDate);

  if (isValidDate === false) {
    document.getElementById("label-day").style.color = "hsl(0, 100%, 67%)";
    document.getElementById("day").style.borderColor = "hsl(0, 100%, 67%)";
    document.getElementById("error-day").textContent = "Must be a valid day";
    document.getElementById("error-day").style.color = "hsl(0, 100%, 67%)";
    return;
  } else {
    //Other form validation
    //form validation checking the date input in the field if it is valid
    if (
      dayEl.value > 31 &&
      dayEl.value < 1 &&
      monthEl.value > 12 &&
      monthEl.value < 1 &&
      yearEl.value > todayDate.getFullYear()
    ) {
      document.getElementById("label-day").style.color = "hsl(0, 100%, 67%)";
      document.getElementById("day").style.borderColor = "hsl(0, 100%, 67%)";
      document.getElementById("error-day").textContent = "Must be a valid day";
      document.getElementById("error-day").style.color = "hsl(0, 100%, 67%)";

      document.getElementById("label-month").style.color = "hsl(0, 100%, 67%)";
      document.getElementById("month").style.borderColor = "hsl(0, 100%, 67%)";
      document.getElementById("error-month").textContent =
        "Must be a valid day";
      document.getElementById("error-month").style.color = "hsl(0, 100%, 67%)";

      document.getElementById("label-year").style.color = "hsl(0, 100%, 67%)";
      document.getElementById("year").style.borderColor = "hsl(0, 100%, 67%)";
      document.getElementById("error-year").textContent = "Must be in the past";
      document.getElementById("error-year").style.color = "hsl(0, 100%, 67%)";
    } else if (dayEl.value > 31 || dayEl.value < 1) {
      document.getElementById("label-day").style.color = "hsl(0, 100%, 67%)";
      document.getElementById("day").style.borderColor = "hsl(0, 100%, 67%)";
      document.getElementById("error-day").textContent = "Must be a valid day";
      document.getElementById("error-day").style.color = "hsl(0, 100%, 67%)";
    } else if (monthEl.value > 12 || monthEl.value < 1) {
      document.getElementById("label-month").style.color = "hsl(0, 100%, 67%)";
      document.getElementById("month").style.borderColor = "hsl(0, 100%, 67%)";
      document.getElementById("error-month").textContent =
        "Must be a valid month";
      document.getElementById("error-month").style.color = "hsl(0, 100%, 67%)";
    } else if (yearEl.value > todayDate.getFullYear()) {
      document.getElementById("label-year").style.color = "hsl(0, 100%, 67%)";
      document.getElementById("year").style.borderColor = "hsl(0, 100%, 67%)";
      document.getElementById("error-year").textContent = "Must be in the past";
      document.getElementById("error-year").style.color = "hsl(0, 100%, 67%)";
    } else {
      //Calculating the ages in YEARs, MONTHs and DAYs
      //age in years
      console.log(todayDate.getFullYear() - yearEl.value);
      let resultYear = todayDate.getFullYear() - yearEl.value;
      console.log(resultYear);

      //age in months
      const month = todayDate.getMonth() + 1;
      let resultMonth = month - monthEl.value;
      console.log(resultMonth);

      if (resultMonth < 0) {
        // resultYear--;
        resultMonth += 12;
        console.log(resultMonth);
      }

      //age in days
      console.log(todayDate.getDate() - dayEl.value);
      let resultDay = todayDate.getDate() - dayEl.value;
      console.log(resultDay);
      if (resultDay < 0) {
        // resultMonth--;
        const prevMonth = new Date(
          todayDate.getFullYear(),
          todayDate.getMonth() + 1,
          0
        );
        console.log(prevMonth);
        resultDay += prevMonth.getDate();
      }

      //Outputing the results
      //the age in years output
      const output1 = document.getElementById("result-year");
      output1.textContent = `${resultYear} `;
      const text1 = `${resultYear}`;

      //adding typing animation to the display
      output1.textContent = ""; //clear previous content in year output
      let indexYear = 0;

      const typeYearChar = () => {
        if (indexYear < text1.length) {
          output1.textContent += text1.charAt(indexYear);
          indexYear++;
          setTimeout(typeYearChar, 300);
        }
      };

      typeYearChar();

      //the age in months output
      const output2 = document.getElementById("result-month");
      output2.textContent = `${resultMonth} `;
      const text2 = `${resultMonth}`;

      //adding typing animations to the display
      output2.textContent = "";
      let indexMonth = 0;
      const typeMonthChar = () => {
        // let index = 0;
        if (indexMonth < text2.length) {
          output2.textContent += text2.charAt(indexMonth);
          indexMonth++;
          setTimeout(typeMonthChar, 1000);
        }
      };

      typeMonthChar();

      //the age in days output
      const output3 = document.getElementById("result-day");
      output3.textContent = `${resultDay} `;
      const text3 = `${resultDay}`;

      //adding typing animations to the display
      output3.textContent = "";
      let indexDay = 0;
      const typeDayChar = () => {
        // let index = 0;
        if (indexDay < text3.length) {
          output3.textContent += text3.charAt(indexDay);
          indexDay++;
          setTimeout(typeMonthChar, 2000);
        }
      };

      typeDayChar();
    }
  }
});
