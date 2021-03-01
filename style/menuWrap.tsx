import styled from '@emotion/styled'

export const MyMenuWrap = styled.div`
  text-align: center;
  width: 300px;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: black;
  z-index: 6;
  transform: translateX(-300px);
  transition: transform 0.5s;
  &.showMenu {
    transform: translateX(0px);
  }
`

export const  MenuHeader = styled.div`
  background: #916a70;
  height: 42px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 8px;
  padding-right: 15px;
  i {
    cursor: pointer;
  }
`

export const MenuContainer = styled.div`
  padding: 2.4em 1.5em 0.8em 1.5em;
  /* padding: 0.8em; */
  font-size: 1em;
  line-height: 2em;
`

export const MenuMain = styled.div`
  font-style: normal;
  font-family: 'Karla', sans-serif !important;
  font-weight: 700;
  a {
    color: rgba(230, 221, 222, 0.66);
    &:hover {
      text-decoration: underline;
      color:rgba(230, 221, 222, 1);
    }
  }
`

export const MenuHr = styled.hr`
  border-color: #916a70;
  border-style: dotted;
`


export const MenuSub = styled.div`
  font-style: normal;
  font-family: 'Karla', sans-serif !important;
  font-weight: 700;
  a {
    color: rgba(230, 221, 222, 0.66);
    &:hover {
      text-decoration: underline;
      color:rgba(230, 221, 222, 1);
    }
  }
`

export const MenuFollow = styled.div`
  margin-top: 100px;
  li {
    display: inline-block;
    padding-right: 5px;
    padding-left: 5px;
  }
  p {
    color: #b8b7ad;
    font-weight: 700;
    font-size: 1em;
  }
  i {
    color: rgba(230, 221, 222, 0.66);
    &:hover {
      color:rgba(230, 221, 222, 1);
    }
  }
`




