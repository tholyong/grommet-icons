import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Cluster = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Cluster" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M8 9h8V1H8v8ZM1 23h8v-8H1v8Zm14 0h8v-8h-8v8ZM5 15l3-6-3 6Zm5 4h4-4Zm6-10 3 6-3-6Z" />
  </StyledIcon>
));

Cluster.displayName = 'Cluster';

export { Cluster };
