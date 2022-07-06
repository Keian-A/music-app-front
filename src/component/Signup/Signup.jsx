import { Box, TextField, InputLabel, Input, InputAdornment } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { useState } from "react";

function Signup() {
    let [tempPassword, setTempPassword] = useState("");
    let [userObject, setUserObject] = useState({
        username: "",
        password: "",
        email: ""
    });

    const handleInput = (e) => {
        switch (e.target.id) {
            case "username":
                setUserObject({
                    username: e.target.value,
                    password: userObject.password,
                    email: userObject.email
                });
                break;
            case "email":
                setUserObject({
                    username: userObject.username,
                    password: userObject.password,
                    email: e.target.value
                });
                break;
            case "confirmPassword":
                if (e.target.value === tempPassword) {
                    setUserObject({
                        username: userObject.username,
                        password: e.target.value,
                        email: userObject.email
                    });
                }
                // negative feedback validation
                break;
            default:
                console.log("Something went wrong");
        }
    }

    return (
        <div id="signup">
            <h1>Welcome to the signup page</h1>
            {/* creating the username textfield */}
            <InputLabel htmlFor="input-with-icon-adornment">
                Username
            </InputLabel>
            <Input
                id="username"
                startAdornment={
                    <InputAdornment position="start">
                        <AccountCircle />
                    </InputAdornment>
                }
            />
            {/* creating the password textfield */}
            <InputLabel htmlFor="input-with-icon-adornment">
                Password
            </InputLabel>
            <Input
                onChange={(e) => setTempPassword(e.target.value)}
                id="password"
                type="password"
            />
            {/* creating the confirm password textfield */}
            <InputLabel htmlFor="input-with-icon-adornment">
                Confirm Password
            </InputLabel>
            <Input
                id="confirmPassword"
                type="password"
            />
            {/* creating the email textfield */}
            <InputLabel htmlFor="input-with-icon-adornment">
                Email
            </InputLabel>
            <Input
                id="email"
                type="email"
            />
        </div>
    );
}

export default Signup;