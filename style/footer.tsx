import styled from '@emotion/styled';

export const FooterContainer = styled.div`
  padding: 10px;
  width: 100%;
  background: #302325;
  color: white;
`

export const MyFooter = styled.div`
  padding: 20px;
  background: #302325;
  color: white;
  margin: 0 auto;
  overflow: hidden;
  @media (min-width: 992px)  {
    width: 50%;
  }
  @media (min-width: 768px) and (max-width: 992px){
    width: 66.666%;
  }
`

export const FooterItem = styled.div`
  float: left;
  a {
    color: white;
    &:hover {
      text-decoration: underline;
    }
  }
  hr {
    display: none;
  }
  @media (min-width: 768px) {
    width: 33.33333%;
  }
  @media (max-width: 768px) {
    width: 100%;
    hr {
      display: block;
    }
  }
`

export const FooterHr = styled.hr`
  border-color: #916a70;
  border-style: dotted;
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`

export const Reserved = styled.div`
  width: 100%;
  float: left;
  text-align: center;
  color: #ba4153;
`
