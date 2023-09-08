import { useState } from "react";
import { useDispatch } from "react-redux";
import { styled } from "styled-components";
import { createLaptop } from "../../container/Laptop/actions";

const ModalContainer = styled("div")`
  /* Full-width input fields */
  input[type="text"],
  input[type="number"] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }

  .invalid {
    background-color: ivory;
    border: none;
    outline: 2px solid red;
    border-radius: 5px;
  }

  /* Set a style for all buttons */
  button {
    background-color: #04aa6d;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
  }

  button:hover {
    opacity: 0.8;
  }

  /* Extra styles for the cancel button */
  .cancelbtn {
    width: auto;
    padding: 10px 18px;
    background-color: #f44336;
  }

  /* Center the image and position the close button */
  .imgcontainer {
    text-align: center;
    margin: 24px 0 12px 0;
    position: relative;
  }

  img.avatar {
    width: 40%;
    border-radius: 50%;
  }

  .container {
    padding: 16px;
  }

  span.psw {
    float: right;
    padding-top: 16px;
  }

  /* The Modal (background) */
  .modal {
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
    padding-top: 60px;
  }

  /* Modal Content/Box */
  .modal-content {
    background-color: #fefefe;
    margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */
    border: 1px solid #888;
    width: 80%; /* Could be more or less, depending on screen size */
  }

  /* The Close Button (x) */
  .close {
    position: absolute;
    right: 25px;
    top: 0;
    color: #000;
    font-size: 35px;
    font-weight: bold;
  }

  .close:hover,
  .close:focus {
    color: red;
    cursor: pointer;
  }

  /* Add Zoom Animation */
  .animate {
    -webkit-animation: animatezoom 0.6s;
    animation: animatezoom 0.6s;
  }

  @-webkit-keyframes animatezoom {
    from {
      -webkit-transform: scale(0);
    }
    to {
      -webkit-transform: scale(1);
    }
  }

  @keyframes animatezoom {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }

  /* Change styles for span and cancel button on extra small screens */
  @media screen and (max-width: 300px) {
    span.psw {
      display: block;
      float: none;
    }
    .cancelbtn {
      width: 100%;
    }
  }
`;

const CreateModal = ({ isOpen, setOpen, isActive }) => {
  const dispatch = useDispatch();

  const [laptopData, setLaptopData] = useState({
    name: {
      value: "",
      isError: false,
    },
    full_name: {
      value: "",
      isError: false,
    },
    brand: {
      value: "",
      isError: false,
    },
    cpu: {
      value: "",
      isError: false,
    },
    gpu: {
      value: "",
      isError: false,
    },
    year: {
      value: "",
      isError: false,
    },
    color: {
      value: "",
      isError: false,
    },
  });

  const handleClose = (event) => {
    if (event.target === event.currentTarget) {
      setOpen(false);
    }
  };

  const handlerSubmit = (value) => {
    const data = {
      name: laptopData.name.value,
      full_name: laptopData.full_name.value,
      brand: laptopData.brand.value,
      cpu: laptopData.cpu.value,
      gpu: laptopData.gpu.value,
      year: laptopData.year.value,
      color: laptopData.color.value,
    };
    if (data.full_name !== "" && data.brand !== "" && data.cpu && data.gpu && data.year && data.color) {
      dispatch(createLaptop(data));
      setOpen(false);
    }
  };


  const onChangeInputHandler = (event) => {
    const { name, value } = event.target;
    const newLaptopData = {
      ...laptopData,
      [name]: {
        ...laptopData[name],
        value: value,
      },
    };
    setLaptopData(newLaptopData);
  };
  const checkLaptopDataValid = (event) => {
    const { name, value } = event.target;

    if (value === "") {
      const newLaptopData = {
        ...laptopData,
        [name]: {
          ...laptopData[name],
          isError: true,
        },
      };
      setLaptopData(newLaptopData);
    }
  };

  const onFocusHandler = (event) => {
    const { name } = event.target;
    const newLaptopData = {
      ...laptopData,
      [name]: {
        ...laptopData[name],
        isError: false,
      },
    };
    setLaptopData(newLaptopData);
  };

  return (
    <ModalContainer>
      <div
        id="id01"
        class="modal"
        style={{ display: isActive ? "block" : "none" }}
        onClick={handleClose}
      >
        <div class="modal-content animate">
          <div class="container">
          <label for="title">
              <b>Name (no space)</b>
            </label>
            <input
              className={laptopData.name.isError && "invalid"}
              type="text"
              placeholder="Input Name"
              name="name"
              required
              value={laptopData.name.value}
              error={false}
              onChange={onChangeInputHandler}
              onBlur={checkLaptopDataValid}
              onFocus={onFocusHandler}
            />
            <label for="title">
              <b>Full Name</b>
            </label>
            <input
              className={laptopData.full_name.isError && "invalid"}
              type="text"
              placeholder="Input Full Name"
              name="full_name"
              required
              value={laptopData.full_name.value}
              error={false}
              onChange={onChangeInputHandler}
              onBlur={checkLaptopDataValid}
              onFocus={onFocusHandler}
            />
            <label for="Brand">
              <b>Brand</b>
            </label>
            <input
              className={laptopData.brand.isError && "invalid"}
              type="text"
              placeholder="Input Brand"
              name="brand"
              required
              onChange={onChangeInputHandler}
              onBlur={checkLaptopDataValid}
              onFocus={onFocusHandler}
            />
            <label for="cpu">
              <b>Cpu</b>
            </label>
            <input
              className={laptopData.cpu.isError && "invalid"}
              type="text"
              placeholder="Input Cpu"
              name="cpu"
              onChange={onChangeInputHandler}
              onBlur={checkLaptopDataValid}
              onFocus={onFocusHandler}
            />
            <label for="gpu">
              <b>Gpu</b>
            </label>
            <input
              className={laptopData.gpu.isError && "invalid"}
              type="text"
              placeholder="Input Gpu"
              name="gpu"
              onChange={onChangeInputHandler}
              onBlur={checkLaptopDataValid}
              onFocus={onFocusHandler}
            />
            <label for="year">
              <b>Year</b>
            </label>
            <input
              className={laptopData.year.isError && "invalid"}
              placeholder="Input Year"
              name="year"
              type="number"
              onChange={onChangeInputHandler}
              onBlur={checkLaptopDataValid}
              onFocus={onFocusHandler}
            />

            <label for="color">
              <b>Color</b>
            </label>
            <input
              className={laptopData.color.isError && "invalid"}
              type="text"
              placeholder="Input Color"
              name="color"
              onChange={onChangeInputHandler}
              onBlur={checkLaptopDataValid}
              onFocus={onFocusHandler}
            />
            <button onClick={handlerSubmit}>Create new one</button>
          </div>
        </div>
      </div>
    </ModalContainer>
  );
};

export default CreateModal;
