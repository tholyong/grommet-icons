import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Magic = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Magic" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="m2.5 19.5 17-17 2 2-17 17-2-2Zm.5.5L15 8l1 1L4 21l-1-1ZM5.5 3l-.5.5.5.5.5-.5-.5-.5Zm6 0-.5.5.5.5.5-.5-.5-.5Zm-3 3-.5.5.5.5.5-.5-.5-.5Zm12 6-.5.5.5.5.5-.5-.5-.5Zm0 5-.5.5.5.5.5-.5-.5-.5Z" />
  </StyledIcon>
));

Magic.displayName = 'Magic';

export { Magic };
