import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Sort = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Sort" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M7 3h15M7 9h9m-9 6h15M2 2h2v2H2V2Zm0 6h2v2H2V8Zm0 6h2v2H2v-2Zm0 6h2v2H2v-2Zm5 1h9" />
  </StyledIcon>
));

Sort.displayName = 'Sort';

export { Sort };
