import styled from '@emotion/styled';


export const GlobalContainer = styled.div`
  width: 100%;
  height: 100%;
  &.showMenu {
    overflow: hidden;
  }
`

export const GlobalWrap = styled.div`
  transition: transform .5s;
  &.showMenu {
    transform: translateX(300px);
  }
`

export const GreyBg = styled.div`
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  opacity: 1;
  top: 0;
  left: 0;
  transition: opacity 0.3s ease 0s;
  display: none;
  &.showMenu {
    display: block;
  }
`