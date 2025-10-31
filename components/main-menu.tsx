import Link from "next/link";
import styles from './main-menu.module.css';

interface MainMenuItem {
  title: string;
  href: string;
}

interface MainMenuProps {
  items: MainMenuItem[];
}

const MainMenu = ({ items }: MainMenuProps) => {
  return (
    <nav className={styles.mainMenu}>
      {items.map((item: MainMenuItem) => (
        <Link className={styles.mainMenuItem} href={item.href} key={item.title}>
          <span className={styles.mainMenuItemText}>{item.title}</span>
        </Link>
      ))}
    </nav>
  );
}

export { MainMenu };
