import { Link } from 'gatsby';
import { rem } from 'polished';
import React, { useState } from 'react';
import styled from 'styled-components';
import { font, size } from '../../ui/theme';
import { colors } from '../../ui/theme/colors';
import HamburgerIcon from './assets/hamburguer.svg';
import Itxi from './assets/itxi.svg';
import InstagramLogo from '../../assets/instagram.svg';
import TwitterLogo from '../../assets/twitter.svg';

export const MugikorNabigazioa: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && (
        <NabigazioaWrapper>
          <OpenClose onClick={() => setIsOpen(false)}>
            <Itxi />
          </OpenClose>

          <nav>
            <ul>
              <Esteka>
                <Link to="/">Hasiera</Link>
              </Esteka>
              <Esteka>
                <Link to="/laba-gara">Laba gara</Link>
              </Esteka>
              <Esteka>
                <Link to="/kafetegia">Dastatu Laba</Link>
              </Esteka>
            </ul>
          </nav>

          <KontaktuaWrapper>
            <KontaktuDatuak />
          </KontaktuaWrapper>
        </NabigazioaWrapper>
      )}

      <OpenClose
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <Hamburger />
      </OpenClose>
    </>
  );
};

const KontaktuaWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-grow: 1;
  width: 100%;
`;

const Esteka = styled.li`
  color: ${colors.zuria};
  ${font.large()};
  text-align: right;

  &:not(:last-child) {
    margin-bottom: ${rem(size.base)};
  }

  &:after {
    content: '.';
  }
`;

const Hamburger = styled(HamburgerIcon)`
  path {
    fill: var(--color);
  }
`;

const OpenClose = styled.div`
  cursor: pointer;
  width: ${rem(size.medium)};
  margin-bottom: ${rem(size.base)};
`;

const NabigazioaWrapper = styled.div`
  @keyframes sartu {
    from {
      right: -100vw;
    }
    to {
      right: 0;
    }
  }
  animation-name: sartu;
  animation-duration: 0.25s;

  /* Containerrak sartzen duen padding berdina */
  padding: ${rem(size.base)};

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  background-color: ${colors.beltza};
  color: ${colors.zuria};
  height: 100vh;
`;

/**
 * ERREPIKATUA
 * KontaktuDatuak konponentea errepikatzen da, besteak logoaren fill-erako kokapenaren
 * araberako CSS aldagaia erabiltzen duelako eta hemen testu eta irudi guztiak zuriak izan
 * behar direlako
 * TODO: Beste estrategia bat bilatu, abstrakzio bakarra izateko
 */
const KontaktuDatuak: React.FC = () => {
  return (
    <Kontaktua>
      <Helbidea>
        <p>Gazteluko plaza, 2</p>
        <p>Iruñea</p>
      </Helbidea>

      <SareSozialak>
        <SareSoziala>
          <a
            tabIndex={0}
            aria-label="Laba Twitterren"
            href="https://twitter.com/labasarea/"
          >
            <Twitter title="Laba Twitterren" />
          </a>
        </SareSoziala>

        <SareSoziala>
          <a
            tabIndex={0}
            aria-label="Laba Instagramen"
            href="https://www.instagram.com/labasarea/"
          >
            <Instagram role="link" title="Laba Instagramen" />
          </a>
        </SareSoziala>
      </SareSozialak>
    </Kontaktua>
  );
};

export const Kontaktua = styled.div`
  display: flex;
`;

export const SareSoziala = styled.li`
  width: ${rem(size.base)};
  height: ${rem(size.base)};
  :not(:last-child) {
    margin-right: ${rem(size.small)};
  }
`;

export const Instagram = styled(InstagramLogo)`
  width: ${rem(size.base)};
  height: ${rem(size.base)};
  path {
    fill: ${colors.zuria};
  }
`;

export const Twitter = styled(TwitterLogo)`
  width: ${rem(size.base)};
  height: ${rem(size.base)};
  path {
    fill: ${colors.zuria};
  }
`;

export const SareSozialak = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
`;

export const Helbidea = styled.address`
  border-right: 3px solid ${colors.zuria};
  padding-right: ${rem(size.small)};
  margin-right: ${rem(size.small)};
  ${font.tiny()};
`;
