import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';

import { colorStyle } from 'grommet-styles';

import { defaultProps } from './default-props';

const colorCss = css`
  ${(props) => colorStyle(
      'fill',
      props.color || props.theme.global.colors.icon,
      props.theme,
    )}
  ${(props) => colorStyle(
      'stroke',
      props.color || props.theme.global.colors.icon,
      props.theme,
    )}

  g {
    fill: inherit;
    stroke: inherit;
  }

  *:not([stroke]) {
    &[fill="none"] {
      stroke-width: 0;
    }
  }

  *[stroke*="#"],
  *[STROKE*="#"] {
    stroke: inherit;
    fill: none;
  }

  *[fill-rule],
  *[FILL-RULE],
  *[fill*="#"],
  *[FILL*="#"] {
    fill: inherit;
    stroke: none;
  }
`;

const IconInner = forwardRef(
  ({
 a11yTitle, color, size, theme, ...rest
}, ref) => (
  <svg ref={ref} aria-label={a11yTitle} {...rest} />
  ),
);
IconInner.displayName = 'Icon';

const parseMetricToNum = (string) => parseFloat(string.match(/\d+(\.\d+)?/), 10);
const parseUnit = (string) => string.match(/\D+$/) || []

const StyledIcon = styled(IconInner)`
  display: inline-block;
  flex: 0 0 auto;

  ${({ size = 'medium', theme, viewBox }) => {
    const [, , w, h] = (viewBox || '0 0 24 24').split(' ');
    const scale = w / h;
    const dimension = parseMetricToNum(theme.icon.size[size] || size);
    const unit = parseUnit(theme.icon.size[size] || size).pop() ||"px"

    if (w < h) {
      return `
      width: ${dimension}${unit};
      height: ${dimension / scale}${unit};
    `;
    }
    if (h < w) {
      return `
      width: ${dimension * scale}${unit};
      height: ${dimension}${unit};
    `;
    }
    return `
      width: ${dimension}${unit};
      height: ${dimension}${unit};
    `;
  }}
  ${({ color }) => color !== 'plain' && colorCss}
  ${({ theme }) => theme && theme.icon.extend}
`;

StyledIcon.defaultProps = {};
Object.setPrototypeOf(StyledIcon.defaultProps, defaultProps);

export { StyledIcon };
