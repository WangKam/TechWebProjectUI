import { LAPTOP } from "./constants";

const initialState = {
  laptops: [],
  pages: {
    current: 1,
    prev: 0,
    hasPrev: false,
    next: 0,
    hasNext: false,
    total: 1,
  },
};

export default function app(state = initialState, action) {
  switch (action.type) {
    case LAPTOP.LAPTOP_GET_LIST_SUCCESS:
      return {
        ...state,
        laptops: action.data.data,
        pages: action?.data?.pages
      };
    case LAPTOP.CHANGE_PAGE: {
      return {
        ...state,
        pages: {
          ...state?.pages,
          current: action?.page,
        }
      }
    }
    default:
      return state;
  }
}
