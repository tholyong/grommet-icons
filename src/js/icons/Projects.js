import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Projects = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Projects" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M9 15v8H1v-8h8Zm14 0v8h-8v-8h8ZM9 1v8H1V1h8Zm14 0v8h-8V1h8Z" />
  </StyledIcon>
));

Projects.displayName = 'Projects';

export { Projects };
