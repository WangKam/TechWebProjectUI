import { styled } from "styled-components";

const FooterContainer = styled("div")`
  
  padding: 20px 0;
  width: 100%;
  height: 100px;
  p {
    text-align: center;
  }
  background: #ccc;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>©Contact for further information</p>
    </FooterContainer>
  );
};

export default Footer;
