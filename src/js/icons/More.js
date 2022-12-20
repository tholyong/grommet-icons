import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const More = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="More" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M3 13v-2h2v2H3Zm8 0v-2h2v2h-2Zm8 0v-2h2v2h-2Z" />
  </StyledIcon>
));

More.displayName = 'More';

export { More };
