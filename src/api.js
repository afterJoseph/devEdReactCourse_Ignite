// Base URL
const base_url = "https://api.rawg.io/api/";

// Getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  return month < 10 ? `0${month}` : month;
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  return day < 10 ? `0${day}` : day;
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

getCurrentMonth();

// GAMES
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const new_games = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

// GAMES URLS
export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${new_games}`;
// GAME DETAILS
export const gameDetailsURL = (game_id) => `${base_url}games/${game_id}`;
export const gameScreenshotURL = (game_id) =>
  `${base_url}games/${game_id}/screenshots`;
// SEARCHED GAME
export const searchGameURL = (game_name) =>
  `${base_url}games?search=${game_name}&page_size=9`;
