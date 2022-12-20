import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const StopFill = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="StopFill" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M4 4h16v16H4V4Zm2 2h12v12H6V6Zm2 2h8v8H8V8Zm2 2h4v4h-4v-4Zm1 1h2v2h-2v-2Z" />
  </StyledIcon>
));

StopFill.displayName = 'StopFill';

export { StopFill };
