import React, { memo, useCallback, useContext, useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import styled from "styled-components";
import { StoreContext } from "../../App";
import VisibilityIcon from "@mui/icons-material/Visibility";
function User() {
  const { store } = useContext(StoreContext);
  const [showPassword, setShowPassword] = useState(false);
  const theme = store.theme;

  const handleShowPassword = useCallback(() => {
    setShowPassword(!showPassword);
  }, [showPassword]);
  return (
    <UserWrapper theme={theme}>
      <Login>LOGIN</Login>
      <InputWrapper theme={theme}>
        <Label htmlFor="username1" theme={theme}>
          Username
        </Label>
        <Input
          autocomplete="off"
          type="text"
          id="username1"
          placeholder="Enter your username"
          theme={theme}
        ></Input>
      </InputWrapper>
      <InputWrapper theme={theme}>
        <Label htmlFor="username2" theme={theme}>
          Passwords
        </Label>
        <InputWrapperIcon>
          <Input
            autocomplete="off"
            type={showPassword ? "text" : "password"}
            id="username2"
            placeholder="Enter your passwords"
            theme={theme}
          ></Input>
          <VisibilityIcon
            onClick={handleShowPassword}
            sx={{
              fontSize: "15px",
              color: `${
                store.theme === "dark"
                  ? showPassword
                    ? "#fff"
                    : "#999"
                  : showPassword
                  ? "#000"
                  : "#999"
              }`,
              position: "absolute",
              right: "0",
              top: "50%",
              transform: "translateY(-50%)",
              marginRight: "5px",
              cursor: "pointer",
              transition: "all 0.2s ease-in",
            }}
          />
        </InputWrapperIcon>
      </InputWrapper>
      <ButtonWrapper>
        <Button primary theme={theme}>
          Register
        </Button>
        <Button secondary theme={theme}>
          Login
        </Button>
      </ButtonWrapper>
      <SocialButtonLists>
        <SocialButtonItem>
          <GoogleButton>
            <GoogleIcon sx={{ fontSize: "20px" }}></GoogleIcon>
            <GoogleText>Log in with Google</GoogleText>
          </GoogleButton>
        </SocialButtonItem>
        <SocialButtonItem>
          <FacebookButton>
            <FacebookIcon sx={{ fontSize: "20px" }}></FacebookIcon>
            <FacebookText>Log in with Facebook</FacebookText>
          </FacebookButton>
        </SocialButtonItem>
      </SocialButtonLists>
    </UserWrapper>
  );
}

export default memo(User);

const UserWrapper = styled.div`
  width: 100%;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.theme === "dark" ? "#fff" : "#000")};

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    opacity: 0.3;
    background-image: url(https://upload.wikimedia.org/wikipedia/commons/3/38/Worldmap-blank.svg);
    background-repeat: no-repeat;
    background-size: 800px;
    background-position: 60% 10%;
    z-index: 1;
  }
`;

const Login = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

const InputWrapper = styled.div`
  padding: 10px 10px;
  background: ${(props) =>
    props.theme === "dark" ? "#000000b3" : "#ffffffc7"};
  border: ${(props) =>
    props.theme === "dark" ? " 1px solid #999" : " 1px solid #000"};
  border-radius: 6px;
  width: 250px;
  margin-bottom: 20px;
  z-index: 300;
`;

const InputWrapperIcon = styled.div`
  width: 100%;
  position: relative;
`;
const Input = styled.input`
  display: block;
  width: 100%;
  color: ${(props) => (props.theme === "dark" ? "#999" : "#000")};
  font-size: 13px;
  background-color: transparent;
  padding: 5px 5px;
  transition: all 0.25s linear;
`;
const Label = styled.label`
  font-size: 13px;
  display: inline-block;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 10px;
  color: ${(props) => (props.theme === "dark" ? "#fff" : "#000")};
`;
const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  z-index: 300;
  margin-top: 10px;
`;
const Button = styled.button`
  max-width: 120px;
  padding: 10px 25px;
  border-radius: 10px;
  font-size: 14px;
  transition: all 0.4s linear;
  background-color: ${(props) =>
    props.theme === "dark"
      ? props.primary
        ? "#999 "
        : "transparent"
      : props.primary
      ? "#999"
      : "transparent"};
  color: ${(props) =>
    props.theme === "dark"
      ? props.primary
        ? "#000"
        : "#999"
      : props.primary
      ? "#000"
      : "#999"};
  border: ${(props) => props.secondary && "1px solid #999"};
  margin-bottom: 2rem;
  &:hover {
    color: ${(props) =>
      props.theme === "dark"
        ? props.primary
          ? "#000"
          : "#fff"
        : props.primary
        ? "#fff"
        : "#000"};
    background-color: ${(props) =>
      props.theme === "dark"
        ? props.primary
          ? "#fff"
          : "transparent"
        : props.primary
        ? "#000"
        : "#fff"};
    border: ${(props) =>
      props.theme === "dark"
        ? props.secondary && "1px solid #fff"
        : props.secondary && "1px solid #000"};
  }
`;

const SocialButtonLists = styled.div`
  font-size: 13px;
  z-index: 300;
`;

const SocialButtonItem = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 1rem;
  width: 250px;
`;
const GoogleButton = styled.button`
  background-color: red;
  padding: 10px 15px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const FacebookButton = styled.button`
  background-color: #3b5998;
  padding: 10px 15px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
const GoogleText = styled.span``;
const FacebookText = styled.span``;
