import React, { useState } from "react";

interface Props {}

const Login: React.FC<Props> = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [authToken, setAuthToken] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const res = await fetch("http://storebackendapi-prod.eba-pdy3h2zr.us-east-1.elasticbeanstalk.com/users/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });
            if (res.ok) {
                setSuccess(true);
            } else {
                console.log("Invalid username or password");
                setError("Invalid username or password");
            }
        } catch (err) {
            console.error(err);
        }
        };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type="submit">Login</button>
            {error && <p>{error}</p>}
            {success && <p>You have logged in successfully</p>}
        </form>
    );
};

export default Login;