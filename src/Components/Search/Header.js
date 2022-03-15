import React, { useCallback, useContext } from "react";
import SeachIcon from "@mui/icons-material/Search";
import styled from "styled-components";
import { StoreContext } from "../../App";
import { setSearchFilter } from "../../store/actions";

function Header({ theme, inputRef }) {
  const { dispatch } = useContext(StoreContext);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(setSearchFilter(e.target[0].value));
    },
    [dispatch]
  );
  return (
    <HeaderWrapper>
      <WrapperInput>
        <Form onSubmit={handleSubmit}>
          <SeachIcon
            sx={{
              position: "absolute",
              top: "50%",
              left: "0",
              transform: "translateY(-50%)",
              color: "#000",
              zIndex: "10",
              marginLeft: "5px",
            }}
          />
          <Input
            ref={inputRef}
            theme={theme}
            type="text"
            placeholder="Search city > Enter"
          />
          <ButtonSubmit />
        </Form>
      </WrapperInput>
    </HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper = styled.div`
  padding: 2rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 10000;
`;
const WrapperInput = styled.div`
  background-color: ${(props) => (props.theme === "dark" ? "#fff" : " #ccc")};
  padding: 5px;
  border-radius: 10px;
  position: relative;
`;

const Form = styled.form``;

const Input = styled.input`
  width: 200px;
  height: 30px;
  color: #000;
  border: none;
  outline: none;
  background-color: inherit;
  margin-left: 30px;
  font-size: 13px;
`;

const ButtonSubmit = styled.button`
  display: none;
`;
