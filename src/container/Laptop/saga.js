// import { getExampleApi } from "@/api/example";
import { takeLatest, put, call } from "redux-saga/effects";
import { LAPTOP } from "./constants";
import { getLaptop, getLaptopSuccess } from "./actions";
import { createLaptopApi, deleteLaptopApi, getListLaptopApi, updateLaptopApi } from "../../api/Laptop";

function* handlerGetListLaptops({ page }) {
  try {
    const res = yield call(getListLaptopApi, page);
    yield put(getLaptopSuccess(res));
  } catch (err) {
    console.log("err handlerGetListLaptops", err);
  }
}

function* handlerCreateLaptop({ data }) {
  try {
    yield call(createLaptopApi, data);
    const res2 = yield call(getListLaptopApi);
    yield put(getLaptopSuccess(res2));
  } catch (err) {
    console.log("err handlerCreateLaptop", err);
  }
}

function* handlerDeleteLaptop({ id }) {
  try {
    yield call(deleteLaptopApi, id);
    const res2 = yield call(getListLaptopApi);
    yield put(getLaptopSuccess(res2));
  } catch (err) {
    console.log("err handlerDeleteLaptop", err);
  }
}

function* handlerUpdateLaptop({ id, data }) {
  try {
    yield call(updateLaptopApi, id, data);
    const res2 = yield call(getListLaptopApi);
    yield put(getLaptopSuccess(res2));
  } catch (err) {
    console.log("err handlerUpdateLaptop", err);
  }
}

function* root() {
  yield takeLatest(LAPTOP.LAPTOP_GET_LIST, handlerGetListLaptops);
  yield takeLatest(LAPTOP.LAPTOP_CREATE, handlerCreateLaptop);
  yield takeLatest(LAPTOP.DELETE_LAPTOP, handlerDeleteLaptop);
  yield takeLatest(LAPTOP.EDIT_LAPTOP, handlerUpdateLaptop);

}

export default root;
