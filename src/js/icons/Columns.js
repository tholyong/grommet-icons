import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Columns = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Columns" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M17 2v20V2Zm-5 0v20V2ZM7 2v20V2ZM2 22h20V2H2v20Z" />
  </StyledIcon>
));

Columns.displayName = 'Columns';

export { Columns };
