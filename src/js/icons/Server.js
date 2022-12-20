import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Server = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Server" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M14 19h1v-1h-1v1Zm-9 4h14V1H5v22ZM8 5h8-8Zm0 4h8-8Zm0 4h8-8Z" />
  </StyledIcon>
));

Server.displayName = 'Server';

export { Server };
