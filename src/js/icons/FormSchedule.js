import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const FormSchedule = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="FormSchedule" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M6 19h12V8H6v11Zm2-4h2-2Zm3 0h5-5Zm4-7V5v3ZM9 8V5v3Zm-3 3.5h12H6Z" />
  </StyledIcon>
));

FormSchedule.displayName = 'FormSchedule';

export { FormSchedule };
