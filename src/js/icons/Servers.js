import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Servers = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Servers" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M7 19h1v-1H7v1Zm11 0h1v-1h-1v1ZM1 23h11V1H1v22Zm11 0h11V1H12v22ZM4 5h5-5Zm11 0h5-5ZM4 9h5-5Zm11 0h5-5ZM4 13h5-5Zm11 0h5-5Z" />
  </StyledIcon>
));

Servers.displayName = 'Servers';

export { Servers };
