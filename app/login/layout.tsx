import Image from "next/image";
import styles from './layout.module.css';

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {children}

      <Image src="/erfgoed-paspoort.svg" alt="Erfgoed Paspoort" width={210} height={60} className={styles.logo} />
    </div>
  );
}
