const axios = require("axios");
const fs = require("fs");

const isURL = (u) => /^https?:\/\//.test(u);

function extractURL(text) {
  if (typeof text !== "string") return null;
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const urls = text.match(urlRegex);
  return urls ? urls[0] : null;
}

async function fetchMediaData(url, platform) {
  try {
    const apiEndpoint = `https://api.hungdev.id.vn/media/downAIO`;
    const { data } = await axios.get(`${apiEndpoint}?url=${url}&apikey=VaNXdnsUaz`);
    if (data.success && data.data && data.data.medias) {
      return {
        title: data.data.title || "Không tiêu đề",
        author: data.data.author || "Không rõ",
        medias: data.data.medias,
      };
    } else {
      throw new Error("Không tìm thấy dữ liệu media từ URL.");
    }
  } catch (error) {
    console.error(`Lỗi khi tải media từ ${platform}:`, error.message);
    return null;
  }
}

async function streamMedia(url, type) {
  try {
    const response = await axios.get(url, { responseType: "arraybuffer" });
    const filePath = `${__dirname}/cache/${Date.now()}.${type}`;
    fs.writeFileSync(filePath, response.data);

    setTimeout(() => fs.unlinkSync(filePath), 60 * 1000); // Xóa file sau 1 phút

    return fs.createReadStream(filePath);
  } catch (error) {
    console.error(`Lỗi khi tải tệp từ URL:`, error.message);
    return null;
  }
}

exports.handleEvent = async function (o) {
  try {
    const { body, threadID, messageID } = o.event;
    const send = (msg) => o.api.sendMessage(msg, threadID, messageID);

    const url = extractURL(body);
    if (!url || !isURL(url)) return;

    const platformMap = {
      "facebook.com": "Facebook",
      "fb.watch": "Facebook",
      "instagram.com": "Instagram",
      "youtube.com": "YouTube",
      "tiktok.com": "TikTok",
      "douyin.com": "Douyin",
      "capcut.com": "CapCut",
      "threads.net": "Threads",
      "espn.com": "ESPN",
      "kuaishou.com": "Kuaishou",
      "pinterest.com": "Pinterest",
      "imdb.com": "IMDB",
      "imgur.com": "Imgur",
      "ifunny.co": "iFunny",
      "izlesene.com": "Izlesene",
      "reddit.com": "Reddit",
      "twitter.com": "Twitter",
      "x.com": "Twitter",
      "vimeo.com": "Vimeo",
      "snapchat.com": "Snapchat",
      "bilibili.com": "Bilibili",
      "dailymotion.com": "Dailymotion",
      "sharechat.com": "Sharechat",
      "linkedin.com": "LinkedIn",
      "tumblr.com": "Tumblr",
      "hipi.in": "Hipi",
      "telegram.org": "Telegram",
      "getstickerpack.com": "GetStickerPack",
      "bitchute.com": "Bitchute",
      "febspot.com": "Febspot",
      "9gag.com": "9GAG",
      "oke.ru": "Oke.ru",
      "rumble.com": "Rumble",
      "streamable.com": "Streamable",
      "ted.com": "TED",
      "sohu.com": "SohuTV",
      "xvideos.com": "XVideos",
      "xnxx.com": "XNXX",
      "xhslink.com": "Xiaohongshu",
      "weibo.com": "Weibo",
      "miaopai.com": "Miaopai",
      "meipai.com": "Meipai",
      "xiaoying.com": "Xiaoying",
      "nationalvideo.com": "National Video",
      "yingke.com": "Yingke",
      "soundcloud.com": "SoundCloud",
      "mixcloud.com": "Mixcloud",
      "spotify.com": "Spotify",
      "zingmp3.vn": "ZingMP3",
      "bandcamp.com": "Bandcamp",
    };

    const platform = Object.keys(platformMap).find((key) => url.includes(key));
    if (!platform) return send("Nền tảng này chưa được hỗ trợ!");

    const mediaData = await fetchMediaData(url, platformMap[platform]);
    if (!mediaData) return send("Không thể tải dữ liệu từ liên kết!");

    const { title, author, medias } = mediaData;
    const bodyMsg = `🔗 Nền tảng: ${platformMap[platform]}\n👤 Tác giả: ${author}\n📖 Tiêu đề: ${title}`;
    const attachments = [];

    for (const media of medias) {
      const stream = await streamMedia(media.url, media.extension);
      if (stream) attachments.push(stream);
    }

    if (attachments.length > 0) {
      send({ body: bodyMsg, attachment: attachments });
    } else {
      send("Không tìm thấy nội dung để tải xuống.");
    }
  } catch (error) {
    console.error("Lỗi xử lý sự kiện:", error.message);
  }
};

exports.run = () => {};

exports.config = {
  name: "autodownall",
  version: "3.0.0",
  hasPermssion: 0,
  credits: "KyPhan&Goo",
  description: "Tự động tải xuống video từ URL.",
  commandCategory: "Tiện ích",
  usages: [],
  cooldowns: 3,
};