async function calculate() {
	var weight = document.getElementById("weight").value;
	var height = document.getElementById("height").value;  
    
    var element = document.getElementById("result");
    element.style.visibility = "visible"; 

	if (weight == "" || height === "") {
		element.innerHTML = "Don't skip any input field";
	} 
    else if (weight < 0 || height < 0) {
		element.innerHTML = "Negative Values not Allowed";
	}
	else {
		height /= 100;
		height *= height;
		
		var bmi = weight / height;
		bmi = bmi.toFixed(1);

		var result = "";
	
		if (bmi < 18.5) {
			result = "Your BMI is " + bmi + ", you are Underweight";
		} 
		else if (bmi >= 18.5 && bmi <= 24.9) {
			result = "Your BMI is " + bmi + ", You are Normal";
		} 
		else {//bmi > 24.9
			result = "Your BMI is " + bmi + ", You are Overweight";
		}

        element.innerHTML = result;
	}   
}