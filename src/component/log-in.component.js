import { useState } from "react";
import Input from "./common/input.component";

const LogIn = (props) => {
    const [email, setEmail] = useState[""];
    const [password, setPassword] = useState[""];

    const handleEmailChange = (event) => {
        const value = event.target.value;
        setPassword(value);
    };
    const handlePasswordChange = (event) => {
        const value = event.target.value;
        setPassword(value);
    };
    const handleSubmit = () => {
        if (email === "admin" && password === "12345") {

        }
        else {

        }
    };

    return (
        <>
            <form>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>

                    <Input
                        type="text"
                        id="email"
                        value={email}
                        handleChange={() => setEmail(handleEmailChange)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>

                    <Input
                        type="password"
                        id="password"
                        value={password}
                        handleChange={() => setPassword(handlePasswordChange)}
                    />
                </div>

                <button
                    onChange={handleSubmit}
                    type="submit"
                    className="btn btn-primary p-lg-2"
                >
                    Submit
                </button>
            </form>
        </>
    );
};

export default LogIn;
