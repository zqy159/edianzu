var reg={
	username:/^[a-zA-Z]\w{5,18}$/,
	password:/(?=.{6,18})(?=.*\d)(?=.*[A-Za-z])/,
	passwords:/(?=.{6,18})(?=.*\d)(?=.*[A-Za-z])(?=.*[!@#$%^&*? ])/,
	phone:/^1[3|4|5|7|8][0-9]{9}$/,
	email:/^\w+@\w+(\.[a-zA-Z]+){1,3}$/,
}