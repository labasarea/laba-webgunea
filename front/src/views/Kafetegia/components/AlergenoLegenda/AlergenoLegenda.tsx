import React from 'react';

import { mapAlergenoIdentifikadoreaToIzena } from '../../../../domain/kafetegia/mappers/mapAlergenoIdentifikadoreaToIzena';
import { mapAlergenoIdentifikadoreaToZenbakia } from '../../../../domain/kafetegia/mappers/mapAlergenoIdentifikadoreaToZenbakia';
import { AlergenoIdentifikadorea } from '../../../../domain/kafetegia/models/AlergenoIdentifikadorea';
import * as styles from './AlergenoLegenda.module.scss';
import { AlergenoLogoa } from './AlergenoLogoa';

const alergenoakOrdenaturik: AlergenoIdentifikadorea[] = [
  'esnekiak',
  'arrautzak',
  'glutena',
  'moluskuak',
  'krustazeoak',
  'arraina',
  'lupinuak',
  'fruituLehorrak',
  'kakahueteak',
  'sesamoa',
  'soja',
  'sulfitoak',
  'apioa',
  'ziapea',
];

export const AlergenoLegenda: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      {alergenoakOrdenaturik.map(alergenoa => (
        <div className={styles.alergenoWrapper}>
          <div className={styles.logoWrapper}>
            <AlergenoLogoa alergenoId={alergenoa} />
          </div>

          <div className={styles.izena}>
            {mapAlergenoIdentifikadoreaToIzena(alergenoa)}
          </div>
          <div className={styles.zenbakia}>
            {mapAlergenoIdentifikadoreaToZenbakia(alergenoa)}
          </div>
        </div>
      ))}
    </div>
  );
};
