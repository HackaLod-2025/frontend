import { Masonry } from "masonic";
import { MasonryItem } from "@/components/masonry-item";

export interface MasonryItemProps {
  id: string;
  title: string;
  category: string;
  image: string;
}

const MasonryWrapper = ({ items }: { items: MasonryItemProps[] }) => {
  return <Masonry items={items} render={MasonryItem} />
};

export { MasonryWrapper };
