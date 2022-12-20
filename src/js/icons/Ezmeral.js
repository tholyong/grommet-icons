import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Ezmeral = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 48 24" a11yTitle="Ezmeral" {...props}>
    <path d="M7 8h34v8H7V8Z" fill="#01A982" /><path d="M1 8h6v8H1V8Zm40 0h6v8h-6V8ZM7 16h34v6H7v-6Z" fill="#00775B" /><path d="M7 2h34v6H7V2Z" fill="#00C781" /><path d="m1 8 6-6v6H1Zm0 8 6 6v-6H1Zm46-8-6-6v6h6Zm0 8-6 6v-6h6Z" fill="#01A982" />
  </StyledIcon>
));

Ezmeral.displayName = 'Ezmeral';

export { Ezmeral };
