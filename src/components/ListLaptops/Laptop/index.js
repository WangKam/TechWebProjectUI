import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { styled } from "styled-components";

const LaptopContainer = styled("div")`
margin-bottom: 20px;
margin-top: 0 !important;

padding: 10px;
border-radius: 5px;

// display: flex;
// justify-content: space-between;
display: grid;
grid-template-columns: 100px auto 100px 150px 100px;
gap: 10px;
padding: 10px;
box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1);
border: 2px solid rgb(190, 190, 190);

&:hover {
  background: #f8f8f8;
}
.grid-item {
  padding 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.img-box {
  height: 50px;
  width: 50px;
  overflow: hidden;

  img {
    height: 50px;
    width: 50px;
    object-fit: cover;
  }
}

.laptop-full_name {
  font-weight: 600;
  margin: 0;
  font-size: 14px;
}

.brand-text {
  color: #999;
  display: block;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: break-spaces;
  line-height: 25px;
}

.year-number {
  text-align: right;
  color: #999;
  display: block;
  padding: 0 5px;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: break-spaces;
  line-height: 25px;
  float: left;
  width: 100%;
}

.text-right {
  text-align: right;
}

.btn {
  padding: 5px;
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
  // color: var(--textColor);
  // visibility: hidden;
  // opacity: 0;
  font-size: 1.8rem;
}
`;

const Laptop = (props) => {
  const { data, onDelete, onEdit } = props;
  const thumb =
    "https://cdn.icon-icons.com/icons2/588/PNG/512/1458264592_laptop_computer_pc_device_notebook_netbook_internet_icon-icons.com_55334.png";
    return (
      <LaptopContainer container spacing={2} onClick={() => {}}>
        <div className="grid-item">
          <div className="img-box">
            <img src={thumb} alt={data.full_name} />
          </div>
        </div>
        <div className="grid-item">
          <h2 className="laptop-title">{data.full_name}</h2>
          <p className="brand-text">Brand: {data.brand}</p>
          <p className="brand-text">CPU: {data.cpu}</p>
          <p className="brand-text">Brand: {data.gpu}</p>
        </div>
        <div className="grid-item">
          <p className="year-number">{data.year} </p>
        </div>
        <div className="text-right" style={{
          display: 'flex',
          justifyContent: "space-around"
        }}>
          <button
            className="btn"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
            onClick={() => onDelete(data)}
          >
            <AiFillDelete />
          </button>
          <button
            className="btn"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
            onClick={() => onEdit(data)}
          >
            <AiFillEdit />
          </button>
        </div>
      </LaptopContainer>
    );
  };
export default Laptop;
