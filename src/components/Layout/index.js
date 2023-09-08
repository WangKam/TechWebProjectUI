import { styled } from "styled-components";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Top from "../Top";

const LayoutContainer = styled("div")``;
const Layout = (props) => {
  return (
    <div style={{}}>
      <Top />
      <Navbar isAuth={props.isAuth} />

      <LayoutContainer>{props.children}</LayoutContainer>
      <Footer />
    </div>
  );
};

export default Layout;
