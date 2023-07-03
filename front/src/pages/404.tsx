import React from 'react';
import { Link } from 'gatsby';
import { GlobalStyles } from '../ui/GlobalStyles';
import { Gainburua } from '../components/Gainburua';
import { Container } from '../components/Container';
import { Helmet } from 'react-helmet';

const NotFoundPage: React.VFC = () => {
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
