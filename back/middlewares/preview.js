module.exports = () => {
  return async (ctx, next) => {
    console.log("preview middleware");

    if (ctx.request.path.startsWith("/api/preview")) {
      const user = ctx.state.user;
      console.log("ctx", ctx.socket);
      // if (!user) {
      //   ctx.status = 403;
      //   ctx.body = "Forbidden";
      //   return;
      // }

      const path = ctx.request.path.replace("/api/preview", "");

      ctx.set(
        "Content-Security-Policy",
        "default-src 'self'; frame-src 'self' http://localhost:8000; style-src 'self' 'unsafe-inline'"
      );
      const body = `
        <!DOCTYPE html>
        <html>
          <head>
            <title>Preview</title>
          </head>
          <body style="margin: 0;">
            <iframe src="http://localhost:8000${path}" style="width: 100dvw; height: 100dvh; border: none; margin: 0;"></iframe>
          </body>
        </html>
      `;
      ctx.body = body;
    } else {
      await next();
    }
  };
};
