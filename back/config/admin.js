module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "7ac8d91e1521dcac33d2a5105d9f828f"),
  },
  url: "/kudeatu",
});
