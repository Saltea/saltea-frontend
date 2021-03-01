import styled from "@emotion/styled";

export const ContactContainer = styled.div`
  margin: 0 auto;
  font-family: 'Inconsolata', sans-serif !important;
  font-style: normal;
  @media (min-width: 1200px){
    width: 1170px;
  }
  @media (min-width: 992px) and (max-width: 1200px){
      width: 970px;
  }
  @media (min-width: 768px) and (max-width: 992px){
    width: 750px;
  }
`

export const InputContainer  = styled.div`
  width: 50%;
  padding: 0 15px;
  margin: 0 auto;
  line-height: 20px;
`

export const ContactTitle = styled.h2`
  text-align: center;
  margin-top: 50px;
  margin-bottom: 25px;
  font-size: 30px;
`

export const CommonInput = styled.input`
  padding: 10px;
  width: 80%;
  display: block;
  outline: none;
  border: 0px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 15px;
  line-height: 20px;
  font-family: 'Inconsolata', sans-serif !important;
`

export const Remark = styled.textarea`
  padding: 10px;
  width: 80%;
  display: block;
  outline: none;
  border: 0px;
  margin-right: auto;
  margin-left: auto;
  overflow: auto;
  margin-bottom: 15px;
  line-height: 20px;
  font-family: 'Inconsolata', sans-serif !important;
`

export const SendButton = styled.button`
  margin: 0 auto;
  background: #916a70;
  color: white;
  border: none;
  padding: 10px;
  width: 80%;
  display: block;
  outline: none;
  font-family: 'Inconsolata', sans-serif !important;
  line-height: 20px;
`