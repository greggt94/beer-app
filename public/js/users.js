// $(document).ready(function() {

    // var firstName = $("#first_name"),
    //     lastName = $("#last_name"),
    //     password = $("#password"),
    //     email = $("#email"),
    //     birthday = $("#date");

//     $(document).on("submit", "#user-form",
//         getFormData);

//     function getFormData(event) {
//         console.log(first_name + ' | ' +
//             last_name + ' | ' +
//             password + ' | ' +
//             email + ' | ' +
//             birthday + ' | ');
//     };



// })

$(document).ready(function() {
	$("#submit-button").click(function(){
	        var firstName = $("#first_name").val(),
	        lastName = $("#last_name").val(),
	        password = $("#password").val(),
	        email = $("#email").val(),
	        birthday = $("#birthday").val();

	        console.log(firstName + ' | ' +
	            lastName + ' | ' +
	            password + ' | ' +
	            email + ' | ' +
	            birthday + ' | ');
	});
});
