import React from "react";
import styles from "./Contianer.module.css";

const Container = ({ children }) => {
  return <div className="my-12 mb-10 start:my-[100px]  start:mx-[100px]">{children}</div>;
};

export default Container;
