import React from 'react';
import { Link } from 'gatsby';

const NotFoundPage: React.VFC = () => {
  return (
    <main>
      <h1>Ez dugu orria topatu</h1>
      <br />
      <Link to="/">Go home</Link>.
    </main>
  );
};

export default NotFoundPage;
