import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const StatusWarning = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="StatusWarning" {...props}>
    <path fill="none" stroke="#000" strokeLinejoin="round" strokeWidth="2" d="m12 3 10 18H2L12 3Zm0 6v6m0 1v2" />
  </StyledIcon>
));

StatusWarning.displayName = 'StatusWarning';

export { StatusWarning };
