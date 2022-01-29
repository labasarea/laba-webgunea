import React, { useState } from 'react';
import { Link } from 'gatsby';

import { rem } from 'polished';
import styled from 'styled-components';
import { Container } from '../components/Container';
import { font, media, size } from '../ui/theme';
import LabaLogo from '../assets/logo.svg';
import InstagramLogo from '../assets/instagram.svg';
import TwitterLogo from '../assets/twitter.svg';
import { colors } from '../ui/theme/colors';

interface Props {
  izenburua: string;
  deskribapena: string;
  atala: 'hasiera' | 'kafetegia';
}

export const Gainburua: React.FC<Props> = ({
  izenburua,
  deskribapena,
  atala,
}) => {
  const [kafetegianDago, setKafetegianDago] = useState(false);

  return (
    <Wrapper atala={atala}>
      <GainburuWrapper>
        <Link to="/">
          <LogoWrapper>
            <Logo title="Laba gara" />
          </LogoWrapper>
        </Link>

        <Kontaktua>
          <Helbidea>
            <p>Gazteluko plaza 2</p>
            <p>Iruñea</p>
          </Helbidea>

          <SareSozialak>
            <SareSoziala>
              <a href="https://twitter.com/labasarea/">
                <Twitter tabIndex="0" role="link" title="Laba Twitterren" />
              </a>
            </SareSoziala>

            <SareSoziala>
              <a href="https://www.instagram.com/labasarea/">
                <Instagram tabIndex="0" role="link" title="Laba Instagramen" />
              </a>
            </SareSoziala>
          </SareSozialak>
        </Kontaktua>
      </GainburuWrapper>

      <Container>
        <main>
          <Deskribapena>{deskribapena}</Deskribapena>

          <IzenburuWrapper>
            <Marra />
            <Izenburua>{izenburua}</Izenburua>
          </IzenburuWrapper>
        </main>

        <Nabigazioa>
          <EstekaZerrenda>
            <Esteka>
              <Link to="/">Laba gara</Link>
            </Esteka>
            <Esteka kafetegianDago={kafetegianDago}>
              <Link
                getProps={({ isCurrent }) => {
                  setKafetegianDago(isCurrent);

                  return {};
                }}
                to="/kafetegia"
              >
                Dastatu Laba
              </Link>
            </Esteka>
          </EstekaZerrenda>
        </Nabigazioa>
      </Container>
    </Wrapper>
  );
};

const Nabigazioa = styled.nav`
  width: 100%;
  position: absolute;
  bottom: ${rem(size.tiny)};
  left: 0;
`;

const EstekaZerrenda = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;
`;

const Esteka = styled.li<{ kafetegianDago?: boolean }>`
  padding: ${rem(size.small)};

  ${({ kafetegianDago }) =>
    !kafetegianDago &&
    `
    border-bottom: 3px solid var(--color);
  `}
`;

const Wrapper = styled.div<{ atala: 'hasiera' | 'kafetegia' }>`
  --color: ${({ atala }) =>
    atala === 'hasiera' ? colors.zuria : colors.beltza};

  background-color: ${({ atala }) =>
    atala === 'hasiera' ? colors.gorria : colors.horia};
  color: var(--color);
  min-height: 100vh;
`;

const LogoWrapper = styled.div`
  width: ${rem(size.large)};

  ${media.tablet`
    width: ${rem(size.huge)};
  `}
`;

const Kontaktua = styled.div`
  display: flex;
`;

const SareSoziala = styled.li`
  width: ${rem(size.base)};
  height: ${rem(size.base)};
  :not(:last-child) {
    margin-right: ${rem(size.small)};
  }
`;

const Instagram = styled(InstagramLogo)`
  width: ${rem(size.base)};
  height: ${rem(size.base)};
  path {
    fill: var(--color);
  }
`;

const Twitter = styled(TwitterLogo)`
  width: ${rem(size.base)};
  height: ${rem(size.base)};
  path {
    fill: var(--color);
  }
`;

const Logo = styled(LabaLogo)`
  path {
    fill: var(--color);
  }
`;

const SareSozialak = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
`;

const Helbidea = styled.address`
  border-right: 3px solid var(--color);
  padding-right: ${rem(size.small)};
  margin-right: ${rem(size.small)};
  ${font.tiny()};
`;

const GainburuWrapper = styled.header`
  padding: ${rem(size.tiny)};
  display: flex;
  align-items: start;
  justify-content: space-between;
  margin-bottom: ${rem(size.base)};

  ${media.tablet`
    padding: ${rem(size.large)};
  `};
`;

const Deskribapena = styled.p`
  margin-bottom: ${rem(size.xlarge)};
  text-align: justify;

  ${font.base()};

  ${media.tablet`
    ${font.large()};
  `};
`;

const IzenburuWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Marra = styled.div`
  /* altuera erabiliko den letraren berdina da */
  height: ${rem(41.83)};
  flex-grow: 1;
  box-shadow: inset 0px -3px 0px 0px var(--color);
  margin-right: ${rem(size.tiny)};
`;

const Izenburua = styled.h1`
  text-align: right;
  vertical-align: bottom;

  &:after {
    content: '.';
  }

  ${font.gargantuan()};
`;
