module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "7ac8d91e1521dcac33d2a5105d9f828f"),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT", "4444a34644486306e97051f610dfdae4"),
  },
  transfer: {
    token: {
      salt: env("TRANSFER_SALT", "NDDFL8BZi0QK5oYDbRgNow=="),
    },
  },
  url: "/kudeatu",
});
