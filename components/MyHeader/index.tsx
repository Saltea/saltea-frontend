import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  HeaderNav,
  LogoContainer,
  RightButtonOne,
  RightButtonTwo
} from '../../style/myHeader';



export const MyHeader = ({ toggleMenu }) => {



  return (
    <div id="headerWrap">
        <HeaderNav>
          <i className="fa fa-bars fa-2x" onClick={toggleMenu}></i>
          <LogoContainer>
            
            <Link href="/">
              <a>
                <span>saltea.</span>
              </a>
            </Link>
          </LogoContainer>

          <RightButtonOne>
            <Link href='/login'><span>Sign In</span></Link>
          </RightButtonOne>

          <RightButtonTwo>
            <Link href='/contact'><span>Get Tea</span></Link>
          </RightButtonTwo>
        </HeaderNav>
      </div>
  );
}



