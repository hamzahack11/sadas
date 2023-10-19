export const handleLogin = (e, email, password) => {
  e.preventDefault();
  if ((!email, !password)) {
    alert("Please enter all the required info");
  }
  try {
    console.log("login", e, email, password);
  } catch (error) {
    console.log(error);
  }
};

export const handleRegister = (e, email, password, name, cnic, phone) => {
  e.preventDefault();
  try {
    console.log("Register", e, email, password, name, cnic, phone);
  } catch (error) {
    console.log(error);
  }
};
