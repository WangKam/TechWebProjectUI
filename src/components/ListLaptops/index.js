import { useState } from "react";
// import CustomPagination from "../CustomPagination";
import Laptop from "./Laptop";
import { styled } from "styled-components";
import { listLaptop } from "../../page/utils/data";
import Pagination from "../Pagination";
import CreateModal from "../modal/CreateModal";
import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../../container/Laptop/actions";
import DeleteModal from "../modal/DeleteModal";
import EditModal from "../modal/EditModal";

const ListLaptopContainer = styled("div")`
.block-header {
  color: #5783db;
  border-bottom: 1px solid #eee;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    padding: 5px 10px;
    background-color: var(--mainColor);
    border: none;
    border-radius: 6px;
    color: white;
    cursor: pointer;
  }
  .title {
    margin: 0;
    font-size: 24px;
    margin-bottom: 5px;
    line-height: 30px;
    text-transform: uppercase;
    font-weight: 500;
  }
}
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
}
.list-laptop {
  min-height: 500px;
}
`;

const ListLaptops = () => {
  const [openCreate, setOpenCreate] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const [currentLaptop, setCurrentLaptop] = useState({});

  const { laptops, pages } = useSelector((state) => state.laptopReducer);
  const dispatch = useDispatch();

  const changePageHandler = (value) => {
    dispatch(changePage(value));
  };

  const deleteLaptopHandler = (item) => {
    setCurrentLaptop(item);
    setOpenDelete(true);
  };

  const editLaptopHandler = (item) => {
    setCurrentLaptop(item);
    setOpenEdit(true);
  };

  return (
    <ListLaptopContainer>
      <div class="block-header">
        <h2 class="title">MANAGER</h2>
        <div>
          <button variant="text" onClick={() => setOpenCreate(true)}>
            Update
          </button>
        </div>
      </div>
      <div className="list-laptop">
        {laptops.map((item) => (
          <Laptop
            data={item}
            onDelete={deleteLaptopHandler}
            onEdit={editLaptopHandler}
          />
        ))}
      </div>

      <div className="pagination">
        <Pagination
          // className="pagination-bar"
          currentPage={pages.current}
          totalCount={pages.total * 5}
          pageSize={5}
          onPageChange={(page) => changePageHandler(page)}
        />
      </div>
      {openCreate && (
        <CreateModal isActive={openCreate} setOpen={setOpenCreate} />
      )}
      <DeleteModal
        isActive={openDelete}
        setOpen={(value) => {
          setOpenDelete(value);
          setCurrentLaptop(null);
        }}
        laptop={currentLaptop}
      />
      {currentLaptop && (
        <EditModal
          isActive={openEdit}
          setOpen={(value) => {
            setOpenEdit(value);
            setCurrentLaptop(null);
          }}
          laptop={currentLaptop}
        />
      )}
    </ListLaptopContainer>
  );
};

export default ListLaptops;
