function isSameType(value1,value2) {
	if (typeof value1 === typeof value2) {
		return true
	} else {
		return false
	}
}


const callFunc = isSameType(10,NaN)

console.log(callFunc)