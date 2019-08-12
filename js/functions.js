// calculate insurance
function calculateInsurance() {
  var name = document.getElementById('name').value;
  var country = document.getElementById('country').value;
  var horsePower = parseInt(document.getElementById('horsePower').value);
  var age = parseInt(document.getElementById('age').value);

  console.log(name, country, horsePower, age);

  if (country == 'Austria') {
    var costs = horsePower * 100 / age + 50;
    document.getElementById('insuranceResult').innerHTML = name + ', your insurance costs &euro; ' + Math.floor(costs);

  } else if (country == 'Hungary') {
    costs = horsePower * 120 / age  + 100;
    document.getElementById('insuranceResult').innerHTML = name + ', your insurance costs &euro; ' + Math.floor(costs);

  } else if (country == 'Greece') {
    costs = horsePower * 150 / (age + 3)  + 50;
    document.getElementById('insuranceResult').innerHTML = name + ', your insurance costs &euro; ' + Math.floor(costs);
    
  }/* else {
    document.getElementById('insuranceResult').innerHTML = 'Printed calculation goes here.';
  }*/
  /*switch (country) {
    case 'Hungary':
      return parseInt(horsePower * 120 / age  + 100);
      break;
    case 'Greece':
      return parseInt(horsePower * 150 / (age + 3)  + 50);
      break;
    default:
      return parseInt(horsePower * 100 / age  + 50);
  }*/
}
