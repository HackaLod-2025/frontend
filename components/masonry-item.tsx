import styles from './masonry-item.module.css';
import Image from "next/image";

interface MasonryItemProps {
  index: number;
  width: number;
  data: {
    id: string;
    image: string;
  };
}

const MasonryItem = (props: MasonryItemProps) => {
  return <div className={styles.masonryItem}>
    <Image src={props.data.image} alt="afbeelding" width={600} height={400} />
  </div>;
}

export { MasonryItem };
