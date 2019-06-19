function leapYear(){
let year = prompt('What year you wanna check??');
if(year%4==0 && year%100!==0){ 
	return true;
}
if(year%4==0 && year%100==0 && year%400==0){
	return true;
	}
else{
	return false;
	}
}
leapYear();
