const verifyPassword = (password) => {
	var strength = 0
	if (password.match(/[a-z]+/)) {
		strength += 1
	}
	if (password.match(/[A-Z]+/)) {
		strength += 1
	}
	if (password.match(/[0-9]+/)) {
		strength += 1
	}
	if (password.match(/[$@#&!]+/)) {
		strength += 1
	}
	return strength === 4
}

export default verifyPassword
