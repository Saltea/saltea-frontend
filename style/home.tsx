import styled from '@emotion/styled'


export const HeroContainer = styled.div`
  /* padding: 0 60px; */
  background: white;
  /* height: 90vh;
  overflow: hidden; */
  position: relative;
`
export const SwiperLeftIcon = styled.i`
  opacity: 0.33;
  font-size: 42px;
  position: absolute;
  top: 50%;
  left: 0;
  padding: 0px 12px;
  z-index: 3;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`
export const SwiperRightIcon = styled.i`
  opacity: 0.33;
  font-size: 42px;
  position: absolute;
  top: 50%;
  right: 0;
  padding: 0px 12px;
  z-index: 3;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`

export const VideoCover = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  box-shadow: inset 0 0 40px rgb(0 0 0 / 12%);
  background: rgba(255, 255, 255, 0.77);
`

export const SlideContainer = styled.div`
  /* width: 70%;
  height: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (orientation: portrait){
    width: 100%;
  } */
  width: 100%;
  height: 100%;
`;

export const SlideItemContainer = styled.div`
  /* width: 70%;
  height: 100%; */
  margin: 0 auto;
  position: relative;
  padding: 0 60px;
  /* z-index: 2; */
  /* @media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (orientation: portrait){
    width: 100%;
  } */
`

export const SlideItem = styled.div`
  background: white;
  box-shadow: 0 0 15px rgb(0 0 0 / 33%);
  margin: 40px auto 0 auto;
  overflow: hidden;
  width: 66.6666%;
  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (orientation: portrait){
    width: 100%;
  }
`
export const SlideItemTwo = styled.div`
  width: 50%;
  background: white;
  box-shadow: 0 0 15px rgb(0 0 0 / 33%);
  margin: 40px auto 0 auto;
  overflow: hidden;
  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (orientation: portrait){
    width: 100%;
  }
`

export const SlideImageContainer = styled.div`
  width: 50%;
  float: left;
  @media only screen and (max-width: 767px) {
    width: 100%;
  }
`

export const SlideImage = styled.img`
  width: 100%;
  height: auto;
`
export const SlideInfo = styled.div`
  width: 50%;
  padding: 0 15px;
  float: right;
  @media only screen and (max-width: 767px) {
    width: 100%;
  }
`


export const SlideTitle = styled.h1`
  letter-spacing: 0px;
  line-height: 0.91em;
  text-shadow: 1px 1px 0 rgb(145 106 112 / 25%);
  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (orientation: portrait){
    
  }
`

export const SlideDesc = styled.p`
  font-size: 18px;
  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (orientation: portrait){
    line-height: 1em;
    letter-spacing: 0px;
    font-size: 13px;
  }
`


export const BtnDefault = styled.div`
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
  color: black;
  font-family: 'Inconsolata', sans-serif !important;
  font-style: normal;
  font-family: 'Karla', sans-serif !important;
  border: 0;
  margin-top: 40px;
  margin-bottom: 10px;
  &:hover {
    background-color: rgb(189, 164, 168);
  }
  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (orientation: portrait){
      margin: 10px 0;
  }
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px)
  {
      display: block;
      float: none !important;
  }
`

export const BtnWhite = styled.div`
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
  font-family: 'Inconsolata', sans-serif !important;
  font-style: normal;
  font-family: 'Karla', sans-serif !important;
  border-radius: 4px;
  background: rgba(145, 106, 112, 0.88);
  color: white;
  border: 0;
  float: right;
  margin-top: 40px;
  margin-bottom: 10px;
  &:hover {
    background-color: rgb(189, 164, 168);
  }
  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (orientation: portrait){
      margin: 10px 0;
  }
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px)
  {
      display: block;
      float: none !important;
  }
`

export const ContentContainer = styled.div`
  position: relative;
  z-index: 3;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 1200px) {
    width: 1170px;
  }
  @media (min-width: 992px) and (max-width: 1200px){
    width: 970px;
  }
`

export const FeaturedFlavor = styled.div`
  margin: 40px auto;
  padding: 20px 0 40px 0;
  background: white;
  box-shadow: 0px 0px 15px rgb(0 0 0 / 12%);
  float: left;
  @media (min-width: 768px) {
    width: 100%;
  }
`

export const FlavorContainer = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`

export const FlavorImg = styled.div`
  float: left;
  padding-right: 15px;
  padding-left: 15px;
  img {
    width: 100%;
    height: auto;
  }
  @media (min-width: 768px) {
    width: 33.33333333%;
  }
  @media only screen and (max-width: 767px) {
    margin-top: 0;
  }
`

export const ContentBlock = styled.div`
  position: relative;
  z-index: 1;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 1200px) {
    width: 1170px;
  }
  @media (min-width: 992px) and (max-width: 1200px){
    width: 970px;
  }
`

export const ContentBlockContainer = styled.div`
  margin: 40px auto;
  background: white;
  box-shadow: 0px 0px 15px rgb(0 0 0 / 12%);
  position: relative;
  z-index: 1;
  padding-right: 15px;
  /* padding-left: 15px; */
  overflow: hidden;
`

export const ContentImg = styled.img`
  width: 100%;
  height: auto;
  float: left;
  @media (min-width: 768px) {
    width: 50%;
  }
`

export const ContentDetail = styled.div`
  float: right;
  padding: 0 15px;
  @media (min-width: 768px){
    width: 50%;
  }
`
export const RedP  = styled.p`
  color: #ba4153;
`



