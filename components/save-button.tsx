import { Button } from "@/components/ui/button";
import { Bookmark } from 'lucide-react';
import { useState } from "react";

const SaveButton = ({ className }: { className?: string }) => {
  const [saved, setSaved] = useState(false);

  const saveItem = () => {
    if (saved) {
      setSaved(false);
      return;
    }
    setSaved(true)
  }

  return <Button onClick={saveItem} className={className}><Bookmark fill={saved ? '#000' : 'transparent'} stroke={saved ? '#000' : '#fff'} /></Button>
}

export { SaveButton };
