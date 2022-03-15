import React, { memo, useCallback, useContext, useState } from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import { StoreContext } from "../../App";
import styled from "styled-components";

function Nav() {
  const [activeColor, setActiveColor] = useState("/weather-app");
  const url = window.location.href;
  const { store } = useContext(StoreContext);

  const handleActiveHomeIcon = useCallback(() => {
    setActiveColor("/weather-app");
  }, []);

  const handleActiveSearchIcon = useCallback(() => {
    setActiveColor("/weather-app/search");
  }, []);

  const handleActiveUserIcon = useCallback(() => {
    setActiveColor("/weather-app/user");
  }, []);

  return (
    <div>
      <MenuWrapper>
        <MenuLists>
          <MenuItem theme={store.theme}>
            <Link to="/weather-app">
              <HomeIcon
                onClick={handleActiveHomeIcon}
                sx={{
                  color:
                    store.theme === "dark"
                      ? url.includes("/") &&
                        !url.includes("/search") &&
                        !url.includes("/user") &&
                        "#fff"
                      : url.includes("/") &&
                        !url.includes("/search") &&
                        !url.includes("/user") &&
                        "#000",
                }}
              />
            </Link>
          </MenuItem>
          <MenuItem theme={store.theme}>
            <Link to="/weather-app/search">
              <SearchIcon
                onClick={handleActiveSearchIcon}
                sx={{
                  color:
                    store.theme === "dark"
                      ? url.includes("/search") && "#fff"
                      : url.includes("/search") && "#000",
                }}
              />
            </Link>
          </MenuItem>
          <MenuItem theme={store.theme}>
            <Link to="/weather-app/user">
              <PersonIcon
                sx={{
                  color:
                    store.theme === "dark"
                      ? url.includes("/user") && "#fff"
                      : url.includes("/user") && "#000",
                }}
                onClick={handleActiveUserIcon}
              />
            </Link>
          </MenuItem>
        </MenuLists>
      </MenuWrapper>
    </div>
  );
}

export default memo(Nav);

const MenuWrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px 10px;
  z-index: 1000;
`;

const MenuLists = styled.div`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  padding: 30px;
  border-radius: 50px;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #7f7f81;
  transition: all 0.2s linear;
  cursor: pointer;
  &:hover {
    color: ${(props) => (props.theme === "dark" ? "#fff" : "#000")};
  }

  .MuiSvgIcon-root {
    font-size: 28px;
  }
`;
