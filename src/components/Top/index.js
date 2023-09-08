import { styled } from "styled-components";

const TopContainer = styled("div")`

    width: 100%;
    background: #fff;
    padding: 10px;
    text-align: center;
    font-size: 18px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: rgb(43, 43, 43);
`;

const Top = () => {
  return (
    <TopContainer>
      <p>EXPLORE THE UNIVERSE</p>
    </TopContainer>
  );
};

export default Top;
