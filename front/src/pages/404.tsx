import React from 'react';
import { Helmet } from 'react-helmet';

import { Link } from 'gatsby';

import { Container } from '../components/Container';
import { Gainburua } from '../components/Gainburua';
import { GlobalStyles } from '../ui/GlobalStyles';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <Helmet
        title={`Ez dugu orria topatu | Laba`}
        htmlAttributes={{ lang: 'eu' }}
      />

      <GlobalStyles />
      <Gainburua />

      <Container>
        <main>
          <h1>Ez dugu orria topatu</h1>
          <br />
          <Link to="/">Hasierara bueltatu</Link>
        </main>
      </Container>
    </>
  );
};

export default NotFoundPage;
