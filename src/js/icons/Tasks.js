import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Tasks = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Tasks" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M1 3h22v4H1V3Zm0 7h22v4H1v-4Zm0 7h22v4H1v-4ZM1 4h15v2H1V4Zm0 7h5v2H1v-2Zm0 7h10v2H1v-2Z" />
  </StyledIcon>
));

Tasks.displayName = 'Tasks';

export { Tasks };
