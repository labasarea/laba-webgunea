import React from 'react';

import { Link } from 'gatsby';

import { Gainburua } from '../../components/Gainburua';
import { Container } from '../components/Container';

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
