import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slices/counter/counterSlice";
import logger from "redux-logger";

const customMiddleware = (store) => (next) => (action) => {
  if (action.type === "counter/increment") {
    console.log("Добавляем значение");
  }
  return next(action);
};

const customMiddlewareIncrementbyAmount = (store) => (next) => (action) => {
  if (action.type === "counter/incrementByAmount") {
    action.payload += 3;
  }
  return next(action);
};

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(customMiddleware, customMiddlewareIncrementbyAmount, logger),
});
