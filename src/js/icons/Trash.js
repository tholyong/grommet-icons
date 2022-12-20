import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Trash = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Trash" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M4 5h16v18H4V5ZM1 5h22M9 1h6v4H9V1Zm0 0h6v4H9V1Zm6 8v10M9 9v10" />
  </StyledIcon>
));

Trash.displayName = 'Trash';

export { Trash };
