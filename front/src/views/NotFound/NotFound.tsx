import React from 'react';

import { Link } from 'gatsby';

import { Container } from '../components/Container';
import { Gainburua } from '../components/Gainburua';

export const NotFound: React.FC = () => (
  <>
    <Gainburua />

    <Container>
      <main>
        <h1>404: Ez dugu bilatzen duzun orria topatu</h1>
        <br />
        <Link to="/">Hasierara bueltatu</Link>
      </main>
    </Container>
  </>
);
