// Self-invoking anonymous function
(function($) {
	'use strict';

	// Hide the loading spinner image.
	$('#spinnerShow').hide();

	// Show the buttons
	$('#buttonSection').show();

	// Click event listeners for buttons
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

	/***************** The main code ******************/

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
