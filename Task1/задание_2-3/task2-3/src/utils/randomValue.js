function generate_random_number(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min
}

export default generate_random_number
