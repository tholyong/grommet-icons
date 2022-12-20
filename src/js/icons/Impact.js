import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Impact = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Impact" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="m13 2 9 4v11l-9 5V2Zm9 4-9 5 9-5ZM9 22V2v20Zm0-10L3 5l6 7Zm0 0H1h8Zm0 0-6 7 6-7Z" />
  </StyledIcon>
));

Impact.displayName = 'Impact';

export { Impact };
