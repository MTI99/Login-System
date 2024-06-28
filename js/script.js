var signUpButton = document.getElementById('signUp');
var signInButton = document.getElementById('signIn');
var container = document.getElementById('container');
var signInSubmit = document.querySelector("#signInSubmit")
var signUpSubmit = document.querySelector("#signUpSubmit")
var userMail = document.querySelector("#userMail")
var userPass = document.querySelector("#userPass")
var signUpName = document.querySelector("#signUpName")
var signUpMail = document.querySelector("#signUpMail")
var signUpPass = document.querySelector("#signUpPass")
var checkSignIn = document.querySelector(".checkSignIn")
var checkSignUp = document.querySelector(".checkSignUp")
var welcomUser = document.querySelector("#userName")


var users = []

if(localStorage.getItem("userData") != null) { 
	users = JSON.parse(localStorage.getItem("userData"))
}

signUpButton?.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton?.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});


// Sign Up


function signUp() { 
		if (signUpName.value == "" || signUpMail.value == "" || signUpPass.value == "" ){
			checkSignUp.innerHTML = `<span class="text-danger fs-6 mb-3">Please Complete Data</span>`
			return
		} else { 
			for (let i = 0; i < users.length; i++) {
				if ( signUpMail.value == users[i].mail  ) { 
					checkSignUp.innerHTML = `<span class="text-danger fs-6 mb-3">Email Is Already Exist</span>`
					return false;
				}
				
			}
		}
		checkSignUp.innerHTML = `<span class="text-success fs-6 mb-3">User Added Successfully</span>`
		addUser()
		container.classList.remove("right-panel-active");


}

signUpSubmit?.addEventListener("click",function(){
	signUp()

})


// Add New User


function addUser() { 
	var newUser = { 
		name: signUpName.value,
		mail: signUpMail.value,
		pass: signUpPass.value
	}
	users.push(newUser)
	localStorage.setItem("userData", JSON.stringify(users))
	
	clearForm()
}


// Sign In

function signIn() { 
	
			if(userMail.value == "" || userPass.value == "") {
				checkSignIn.innerHTML = `<span class="text-danger fs-6">All Inputs Are Required</span>`
				
			} else { 
				for (let i = 0; i < users.length; i++) {
					if (userMail.value == users[i].mail && userPass.value == users[i].pass) { 
						checkSignIn.innerHTML = `<span class="text-success fs-6">Logged In Successfully</span>`
						localStorage.setItem("currentUser",JSON.stringify(users[i].name))
						clearForm()
						setTimeout(() => {
							window.location.href = "welcom.html";
						});
						return
				}
				checkSignIn.innerHTML = `<span class="text-danger fs-6">Invalid Mail Or Paasword</span>`
			}
		}
	}

signInSubmit?.addEventListener("click",function(){
	signIn()
})


// Home Page 

var currentUser = JSON.parse(localStorage.getItem("currentUser"))

welcomUser.innerHTML = `<div class=" bg-primary fs-2 text-center text-white p-5">Welcom ${currentUser}</div>`




// Log Out 

var logOut = document.querySelector("#logOut")

logOut.addEventListener("click", function(){
	localStorage.setItem("currentUser","")
	setTimeout(() => {
		window.location.href = "index.html";
	});
})



// Clear Inputs

function clearForm() {
	signUpName.value = ""
	signUpMail.value = ""
	signUpPass.value = ""
	userMail.value = ""
	userPass.value = ""
	
}


