import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const ServerCluster = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="ServerCluster" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M1 8h22V1H1v7Zm10-3h1V4h-1v1Zm8 0h1V4h-1v1Zm-4 0h1V4h-1v1Zm-4 7h1v-1h-1v1Zm8 0h1v-1h-1v1Zm-4 0h1v-1h-1v1Zm-4 7h1v-1h-1v1Zm8 0h1v-1h-1v1Zm-4 0h1v-1h-1v1ZM1 15h22V8H1v7Zm0 7h22v-7H1v7Zm20 1H3" />
  </StyledIcon>
));

ServerCluster.displayName = 'ServerCluster';

export { ServerCluster };
