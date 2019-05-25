// get input values
function getInputValues(id1, id2, id3, id4) {
  var id1, id2, id3, id4;
  var name = document.getElementById(id1).value;
  var country = document.getElementById(id2).value;
  var horsePower = document.getElementById(id3).value;
  var age = document.getElementById(id4).value;
  return inputValues = [name, country, number(horsePower), number(age)];
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
