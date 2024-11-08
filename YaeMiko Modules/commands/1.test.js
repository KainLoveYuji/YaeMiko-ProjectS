require('dotenv').config();
const axios = require('axios');

module.exports.config = {
  name: "info",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "YourName",
  description: "Get information about anime and games",
  commandCategory: "Information",
  usages: "info [anime/game] [name]",
  cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
  const queryType = args[0];  // "anime" hoặc "game"
  const query = args.slice(1).join(" ");  // Tên anime hoặc game

  if (!queryType || !query) {
    return api.sendMessage("Vui lòng sử dụng cú pháp: !info [anime/game] [name]", event.threadID);
  }

  if (queryType.toLowerCase() === "anime") {
    // Gọi API MyAnimeList (hoặc Jikan) để lấy thông tin anime
    const animeInfo = await getAnimeInfo(query);
    if (animeInfo) {
      api.sendMessage(animeInfo, event.threadID);
    } else {
      api.sendMessage("Không tìm thấy thông tin anime.", event.threadID);
    }
  } else if (queryType.toLowerCase() === "game") {
    // Gọi API RAWG để lấy thông tin game
    const gameInfo = await getGameInfo(query);
    if (gameInfo) {
      api.sendMessage(gameInfo, event.threadID);
    } else {
      api.sendMessage("Không tìm thấy thông tin game.", event.threadID);
    }
  } else {
    api.sendMessage("Vui lòng chỉ định loại thông tin là 'anime' hoặc 'game'.", event.threadID);
  }
};

async function getAnimeInfo(query) {
  try {
    const response = await axios.get(`https://api.jikan.moe/v4/anime?q=${encodeURIComponent(query)}&limit=1`);
    const anime = response.data.data[0];
    return `Thông tin Anime:\n\nTên: ${anime.title}\nTóm tắt: ${anime.synopsis}\nĐiểm: ${anime.score}`;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function getGameInfo(query) {
  try {
    const response = await axios.get(`https://api.rawg.io/api/games?key=${process.env.RAWG_API_KEY}&search=${encodeURIComponent(query)}`);
    const game = response.data.results[0];
    return `Thông tin Game:\n\nTên: ${game.name}\nNgày phát hành: ${game.released}\nĐiểm: ${game.rating}`;
  } catch (error) {
    console.error(error);
    return null;
  }
}
