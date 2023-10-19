import React from "react";
import Form from "../../components/shared/Form/Form";
import Logo from "../../components/Logo"; // Import the Logo component

const Login = () => {
  return (
    <>
      <div className="row g-0">
        <Logo /> {/* Include the Logo component here */}
        <div className="col-md-8 form-banner">
          <img
            src="./assets/images/banner1.jpg"
            alt="banner"
            style={{ display: "block", margin: "0 auto" }}
          />
        </div>
        <div className="col-md-4 form-container">
          <Form
            formTitle={"Login Your Account"}
            submitBtn={"login"}
            formType={"login"}
          />
        </div>
      </div>
    </>
  );
};

export default Login;
