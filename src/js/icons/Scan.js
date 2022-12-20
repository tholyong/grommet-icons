import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Scan = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Scan" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M20 10V3H4v7m-3 2h22H1Zm3 1v3-3Zm16 3v-3 3ZM7 21H4v-3m16 0v3h-3m-8 0h6-6Z" />
  </StyledIcon>
));

Scan.displayName = 'Scan';

export { Scan };
