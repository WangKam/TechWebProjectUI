import { LAPTOP } from "./constants";

export const getLaptop = (page = 1) => ({
  type: LAPTOP.LAPTOP_GET_LIST,
  page,
});


export const getLaptopSuccess = (data) => ({
  type: LAPTOP.LAPTOP_GET_LIST_SUCCESS,
  data,
});

export const createLaptop = (data) => ({
  type: LAPTOP.LAPTOP_CREATE,
  data,
})

export const changePage = (page) => ({
  type: LAPTOP.CHANGE_PAGE,
  page,
})

export const deleteLaptop = (id) => ({
  type: LAPTOP.DELETE_LAPTOP,
  id,
})

export const updateLaptop = (id, data) => ({
  type: LAPTOP.EDIT_LAPTOP,
  id,
  data
})