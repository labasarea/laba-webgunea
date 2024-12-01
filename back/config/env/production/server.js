module.exports = ({ env }) => ({
  url: env("PUBLIC_URL", "https://vervet-big-dassie.ngrok-free.app"),
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
});
