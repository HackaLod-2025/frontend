import styles from './masonry-item.module.css';
import Image from "next/image";
import { SaveButton } from "@/components/save-button";

interface MasonryItemProps {
  index: number;
  width: number;
  data: {
    id: string;
    image: string;
    category: string;
  };
}

const MasonryItem = (props: MasonryItemProps) => {
  return <div className={styles.masonryItem}>
    <SaveButton className={styles.bookmark} />

    <Image src={props.data.image} alt="afbeelding" width={600} height={400} />

    <div className={styles.categoryTag}>
      <span>{props.data.category}</span>
    </div>
  </div>;
}

export { MasonryItem };
