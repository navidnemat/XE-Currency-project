'use client';
import { useState } from 'react';
import styles from './XeDropdown.module.css'

export default function XeDropdown() {
  const [active, setActive] = useState<string | null>(null);

  const showMenu = (id: string) => setActive(id);
  const hideMenu = () => setActive(null);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div
          className={styles.item}
          onMouseEnter={() => showMenu('menu1')}
          onMouseLeave={hideMenu}
        >
          <span>صفحه ۱</span>
          {active === 'menu1' && (
            <div className={styles.dropdown}>
              <a href="#">تست ۱</a>
              <a href="#">تست ۱-۲</a>
            </div>
          )}
        </div>

        <div
          className={styles.item}
          onMouseEnter={() => showMenu('menu2')}
          onMouseLeave={hideMenu}
        >
          <span>صفحه ۲</span>
          {active === 'menu2' && (
            <div className={styles.dropdown}>
              <a href="#">تست ۲</a>
              <a href="#">تست ۲-۲</a>
            </div>
          )}
        </div>

        <div
          className={styles.item}
          onMouseEnter={() => showMenu('menu3')}
          onMouseLeave={hideMenu}
        >
          <span>صفحه ۳</span>
          {active === 'menu3' && (
            <div className={styles.dropdown}>
              <a href="#">تست ۳</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}