// /* JavaScript for the Signup Page */

// // Wait for the HTML document to be fully loaded before running the script
// document.addEventListener('DOMContentLoaded', () => {
    
//     // Get a reference to the signup form
//     const signupForm = document.getElementById('signupForm');

//     // Logic to handle Signup Form Submission
//     if (signupForm) {
//         signupForm.addEventListener('submit', (event) => {
//             // Prevent the page from reloading
//             event.preventDefault();

//             // Collect all the data entered by the user into an object
//             const userData = {
//                 text: document.getElementById("text").value.trim(),
//                 email: document.getElementById("email").value.trim(),
//                 password: document.getElementById("password").value.trim(),
//                 address: document.getElementById("address").value.trim(),
//                 city: document.getElementById("city").value.trim(),
//                 state: document.getElementById("inputState").value.trim(),
//                 zip: document.getElementById("zip").value.trim()
//             };

//             // Save the user object to LocalStorage as a string
//             localStorage.setItem("user", JSON.stringify(userData));

//             // Log for debugging (optional)
//             console.log("Saved Data:", userData);

//             // Show a success message to the user
//             alert("Signup Successful 🎉 Data Saved!");

//             // Redirect to the login page so the user can sign in
//             window.location.href = "login.html";

//             // Clear the form fields
//             signupForm.reset();
//         });
//     }
// });
