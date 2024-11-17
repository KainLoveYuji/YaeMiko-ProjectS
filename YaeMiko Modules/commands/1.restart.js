const { exec } = require('child_process');
const schedule = require('node-schedule');

module.exports.config = {
  name: "restart",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "YourName",
  description: "Restart bot ngay lập tức hoặc tự động vào lúc 12h đêm",
  commandCategory: "System",
  cooldowns: 5
};

// Lệnh restart ngay lập tức
module.exports.run = async ({ event, api }) => {
  const { threadID } = event;

  api.sendMessage("Bot sẽ được khởi động lại ngay bây giờ!", threadID, () => {
    exec('node index.js', (err, stdout, stderr) => { // Bạn có thể đổi thành 'npm start' nếu cần
      if (err) {
        console.error(`Lỗi khi restart bot: ${err}`);
        return api.sendMessage(`Có lỗi xảy ra: ${err.message}`, threadID);
      }
      console.log(`Restart output: ${stdout}`);
      console.error(`Restart error: ${stderr}`);
    });
    process.exit(1); // Thoát tiến trình hiện tại
  });
};

// Tự động restart lúc 12h đêm
schedule.scheduleJob('0 0 * * *', () => {
  console.log("Bot đang tự động restart lúc 12h đêm...");
  exec('node index.js', (err, stdout, stderr) => { // Bạn có thể đổi thành 'npm start' nếu cần
    if (err) {
      console.error(`Lỗi khi tự động restart bot: ${err}`);
      return;
    }
    console.log(`Restart output: ${stdout}`);
    console.error(`Restart error: ${stderr}`);
    process.exit(1); // Thoát tiến trình hiện tại
  });
});
