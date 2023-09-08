import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import ListLaptops from "../../components/ListLaptops";
import { getLaptop } from "../../container/Laptop/actions";

const Container = styled("div")`
  margin-top: 20px;
  padding: 0 40px;
  min-height: 750px;
`;


const HomePage = () => {
  const dispatch = useDispatch();
  const { pages } = useSelector((state) => state.laptopReducer);

  useEffect(() => {
    dispatch(getLaptop(pages?.current));
  }, [pages?.current]);

  return <Container>
    <ListLaptops />
  </Container>;
};


export default HomePage;
