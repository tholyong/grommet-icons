import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Database = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Database" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M1 2h22v7H1V2Zm3 10h1v1H4v-1Zm0-7h1v1H4V5Zm0 14h1v1H4v-1Zm-3-3h22v7H1v-7Zm0-7h22v7H1V9Z" />
  </StyledIcon>
));

Database.displayName = 'Database';

export { Database };
