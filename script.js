function trailingZeros(n) {
	let num = parseInt(n)
	if(isNan(num) || !num){
		alert("Enter A valid Number")
		return
	}
  let zeros=0
	for (let index = 5; index <=num; index*=5) {
		zeros+=Math.floor(num/i)
	}
	return zeros
}

const input = prompt("Enter a number");
alert(trailingZeros(input));
