"use client";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useRouter } from "next/navigation";
const Registration = () => {
  const router = useRouter();
  const [registerData, setRegisterData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    mobile: "",
  });

  const handleRegisterSubmit = async (event) => {
    event.preventDefault();
    const { email, password, firstName, lastName, mobile } = registerData;

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_HOST}/api/user/registration`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
            firstName,
            lastName,
            mobile,
          }),
        }
      );

      const result = await response.json();
      if (response.ok && result.status === "success") {
        router.push('/login')
        console.log("Registration successful:", result);
      } else {
        console.error("Registration failed:", result);
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    margin: "8px 0",
    boxSizing: "border-box",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "16px",
  };

  const checkboxLabelStyle = {
    fontSize: "14px",
    color: "#555",
  };

  return (
    <section className="login-page">
      <Container>
        <Row>
          <Col
            lg={12}
            className="wow fadeInUp animated"
            data-aos="fade-up"
            data-aos-delay="400ms"
          >
            <div className="login-page__wrap">
              <h3 className="login-page__wrap__title">Register</h3>
              <form
                className="login-page__form"
                onSubmit={handleRegisterSubmit}
              >
                <div className="login-page__form-input-box">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Enter First Name"
                    value={registerData.firstName}
                    onChange={handleInputChange}
                    style={inputStyle}
                    className="text-"
                  />
                </div>
                <div className="login-page__form-input-box">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Enter Last Name"
                    value={registerData.lastName}
                    onChange={handleInputChange}
                    style={inputStyle}
                  />
                </div>
                <div className="login-page__form-input-box">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={registerData.email}
                    onChange={handleInputChange}
                    style={inputStyle}
                  />
                </div>
                <div className="login-page__form-input-box">
                  <input
                    type="text"
                    name="mobile"
                    placeholder="Mobile Number"
                    value={registerData.mobile}
                    onChange={handleInputChange}
                    style={inputStyle}
                  />
                </div>
                <div className="login-page__form-input-box">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={registerData.password}
                    onChange={handleInputChange}
                    style={inputStyle}
                  />
                </div>
                {/* <div className="login-page__checked-box">
                  <input
                    type="checkbox"
                    name="accept-policy"
                    id="accept-policy"
                  />
                  <label htmlFor="accept-policy" style={checkboxLabelStyle}>
                    <span></span>I accept the company privacy policy.
                  </label>
                </div> */}
                <div className="login-page__form-btn-box">
                  <button
                    type="submit"
                    className="tolak-btn"
                    style={{ padding: "10px 20px", fontSize: "16px" }}
                  >
                    <b>Register</b>
                    <span></span>
                  </button>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Registration;
