// Self-invoking anonymous function
(function($) {
	'use strict';

	// Click event listeners
	$('#btnSignUp').click(function() {
	  signUp();
	});

	$('#btnSignIn').click(function() {
	  signIn();
	});	

	// Sign Up
	function signUp(){
		AWSCognito.config.region = 'us-east-1'; //This is required to derive the endpoint

		var poolData = { UserPoolId : 'us-east-1_5FCp2LCZO', // Put your User Pool ID here
			ClientId : '157t8u1svbeo35bot92kq8bn0u' // Put your apps User Pool Client ID here
		};
		var userPool = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool(poolData);

		var attributeList = [];

		var dataEmail = {
			Name : 'email',
			Value : 'email@mydomain.com'
		};
		var dataPhoneNumber = {
			Name : 'phone_number',
			Value : '+15555555555'
		};
		var attributeEmail = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute(dataEmail);
		var attributePhoneNumber = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute(dataPhoneNumber);

		attributeList.push(attributeEmail);
		attributeList.push(attributePhoneNumber);

		userPool.signUp('username', 'password', attributeList, null, function(err, result){
			if (err) {
				alert(err);
				return;
			}
			cognitoUser = result.user;
			console.log('user name is ' + cognitoUser.getUsername());
		});

	}
	
	// Sign In
	function signIn(){
		alert('Sign In');	

	}	

// End 	self-invoking anonymous function
})(jQuery);