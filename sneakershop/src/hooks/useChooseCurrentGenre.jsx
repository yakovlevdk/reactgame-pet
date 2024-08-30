import { useState } from "react";

export const useChooseCurrentGenre = () => {
  const [currentGenre, setCurrentGenre] = useState("top");

  const handleChangeCurrentGenre = (genre) => {
    setCurrentGenre(genre);
  };

  return { currentGenre, handleChangeCurrentGenre };
};
