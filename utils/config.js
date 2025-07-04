export const config = {
  REDIRECT_URL: "http://localhost:5500",
  SCOPE: "https://www.googleapis.com/auth/drive",
  CLIENT_ID:
    "293627516788-cnogm6ddff7584galk3baas3hvqllqlp.apps.googleusercontent.com",
};

export const appjs_config = {
  server_url: "https://pictureserver.net/static/2024/",
  campaign_url: "https://www.prologistics.info/news_email.php?id=",
  issue_url: "https://www.prologistics.info/react/logs/issue_logs/",
  alarm_days: 7,
  confetti: true,
  replaceToBrs: true,
  emptyCell: (message) =>
    `<span style='font-size: 20px; background: #ff0000;'>${
      message || "Cell is empty"
    }</span>`,
};
