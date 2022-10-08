import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <p>Created by Jayden, © 2022</p>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  background-color: #1e1e1e;
  color: #fff;
  padding: 0.1rem;
  text-align: center;
  font-size: 0.8rem;
  font-weight: 600;
  margin-top: 2rem;
`

export default Footer;