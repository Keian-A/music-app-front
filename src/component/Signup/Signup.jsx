import { Box, TextField, InputLabel, Input, InputAdornment, Button } from "@mui/material";
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
                console.log(userObject.username);
                break;
            case "email":
                setUserObject({
                    username: userObject.username,
                    password: userObject.password,
                    email: e.target.value
                });
                console.log(userObject.email);
                break;
            case "confirmPassword":
                if (e.target.value === tempPassword) {
                    setUserObject({
                        username: userObject.username,
                        password: e.target.value,
                        email: userObject.email
                    });
                    console.log("password set");
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
            <Box>
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
                    onChange={handleInput}
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
                    onChange={handleInput}
                />
                {/* creating the email textfield */}
                <InputLabel htmlFor="input-with-icon-adornment">
                    Email
                </InputLabel>
                <Input
                    id="email"
                    type="email"
                    onChange={handleInput}
                />
                <Button variant="outlined" onSubmit={handleInput} >Submit</Button>
            </Box>
        </div>
    );
}

export default Signup;