module.exports = ({ env }) => ({
  url: env("MY_HEROKU_URL"),
  host: env("MY_HEROKU_URL"),
  port: env.int("PORT"),
});
