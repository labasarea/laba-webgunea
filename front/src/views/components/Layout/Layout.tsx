import React, { PropsWithChildren } from 'react';

import * as styles from './Layout.module.scss';

export const Layout: React.FC<PropsWithChildren> = ({ children }) => (
  <div className={styles.wrapper}>{children}</div>
);
