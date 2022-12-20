import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Action = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Action" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="m1 23 3-3-3 3ZM20 4l3-3-3 3ZM9 11l3-3-3 3Zm4 4 3-3-3 3ZM10 5l9 9 1-1c2-2 4.053-5 0-9s-7-2-9 0l-1 1Zm-6 6 1-1 9 9-1 1c-2 2-5 4.087-9 0s-2-7 0-9Z" />
  </StyledIcon>
));

Action.displayName = 'Action';

export { Action };
