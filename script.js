const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const passwordInput = document.getElementById("password");
        const submitBtn = document.getElementById("Btn");
       
    
        const nameError = document.getElementById("nameError");
        const emailError = document.getElementById("emailError");
        const passwordError = document.getElementById("passwordError");
      

        function validateForm() {
            let isValid = true;
            if (nameInput.value.trim() === " ") {
                nameError.textContent = "Name is required.";
                isValid = false;
            } else {
                nameError.textContent = " ";
            }
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(emailInput.value)) {
                emailError.textContent = "Enter a valid email address.";
                isValid = false;
            } else {
                emailError.textContent = " ";
            }
            if (passwordInput.value.length < 6) {
                passwordError.textContent = "Password must be at least 6 characters long.";
                isValid = false;
            } else {
                passwordError.textContent = " ";
            }
             
            submitBtn.disabled = !isValid;
        }

        nameInput.addEventListener("input", validateForm);
        emailInput.addEventListener("input", validateForm);
        passwordInput.addEventListener("input", validateForm);
       
        document.getElementById("registrationForm").addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Form submitted successfully");
        });
