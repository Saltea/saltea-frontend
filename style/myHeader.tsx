import styled from '@emotion/styled';

export const HeaderNav = styled.nav`
  height: 42px;
  padding: 5px;
  background: white;
  border-color: #e7e7e7;
  margin-bottom: 0;
  list-style: none;
  i {
    float: left;
    margin-left: 10px;
    cursor: pointer;
  }
`

export const HeaderContainer = styled.div`

`
export const LogoContainer = styled.div`
  display: block;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  /* &:hover {
    background-color: rgba(145, 106, 112, 0.88);
  } */
  a {
    display: block;
    background: black;
    text-align: center;
    transform: rotate(-1deg);
    position: absolute;
    left: 50%;
    color: white;
    padding: 8px 6px 8px 12px;
    margin-left: -53px;
    margin-top: 10px;
    z-index: 4;
    transition: all .3s linear;
    cursor: pointer;
    &:hover {
      background-color: rgba(145, 106, 112, 0.88);
    }
  }
  span {
    font-family: 'Inconsolata', sans-serif !important;
    font-size: 22px;
    letter-spacing: 3px;
    font-weight: bold;
  }
`
export const RightButtonOne = styled.div`
  float: right;
  display: inline-block;
  padding: 6px 12px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: normal;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
  background: rgba(189, 164, 168, 0.88);
  border: 0;
  font-family: 'Inconsolata', sans-serif !important;
  font-style: normal;
  font-family: 'Karla', sans-serif !important;
  font-weight: 700;
  color: black;
  border: 0;
  &:hover {
    background-color: rgb(189, 164, 168);
  }
  @media (max-width: 768px) {
    display: none;
  }
`

export const RightButtonTwo = styled.div`
  float: right;
  margin-right: 10px;
  display: inline-block;
  padding: 6px 12px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: normal;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
  border: 0;
  font-family: 'Inconsolata', sans-serif !important;
  font-style: normal;
  font-family: 'Karla', sans-serif !important;
  font-weight: 700;
  background: rgba(145, 106, 112, 0.88);
  color: white;
  border: 0;
  &:hover {
    background-color: rgb(189, 164, 168);
  }
  span {
    color: white;
  }
  @media (max-width: 768px) {
    display: none;
  }
`