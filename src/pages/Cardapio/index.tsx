import React from "react";
import styles from "./Cardapio.module.scss";
import {ReactComponent as Logo} from 'assets/logo.svg';

export default function Cardapio() {
  return (
    <main>
      <nav className={styles.menu}> 
      {/* <img src={logo} alt="logo do aluroni" /> */}
      <Logo />
      </nav>
    </main>
  )
}