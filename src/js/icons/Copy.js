import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Copy = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Copy" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M9 15h8-8Zm0-4h10H9Zm0-4h4-4Zm7-6v6h6M6 5H2v18h16v-4m4 0H6V1h11l5 5v13Z" />
  </StyledIcon>
));

Copy.displayName = 'Copy';

export { Copy };
