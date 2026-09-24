/*=========================================================
  EDUWEB LOGIN / REGISTER
=========================================================*/


/*=========================================================
  ELEMENTS
=========================================================*/

const authRight =
    document.querySelector("#authRight");


const loginContent =
    document.querySelector("#loginContent");


const registerContent =
    document.querySelector("#registerContent");


const successContent =
    document.querySelector("#successContent");


/*=========================================================
  LOGIN ELEMENTS
=========================================================*/

const loginForm =
    document.querySelector("#loginForm");


const loginEmail =
    document.querySelector("#loginEmail");


const loginPassword =
    document.querySelector("#loginPassword");


const loginMessage =
    document.querySelector("#loginMessage");


const loginPasswordToggle =
    document.querySelector("#loginPasswordToggle");


const loginPasswordIcon =
    document.querySelector("#loginPasswordIcon");


/*=========================================================
  REGISTER ELEMENTS
=========================================================*/

const registerForm =
    document.querySelector("#registerForm");


const registerName =
    document.querySelector("#registerName");


const registerEmail =
    document.querySelector("#registerEmail");


const registerPassword =
    document.querySelector("#registerPassword");


const registerMessage =
    document.querySelector("#registerMessage");


const registerPasswordToggle =
    document.querySelector("#registerPasswordToggle");


const registerPasswordIcon =
    document.querySelector("#registerPasswordIcon");


/*=========================================================
  NAVIGATION BUTTONS
=========================================================*/

const showRegister =
    document.querySelector("#showRegister");


const showLogin =
    document.querySelector("#showLogin");


const successLogin =
    document.querySelector("#successLogin");


/*=========================================================
  LOGIN PASSWORD SHOW / HIDE
=========================================================*/

if (
    loginPasswordToggle &&
    loginPassword &&
    loginPasswordIcon
) {

    loginPasswordToggle.addEventListener(
        "click",
        function () {

            if (
                loginPassword.type === "password"
            ) {

                loginPassword.type = "text";

                loginPasswordIcon.setAttribute(
                    "name",
                    "eye-off-outline"
                );

                loginPasswordToggle.setAttribute(
                    "aria-label",
                    "Hide password"
                );

            } else {

                loginPassword.type = "password";

                loginPasswordIcon.setAttribute(
                    "name",
                    "eye-outline"
                );

                loginPasswordToggle.setAttribute(
                    "aria-label",
                    "Show password"
                );

            }

        }
    );

}


/*=========================================================
  REGISTER PASSWORD SHOW / HIDE
=========================================================*/

if (
    registerPasswordToggle &&
    registerPassword &&
    registerPasswordIcon
) {

    registerPasswordToggle.addEventListener(
        "click",
        function () {

            if (
                registerPassword.type === "password"
            ) {

                registerPassword.type = "text";

                registerPasswordIcon.setAttribute(
                    "name",
                    "eye-off-outline"
                );

                registerPasswordToggle.setAttribute(
                    "aria-label",
                    "Hide password"
                );

            } else {

                registerPassword.type = "password";

                registerPasswordIcon.setAttribute(
                    "name",
                    "eye-outline"
                );

                registerPasswordToggle.setAttribute(
                    "aria-label",
                    "Show password"
                );

            }

        }
    );

}


/*=========================================================
  SHOW REGISTER
=========================================================*/

if (showRegister) {

    showRegister.addEventListener(
        "click",
        function () {

            authRight.classList.remove(
                "success-mode"
            );

            authRight.classList.add(
                "register-mode"
            );

            registerMessage.textContent = "";

        }
    );

}


/*=========================================================
  SHOW LOGIN
=========================================================*/

if (showLogin) {

    showLogin.addEventListener(
        "click",
        function () {

            authRight.classList.remove(
                "register-mode"
            );

            authRight.classList.remove(
                "success-mode"
            );

            loginMessage.textContent = "";

        }
    );

}


/*=========================================================
  REGISTER FORM
=========================================================*/

if (registerForm) {

    registerForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                registerName.value.trim();


            const email =
                registerEmail.value.trim();


            const password =
                registerPassword.value.trim();



            /*-----------------------------------------
              CHECK EMPTY FIELDS
            -----------------------------------------*/

            if (
                name === "" ||
                email === "" ||
                password === ""
            ) {

                registerMessage.textContent =
                    "Please fill in all fields.";

                return;

            }



            /*-----------------------------------------
              CHECK EMAIL
            -----------------------------------------*/

            if (
                !email.includes("@") ||
                !email.includes(".")
            ) {

                registerMessage.textContent =
                    "Please enter a valid email address.";

                return;

            }



            /*-----------------------------------------
              CHECK PASSWORD
            -----------------------------------------*/

            if (password.length < 6) {

                registerMessage.textContent =
                    "Password must be at least 6 characters.";

                return;

            }



            /*-----------------------------------------
              ACCOUNT CREATED
            -----------------------------------------*/

            registerMessage.textContent = "";


            registerForm.reset();


            authRight.classList.remove(
                "register-mode"
            );


            authRight.classList.add(
                "success-mode"
            );

        }
    );

}


/*=========================================================
  SUCCESS → LOGIN
=========================================================*/

if (successLogin) {

    successLogin.addEventListener(
        "click",
        function () {

            authRight.classList.remove(
                "success-mode"
            );

            loginMessage.textContent = "";

            loginForm.reset();

        }
    );

}


/*=========================================================
  LOGIN FORM
=========================================================*/

if (loginForm) {

    loginForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const email =
                loginEmail.value.trim();


            const password =
                loginPassword.value.trim();



            /*-----------------------------------------
              CHECK EMPTY FIELDS
            -----------------------------------------*/

            if (
                email === "" ||
                password === ""
            ) {

                loginMessage.textContent =
                    "Please enter your email and password.";

                return;

            }



            /*-----------------------------------------
              DEMO LOGIN
            -----------------------------------------*/

            loginMessage.textContent =
                "Login form submitted successfully.";

        }
    );

}