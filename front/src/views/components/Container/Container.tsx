import React, { PropsWithChildren } from 'react';

import * as styles from './Container.module.scss';

interface Props {
  id?: string;
}

export const Container: React.FC<PropsWithChildren<Props>> = ({
  children,
  id,
}) => (
  <div className={styles.wrapper} id={id}>
    {children}
  </div>
);
