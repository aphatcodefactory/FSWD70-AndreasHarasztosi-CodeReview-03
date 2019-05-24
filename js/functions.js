// get input values
function getInputValues() {
  var name = document.getElementById('name').value;
  var country = document.getElementById('country').value;
  var horsePower = document.getElementById('horsePower').value;
  var age = document.getElementById('age').value;
  return inputValues = [name, country, horsePower, age];
}

// calculate insurance
function calculateInsurance(country, horsePower, age) {
  switch (country) {
    case 'Hungary':
      return horsePower * 120 / age  + 100;
      break;
    case 'Greece':
      return horsePower * 150 / (age + 3)  + 50;
      break;
    default:
      return horsePower * 100 / age  + 50;
  }
}

// print insurance info
function resultOfInsurance() {
  document.getElementById('insuranceResult').innerHTML =
      inputValues[0] + ', your insurance costs &euro; ' + calculateInsurance() + '.';
}
