import { Masonry } from "masonic";
import { MasonryItem } from "@/components/masonry-item";

export interface MasonryItemProps {
  id: string;
  title: string;
  category: string;
  image: string;
}

const MasonryWrapper = ({ items, className }: { items: MasonryItemProps[], className?: string }) => {
  return <Masonry  items={items} render={MasonryItem} columnGutter={8} overscanBy={5} className={className} />
};

export { MasonryWrapper };
