import styles from "./footer.module.css";
import Link from "next/link";

interface FooterMenuItem {
  title: string;
  href: string;
}

const footerItems: FooterMenuItem[]  = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Hoe werkt het?",
    href: "#",
  },
  {
    title: "FAQ",
    href: "#",
  },
  {
    title: "Inloggen",
    href: "/login",
  }
]

const Footer = ({ className }: { className?: string }) => {
  return (
    <footer className={`${styles.mainFooter} ${className ?? ""}`}>
      <div className={styles.mainFooterInner}>
        {footerItems.map((item: FooterMenuItem) => {
          return <Link href={item.href}>{item.title}</Link>;
        })}
      </div>
    </footer>
  );
};

export { Footer };
