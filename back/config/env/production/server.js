module.exports = ({ env }) => ({
  url: env("PUBLIC_URL", "https://fast-springs-77208.herokuapp.com"),
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
});
