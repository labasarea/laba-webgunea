import React from 'react';

import { Link } from 'gatsby';

import { Container } from '../components/Container';
import { Hero } from '../components/Hero';

export const NotFound: React.FC = () => (
  <>
    <Hero />

    <Container>
      <main>
        <h1>404: Ez dugu bilatzen duzun orria topatu</h1>
        <br />
        <Link to="/">Hasierara bueltatu</Link>
      </main>
    </Container>
  </>
);
