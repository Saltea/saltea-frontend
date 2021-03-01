import React, { useState } from "react";
import { MenuWrap } from '../MenuWrap';
import { MyHeader, Footer } from "../index";
import {  
  GlobalContainer,
  GlobalWrap,
  GreyBg
} from '../../style/layout';

export const Layout = ({ children }) => {
  const [showMenu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!showMenu);
  }

  const hideMenu = () => {
    setMenu(false);
  }

  return (
    <GlobalContainer className={showMenu ? 'showMenu' : ''}>
      <MenuWrap 
        showMenu={showMenu}
        hideMenu={hideMenu}
      />
      <GreyBg className={showMenu ? 'showMenu' : ''} onClick={hideMenu}/>
      <GlobalWrap className={showMenu ? 'showMenu' : ''}>
        <MyHeader 
          toggleMenu={toggleMenu}
        />
        {children}
        {/* <Footer /> */}
      </GlobalWrap>
  </GlobalContainer>
  );
};
