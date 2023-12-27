import React, { PropsWithChildren } from 'react';

import * as styles from './Container.module.scss';

export const Container: React.FC<PropsWithChildren> = ({ children }) => (
  <div className={styles.wrapper}>{children}</div>
);
