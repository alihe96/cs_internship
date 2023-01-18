// select 
const weight = document.querySelector('#weight');
const height = document.querySelector('#height');

const weightValue = document.querySelector('#weightValue');
const heightValue = document.querySelector('#heightValue');

const result = document.querySelector('#result');
const category = document.querySelector('#category');

//function
const bmiCalculator = () => {
    let weightInput = weight.value;
    let heightInput = height.value;

    weightValue.innerHTML = weightInput;
    heightValue.innerHTML = heightInput;

    let bmi = (weightInput / (Math.pow(heightInput / 100, 2))).toFixed(1)
    result.innerHTML = bmi;

    if (bmi < 18.5) {
        result.style.color = "blue"
        category.innerHTML = " under normal"
    } else if (bmi > 18.5 && bmi < 24.9) {
        result.style.color = "green"
        category.innerHTML = "  normal"
    } else if (bmi > 24.9 && bmi < 29.9) {
        result.style.color = "yellow"
        category.innerHTML = " higher normal"
    } else {
        result.style.color = "red"
        category.innerHTML = " fat"
    }
}

weight.addEventListener('input', bmiCalculator)
height.addEventListener('input', bmiCalculator)