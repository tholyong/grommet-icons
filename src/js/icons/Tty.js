import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Tty = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Tty" {...props}>
    <path fill="none" stroke="#000" strokeLinecap="round" strokeWidth="2" d="M7 19h10a1 1 0 0 1 1 1h0a1 1 0 0 1-1 1H7h0a1 1 0 0 1-1-1h0a1 1 0 0 1 1-1Zm0-9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0-5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm5-5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0-5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm5-5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0-5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
  </StyledIcon>
));

Tty.displayName = 'Tty';

export { Tty };
