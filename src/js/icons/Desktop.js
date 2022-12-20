import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Desktop = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Desktop" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M1 1h22v18H1V1Zm4 22h14H5Zm5-4v4-4Zm4 0v4-4Z" />
  </StyledIcon>
));

Desktop.displayName = 'Desktop';

export { Desktop };
