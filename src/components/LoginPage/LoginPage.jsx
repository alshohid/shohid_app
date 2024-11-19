'use client'
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {useRouter} from "next/navigation"
const LoginPage = () => {
    const router = useRouter()
    const [loginData, setLoginData] = useState({ email: '', password: '' });


    const handleLoginSubmit = async(event) => {
        event.preventDefault();
        const { email, password } = loginData;
        try {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_HOST}/api/user/login`,
        {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email,
            password,
        }),
        }
    );

    const result = await response.json();
    if (response.ok && result.status === "success") {
        router.push('/')
    } else {
        console.error("Registration failed:", result);
    }
    } catch (error) {
    console.error("Error during registration:", error);
    }
};



    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setLoginData({ ...loginData, [name]: value });
    };

    return (
        <section className="login-page">
            <Container>
                <Row>
                    <Col lg={12} className="wow fadeInUp animated" data-aos="fade-up" data-aos-delay="300">
                        <div className="login-page__wrap">
                            <h3 className="login-page__wrap__title">Login</h3>
                            <form className="login-page__form" onSubmit={handleLoginSubmit}>
                                <div className="login-page__form-input-box">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Username or email *"
                                        value={loginData.email}
                                        onChange={(e) => handleInputChange(e, 'login')}
                                    />
                                </div>
                                <div className="login-page__form-input-box">
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Password *"
                                        value={loginData.password}
                                        onChange={(e) => handleInputChange(e, 'login')}
                                    />
                                </div>
                                <div className="login-page__checked-box">
                                    <input type="checkbox" name="save-data" id="save-data" />
                                    <label htmlFor="save-data"><span></span>Remember Me?</label>
                                </div>
                                <div className="login-page__form-btn-box">
                                    <button type="submit" className="tolak-btn tolak-btn--base">
                                        <b>Login</b><span></span>
                                    </button>
                                    <div className="login-page__form-forgot-password">
                                        <a href="login">Forgot your Password?</a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </Col>
                    
                </Row>
            </Container>
        </section>
    );
};

export default LoginPage;
