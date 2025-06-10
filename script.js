function trailingZeros(n) {
	let num = parseInt(n)
	if(isNaN(num) || num<=0){
		alert("Enter A valid Number")
		return 0
	}
  let zeros=0
	for (let index = 5; index <=num; index*=5) {
		zeros+=Math.floor(num/index)
	}
	return zeros
}

const input = prompt("Enter a number");
alert(trailingZeros(input));
