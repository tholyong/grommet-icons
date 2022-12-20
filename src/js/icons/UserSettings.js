import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const UserSettings = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="UserSettings" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M18 21c-1.655 0-3-1.346-3-3s1.345-3 3-3c1.654 0 3 1.346 3 3s-1.346 3-3 3Zm6-3h-3 3Zm-3.879 2.122 2.121 2.12-2.12-2.12ZM18.001 24v-3 3Zm-4.244-1.757 2.121-2.122-2.12 2.122ZM12 18h3-3Zm3.878-2.121-2.12-2.121 2.12 2.12Zm2.122-.88v-3 3Zm2.121.88 2.121-2.121-2.12 2.12ZM12.5 12.5C11.266 11.446 9.775 11 8 11c-3.866 0-7 2.03-7 7v5h10M8 11A5 5 0 1 0 8 1a5 5 0 0 0 0 10Z" />
  </StyledIcon>
));

UserSettings.displayName = 'UserSettings';

export { UserSettings };
