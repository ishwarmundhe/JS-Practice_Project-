const form = document.querySelector('form');

form.addEventListener('submit', (e)=>{
e.preventDefault();

const height = parseInt(document.querySelector('#height').value);
const weight = parseInt(document.querySelector('#weight').value);
const result = document.querySelector('#results');

if( height === '' || height < 0 || isNaN(height)){
  result.innerHTML = `Please give valid value in height`
}
else if( weight === '' || weight < 0 || isNaN(weight)){
  result.innerHTML = `Please give valid value in weight`
}else{
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);

  result.innerHTML = `<span> ${bmi}</span> `;
// --- 2nd part 
  const resultShow = document.querySelector('#announce');
  if(bmi<18.6){
    resultShow.innerHTML = `<span> You are under weight and your BMI is ${bmi}</span>`
  }
  else if(bmi<24.9){
    resultShow.innerHTML = `<span> Your weight is in Normal range  and your BMI is ${bmi}</span>`
  }
  else {
    resultShow.innerHTML = `<span> You are over weight and your BMI is ${bmi}<span>`
  }

};




});