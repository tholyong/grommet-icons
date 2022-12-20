import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const DocumentText = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="DocumentText" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M6 16h10H6Zm0-4h12H6Zm0-4h5-5Zm8-7v7h7M3 23V1h12l6 6v16H3Z" />
  </StyledIcon>
));

DocumentText.displayName = 'DocumentText';

export { DocumentText };
