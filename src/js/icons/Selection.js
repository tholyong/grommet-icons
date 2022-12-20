import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Selection = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Selection" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M5 18h3V6H5v12Zm7-16v20V2ZM1 22h22V2H1v20Z" />
  </StyledIcon>
));

Selection.displayName = 'Selection';

export { Selection };
