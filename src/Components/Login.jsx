import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { AuthContext } from "./Context";
import './Login.css'

const Login = () => {
  const [error, setError] = useState("");
  const [number, setNumber] = useState("");
  const [flag, setFlag] = useState(false);
  const [otp, setOtp] = useState("");
  const [result, setResult] = useState("");
  const {  setUpRecaptcha,login} = useContext(AuthContext);
  const navigate = useNavigate();

  const getOtp = async (e) => {
    e.preventDefault();
    console.log(number);
    setError("");
    if (number === "" || number === undefined)
      return setError("Please enter a valid phone number!");
    try {
      const response = await setUpRecaptcha(number);
      setResult(response);
      setFlag(true);
      console.log(response)
    } catch (err) {
      setError(err.message);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    if (otp === "" || otp === null) return;
    try {
      await result.confirm(otp);
     login()
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="mainDivlog">
      <div className="p-4 box">
        <h2 className="mb-3">Firebase Phone Auth</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form className="box1" onSubmit={getOtp} style={{ display: !flag ? "block" : "none" }}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <h3 style={{color:"white",marginTop:"-20px"}}>Login to continue</h3>
            <PhoneInput
      
            className="inp"
              defaultCountry="IN"
              value={number}
              onChange={setNumber}
              placeholder="Enter Phone Number"
            />
            <div id="recaptcha-container"></div>
          </Form.Group>
          <div className="button-right">
            <Link to="/">
              <Button className="wid" variant="secondary">Cancel</Button>
            </Link>
            &nbsp;
            <Button className="wid" type="submit" variant="primary">
              Send Otp
            </Button>
          </div>
        </Form>

        <Form className="otpform" onSubmit={verifyOtp} style={{ display: flag ? "block" : "none" }}>
          <Form.Group className="mb-3" controlId="formBasicOtp">
            <h5 style={{color:"#192133"}}>Enter Otp</h5>
            <Form.Control
            className="inp"
              type="otp"
              placeholder="Enter OTP"
              onChange={(e) => setOtp(e.target.value)}
            />
          </Form.Group>
          <div className="button-right">
            <Link to="/">
              <Button variant="secondary">Cancel</Button>
            </Link>
            &nbsp;
            <Button type="submit" variant="primary">
              Verify
            </Button>
            <h5 style={{color:"#192133"}}>Enter Otp</h5>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;