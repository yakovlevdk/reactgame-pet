export const filterPopularGames = (games) => {
  const popularGames = {};
  Object.keys(games).forEach((key) => {
    if (games[key].popular === "true") {
      popularGames[key] = games[key];
    }
  });
  return popularGames;
};
