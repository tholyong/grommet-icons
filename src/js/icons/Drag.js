import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Drag = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Drag" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M15 5h2V3h-2v2ZM7 5h2V3H7v2Zm8 8h2v-2h-2v2Zm-8 0h2v-2H7v2Zm8 8h2v-2h-2v2Zm-8 0h2v-2H7v2Z" />
  </StyledIcon>
));

Drag.displayName = 'Drag';

export { Drag };
