const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height == "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight == "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`; 

    if (bmi < 18.6) {
        results.textContent = `<span>Under weigth :${bmi}</span>`;
      } else if (bmi > 18.6 && bmi < 24.9) {
        results.textContent = `Normal Weight:${bmi}`;
      } else {
        results.textContent = `Over Weight : ${bmi}`;
      }
  } 
});
