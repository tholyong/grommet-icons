import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const ObjectUngroup = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="ObjectUngroup" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M1 1h3v3H1V1Zm12 0h3v3h-3V1ZM4 2h9m2 7h5M4 15h9M1 13h3v3H1v-3Zm12 0h3v3h-3v-3ZM2 4v9m13-9v9m5-5h3v3h-3V8Zm-9 14h9M8 20h3v3H8v-3Zm12 0h3v3h-3v-3ZM9 16v4m13-9v9" />
  </StyledIcon>
));

ObjectUngroup.displayName = 'ObjectUngroup';

export { ObjectUngroup };
