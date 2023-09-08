import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import ListLaptops from "../../components/ListLaptops";
import { getLaptop } from "../../container/Laptop/actions";

const LaptopsContainer = styled("div")`
  // display: flex;
  margin-top: 20px;
  padding: 0 40px;
  min-height: 750px;
`;

const LaptopsManagement = () => {
  const dispatch = useDispatch();
  const { pages } = useSelector((state) => state.laptopReducer);

  useEffect(() => {
    dispatch(getLaptop(pages?.current));
  }, [pages?.current]);

  return
  <LaptopsContainer>
    <ListLaptops />
  </LaptopsContainer>;
};



export default LaptopsManagement;
