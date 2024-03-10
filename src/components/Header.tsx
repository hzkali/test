import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

export const Header: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div>
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <NavLink className={styles.logo} to="/">
            <img alt="harplabs logo" src="https://harplabspay.xyz/wp-content/uploads/2024/03/Black_And_White_Aesthetic_Minimalist_Modern_Simple_Typography_Coconut_Cosmetics_Logo-removebg-preview-e1709683471880.png" />
            <span>PeomCasino</span>
          </NavLink>
        </div>
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <div className={styles.externalLinks}>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};
