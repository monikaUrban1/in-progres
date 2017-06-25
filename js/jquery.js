$().ready(function() {
	$("#signupForm").validate( {
		rules: {
	login: {
	required: true,
	minlenght: 5
},
		},
		password: {
		required: true,
		minlenght: 5
		},
		confirm_password: {
		required: true,
		minlenght: 5,
		equalTo: "#password"
		},
		email: {
		required: true,
		email: true
		},
		messages: {
			login: "Podaj swój login",

		},
		password: {
			required: "Podaj hasło",
			minlenght: "Twoje hasło musi być dłuższe niż 5 znaków"
		}
	}
	);
