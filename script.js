function trailingZeros(n) {
	parseInt(n)
	if(isNan(n) || !n){
		alert("Enter A valid Number")
		return
	}
  let zeros=0
	for (let index = 5; index <=n; index*=5) {
		zeros+=Math.floor(n/i)
	}
	return zeros
}

const input = prompt("Enter a number");
alert(trailingZeros(input));
