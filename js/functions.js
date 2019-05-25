// get input values
var id1, id2, id3, id4;

function getInputValues() {
  var name = document.getElementById('name').value;
  var country = document.getElementById('country').value;
  var horsePower = document.getElementById('horsePower').value;
  var age = document.getElementById('age').value;
  return inputValues = [name, country, parseInt(horsePower), parseInt(age)];
}

// calculate insurance
function calculateInsurance(country, horsePower, age) {
  switch (country) {
    case 'Hungary':
      return parseInt(horsePower * 120 / age  + 100);
      break;
    case 'Greece':
      return parseInt(horsePower * 150 / (age + 3)  + 50);
      break;
    default:
      return parseInt(horsePower * 100 / age  + 50);
  }
}

// print insurance info
function resultOfInsurance() {
  document.getElementById('insuranceResult').innerHTML =
      inputValues[0] + ', your insurance costs &euro; ' + parseInt(calculateInsurance()) + '.';
}
