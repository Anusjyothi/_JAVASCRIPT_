function BMI() {
    var weight = prompt("Enter weight in kg:") * 1;
    var height = prompt("Enter height in meters:") * 1;
    return Math.round(weight / (height * height));
}

console.log(BMI());
