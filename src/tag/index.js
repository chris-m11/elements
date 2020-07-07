import React, { useState, forwardRef } from "react"
import styled, { css } from "styled-components"
import { Check } from "react-feather"
import { colors, noop, wrapEvent } from "src/constants"

const filterStyles = css`
  background: ${colors.ui_300};
  color: ${colors.ui_700};
  cursor: pointer;
  transition: 100ms;
  user-select: none;
  &:hover {
    background: ${colors.blue_100};
    color: ${colors.blue_700};
  }
  &.checked {
    background: ${colors.blue_500};
    color: ${colors.ui_100};
  }
  input[type="checkbox"] {
    appearance: none;
    width: 0;
    height: 0;
    position: absolute;
  }
`

const StyledTag = styled.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 0 1rem;
  border-radius: 1rem;
  background: ${({ bg }) => bg};
  color: ${({ color }) => color};
  font-size: 1.334rem;
  line-height: 1.5;
  svg {
    width: 1.334rem;
    height: 1.334rem;
    margin-right: 0.5rem;
  }
  ${({ isFilter }) => isFilter && filterStyles}
`

function Tag(
  {
    children,
    className,
    select,
    icon: Icon = null,
    checked = false,
    onChange = noop,
    bg = colors.gold_500,
    color = colors.ui_900,
    ...props
  },
  ref
) {
  const [internalChecked, set] = useState(checked)
  function handleCheck(e) {
    set(e.target.checked)
  }
  if (!select)
    return (
      <StyledTag {...props} ref={ref} className={className} bg={bg} color={color}>
        {Icon && <Icon />}
        {children}
      </StyledTag>
    )
  return (
    <StyledTag
      className={`${className} ${internalChecked ? "checked" : ""}`}
      as="label"
      isFilter={select}
      bg={bg}
      color={color}
    >
      <input
        {...props}
        ref={ref}
        type="checkbox"
        onChange={wrapEvent(onChange, handleCheck)}
        checked={internalChecked}
      />
      {internalChecked ? <Check /> : Icon ? <Icon /> : null}
      {children}
    </StyledTag>
  )
}

export default forwardRef(Tag)