import React from 'react';
import { Link } from 'gatsby';

import { rem } from 'polished';
import styled from 'styled-components';
import { Container } from '../../components/Container';
import { breakpoints, font, media, size } from '../../ui/theme';
import LabaLogo from '../../assets/logo.svg';

import { colors } from '../../ui/theme/colors';
import { DesktopNabigazioa } from './DesktopNabigazioa';
import { MugikorNabigazioa } from './MugikorNabigazioa';
import MediaQuery from 'react-responsive';
import { KontaktuDatuak } from './KontaktuDatuak';
import Gezia from '../../assets/gezia.svg';

interface Props {
  izenburua?: string;
  deskribapena?: string;
  atala?: 'hasiera' | 'kafetegia';
  onClick?: () => void;
}

export const Gainburua: React.FC<Props> = ({
  izenburua,
  deskribapena,
  atala,
  onClick,
}) => {
  return (
    <Wrapper atala={atala}>
      <MediaQuery maxWidth={breakpoints.tablet}>
        <Container>
          <MugikorWrapper>
            <MenuWrapper>
              <MugikorNabigazioa />
            </MenuWrapper>
            <MugikorLogoWrapper>
              <Link to="/">
                <LogoWrapper>
                  <Logo title="Laba gara" />
                </LogoWrapper>
              </Link>
            </MugikorLogoWrapper>
          </MugikorWrapper>
        </Container>
      </MediaQuery>

      <MediaQuery minWidth={breakpoints.tablet}>
        <GainburuWrapper>
          <Link to="/">
            <LogoWrapper>
              <Logo title="Laba gara" />
            </LogoWrapper>
          </Link>

          <KontaktuDatuak />
        </GainburuWrapper>
      </MediaQuery>

      {deskribapena && (
        <Nagusia>
          <Container>
            <Deskribapena>{deskribapena}</Deskribapena>

            <IzenburuWrapper>
              <Marra />
              <Izenburua>{izenburua}</Izenburua>
            </IzenburuWrapper>

            <GeziaWrapper>
              <GeziaLogo atala={atala} onClick={onClick} />
            </GeziaWrapper>
          </Container>
        </Nagusia>
      )}

      <MediaQuery minWidth={breakpoints.tablet}>
        <DesktopNabigazioa atala={atala} />
      </MediaQuery>
    </Wrapper>
  );
};

const GeziaWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const GeziaLogo = styled(Gezia)<{ atala: 'hasiera' | 'kafetegia' }>`
  cursor: pointer;
  path {
    fill: ${({ atala }) =>
      atala === 'hasiera' ? colors.zuria : colors.beltza};
  }

  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-name: bounce-2;
  animation-timing-function: ease;

  @keyframes bounce-2 {
    0% {
      transform: rotate(90deg) translateX(0);
    }
    50% {
      transform: rotate(90deg) translateX(-${size.base}px);
    }
    100% {
      transform: rotate(90deg) translateX(0);
    }
  }
`;

const Nagusia = styled.main`
  flex-grow: 1;
`;

const MugikorWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-top: ${rem(size.base)};

  margin-bottom: ${rem(size.medium)};
`;

const MenuWrapper = styled.div`
  grid-column: 3;
  grid-row: 1;
  display: flex;
  justify-content: flex-end;
`;

const MugikorLogoWrapper = styled.div`
  grid-row: 1;
  grid-column: 2;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div<{ atala?: 'hasiera' | 'kafetegia' }>`
  --color: ${({ atala }) =>
    atala === 'hasiera' ? colors.zuria : colors.beltza};

  display: flex;
  flex-direction: column;

  background-color: ${({ atala }) =>
    atala === 'hasiera' ? colors.gorria : colors.horia};
  color: var(--color);

  /* HACK: Hasiera orriak edukirik ez duenez, gainburuak altuera osoa hartuko du */
  min-height: ${({ atala }) => (atala === 'hasiera' ? '100vh' : '0')};

  ${media.desktop`
    min-height: ${({ atala }: { atala: 'hasiera' | 'kafetegia' }) =>
      Boolean(atala) ? '100vh' : '0'};  
  `}
`;

const LogoWrapper = styled.div`
  width: ${rem(size.huge)};
`;

const Logo = styled(LabaLogo)`
  path {
    fill: var(--color);
  }
`;

const GainburuWrapper = styled.header`
  padding: ${rem(size.tiny)};
  display: flex;
  align-items: start;
  justify-content: space-between;

  ${media.tablet`
    padding: ${rem(size.large)};
  `};
`;

const Deskribapena = styled.p`
  margin-bottom: ${rem(size.xlarge)};
  hyphens: auto;

  ${font.base()};

  ${media.tablet`
    ${font.large()};
  `};
`;

const IzenburuWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: ${rem(size.large)};
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
