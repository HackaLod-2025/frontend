import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from './account-navigation.module.css';

interface AccountMenuItem {
  title: string;
  href: string;
  isActive?: boolean;
}

const AccountNavigation = () => {
  const pathname = usePathname();
  const items = [
    {
      title: "Mijn voorkeuren",
      href: "/account/preferences",
    },
    {
      title: "Mijn paspoort",
      href: "/account/termen",
    },
  ];

  return (
    <div className={styles.accountNavigationWrapper}>
      <nav className={styles.accountNavigation}>
        {items.map((item: AccountMenuItem) => {
          const isActive = pathname === item.href;
          return (
            <Link
              className={`${styles.accountNavigationItem} ${isActive ? styles.active : ""}`}
              href={item.href}
              key={item.title}
            >
              <span className={styles.accountNavigationText}>{item.title}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export { AccountNavigation };
