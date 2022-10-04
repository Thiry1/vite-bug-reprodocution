import React from "react";
import ReactDOM from "react-dom";
import styles from "./style.module.scss";
const Component = () => <div className={styles.hi}>hi</div>;
ReactDOM.render(<Component />, document.getElementById("root"));
