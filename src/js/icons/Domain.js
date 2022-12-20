import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Domain = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Domain" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M13 3v4-4ZM9 3v4-4ZM5 3v4-4ZM1 7h22H1Zm0 14h22V3H1v18Z" />
  </StyledIcon>
));

Domain.displayName = 'Domain';

export { Domain };
