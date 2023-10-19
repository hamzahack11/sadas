import React, { useState } from "react";
import InputType from "./InputType";
import { Link } from "react-router-dom";
import { handleLogin, handleRegister } from "../../../services/authService";

const Form = ({ formType, submitBtn, formTitle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [cnic, setCnic] = useState("");

  return (
    <div>
      <form
        onSubmit={(e) => {
          if (formType === "login") return handleLogin(e, email, password);
          else if (formType === "register")
            return handleRegister(e, email, password, name, cnic, phone);
        }}
      >
        <h1 className="text-center">{formTitle}</h1>
        <hr />
        {/* //switch statement */}
        {(() => {
          switch (true) {
            case formType === "login": {
              return (
                <>
                  <InputType
                    labelText={"Email"}
                    labelFor={"forEmail"}
                    inputType={"email"}
                    name={"email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <InputType
                    labelText={"Password"}
                    labelFor={"forPassword"}
                    inputType={"password"}
                    name={"password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </>
              );
            }
            case formType === "register": {
              return (
                <>
                  <InputType
                    labelText={"Email"}
                    labelFor={"forEmail"}
                    inputType={"email"}
                    name={"email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <InputType
                    labelText={"Password"}
                    labelFor={"forPassword"}
                    inputType={"password"}
                    name={"password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <InputType
                    labelText={"Full Name"}
                    labelFor={"forname"}
                    inputType={"text"}
                    name={"name"}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <InputType
                    labelText={"CNIC"}
                    labelFor={"forCnic"}
                    inputType={"number"}
                    name={"cnic"}
                    value={cnic}
                    onChange={(e) => setCnic(e.target.value)}
                  />
                  <InputType
                    labelText={"Phone Number"}
                    labelFor={"forPhone"}
                    inputType={"number"}
                    name={"phone"}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </>
              );
            }
            default: {
              return (
                <div>
                  <p>Unexpected form type: {formType}</p>
                </div>
              );
            }
          }
        })()}

        <div className="d-flex justify-content-between  flex-row">
          {formType === "login" ? (
            <p>
              Not Registered yet ?<Link to="/register">Click Here</Link>
            </p>
          ) : (
            <p>
              Already Registered ? <Link to="/login">Click Here</Link>
            </p>
          )}

          <button type="submit" className="btn  btn-primary">
            {submitBtn}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
