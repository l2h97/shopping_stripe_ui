import { useState } from "react";

export const useModel = () => {
  const [isOpen, setOpen] = useState(false);

  const toggle = () => {
    setOpen((prev) => !prev);
  };

  return [isOpen, toggle];
};
