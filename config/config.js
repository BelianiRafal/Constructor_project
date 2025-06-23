const config = {
  server_url: 'https://pictureserver.net/static/2024/',
  campaign_url: 'https://www.prologistics.info/news_email.php?id=',
  issue_url: 'https://www.prologistics.info/react/logs/issue_logs/',
  alarm_days: 7,
  confetti: true,
  replaceToBrs: true,
  emptyCell: (message) =>
    `<span style='font-size: 20px; background: #ff0000;'>${message || 'Cell is empty'}</span>`,
};

const TRANSLATIONS_SHEET_2025 = '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc';

export { config, TRANSLATIONS_SHEET_2025 };
