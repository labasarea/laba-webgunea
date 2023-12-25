import React from 'react';

import BeganoaLogo from '../../../../assets/beganoa.svg';
import EkologikoaLogo from '../../../../assets/ekologikoa.svg';
import { Produktua } from '../../../../domain/models/Produktua';
import * as styles from './ProduktuZerrenda.module.scss';

interface Props {
  produktuZerrenda: Produktua[];
  izena?: React.ReactNode;
}

export const ProduktuZerrenda: React.FC<Props> = ({
  produktuZerrenda,
  izena,
}) => (
  <table className={styles.produktuTaula}>
    {izena && <caption className={styles.mota}>{izena}</caption>}

    <tbody>
      {produktuZerrenda.map(produktua => (
        <tr key={produktua.id}>
          <td className={styles.ezaugarria}>
            {produktua.beganoa && <BeganoaLogo title="Produktu beganoa" />}
          </td>
          <td className={styles.ezaugarria}>
            {produktua.ekologikoa && (
              <EkologikoaLogo title="Produktu ekologikoa" />
            )}
          </td>
          <td className={styles.izena} scope="row">
            {produktua.izena}{' '}
            {produktua.alergenoak.map(alergenoa => (
              <span className={styles.alergenoa}>{alergenoa.zenbakia}</span>
            ))}
          </td>
          <td className={styles.prezioa}>
            {new Intl.NumberFormat('eu-ES', {
              style: 'currency',
              currency: 'EUR',
            }).format(produktua.prezioa)}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
