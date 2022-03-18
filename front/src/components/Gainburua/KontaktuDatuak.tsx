import { rem } from 'polished';
import React from 'react';
import styled from 'styled-components';
import { font, size } from '../../ui/theme';
import InstagramLogo from '../../assets/instagram.svg';
import TwitterLogo from '../../assets/twitter.svg';

/**
 * ERREPIKATUA
 * KontaktuDatuak konponentea MugikorNabigazioan errepikatzen da, honek
 * logoaren fill-erako kokapenaren araberako CSS aldagaia erabiltzen duelako
 * TODO: Beste estrategia bat bilatu, abstrakzio bakarra izateko
 */

export const KontaktuDatuak: React.FC = () => {
  return (
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
    fill: var(--color);
  }
`;

export const Twitter = styled(TwitterLogo)`
  width: ${rem(size.base)};
  height: ${rem(size.base)};
  path {
    fill: var(--color);
  }
`;

export const SareSozialak = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
`;

export const Helbidea = styled.address`
  border-right: 3px solid var(--color);
  padding-right: ${rem(size.small)};
  margin-right: ${rem(size.small)};
  ${font.tiny()};
`;
