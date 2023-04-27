/*
Vehicle Purchase
Instructions
*/

const needsLicense = (kind) => {
	// code here
	return (kind == 'car' || kind == 'truck')
}

const chooseVehicle = (option1, option2) => {
	// code here
     arr = [option1,option2];
    arr = arr.sort();
	return arr[0] + " is clearly the better choice.";
    
}

const calculateResellPrice = (originalPrice, age) => {
	// code here
	if(age < 3){
	    return (originalPrice*80) / 100;
	}
	if(age>3 && age<10){
	    return (originalPrice*70) / 100;
	}
	if(age > 10){
	    return (originalPrice*50) / 100;
	}
}
