//your JS code here. If required.
let element = document.querySelector('level')
let currentelement = element;
let count = 0;

while(currentelement != undefined;){
count++;
currentelement= currentelement.parentElement;
	
	}
alert(`The level of the element is: $(count)`)
