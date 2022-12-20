import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const MoreVertical = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="MoreVertical" {...props}>
    <path d="M14 14h-4v-4h4v4Zm0-7h-4V3h4v4Zm0 14h-4v-4h4v4Z" />
  </StyledIcon>
));

MoreVertical.displayName = 'MoreVertical';

export { MoreVertical };
