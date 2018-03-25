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

	$('#btnSignOut').click(function() {
	  signOut();
	});

	$('#btnUpdate').click(function() {
	  updateProfile();
	});

	$('#forgotPassword').click(function() {
	  forgotPassword();
	});

	$('#btnSync').click(function() {
	  getCognitoSynToken();
	});

	$('#btnS3').click(function() {
	  createObject();
	});



	// Sign Up
	function signUp(){
	}

	// Sign In
	function signIn(){
	}

	// Sign Out
	function signOut() {
	}

	// Update profile
	function updateProfile(){
	}

	// Forgot password
	function forgotPassword(){
	}

	// Get Cognito Sync token
	function getCognitoSynToken(){
	}

	// Create an S3 object
	function createObject(){
	}


// End 	self-invoking anonymous function
})(jQuery);
