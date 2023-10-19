import React from "react";
import Form from "../../components/shared/Form/Form";
import Logo from "../../components/Logo"; // Import the Logo component

const Register = () => {
  return (
    <>
      <div className="row g-0">
        <Logo /> {/* Include the Logo component here */}
        <div className="col-md-8 form-banner ">
          <img
            src="./assets/images/banner2.jpg"
            alt=""
            style={{ width: "70%", display: "block", margin: "0 auto" }}
          />
        </div>
        <div className="col-md-4 form-container">
          <Form
            formTitle={"Register Your Account"}
            submitBtn={"Create Account"}
            formType={"register"}
          />
        </div>
      </div>
    </>
  );
};

export default Register;
