import styled, { css } from "styled-components"
import PropTypes from "prop-types"
import { darken } from "polished"
import { colors } from "src/constants"

const primaryStyles = css`
  background-color: ${({ color }) => color || colors.blue_500};
  border-color: ${({ color }) => color || colors.blue_500};
  color: ${({ textColor }) => textColor || colors.ui_100};
  &:hover {
    color: ${({ textColor }) => textColor || colors.ui_100};
    background-color: ${({ color }) => (color ? darken(0.24, color) : colors.blue_900)};
    border-color: ${({ color }) => (color ? darken(0.24, color) : colors.blue_900)};
  }
`

const dangerStyles = css`
  background-color: transparent;
  border-color: ${colors.red_500};
  color: ${colors.red_500};
  &:hover {
    background-color: ${colors.red_500};
    color: ${colors.ui_100};
  }
`

const Button = styled.button`
  all: unset;
  box-sizing: border-box;
  padding: 1rem 2rem;
  background-color: transparent;
  color: ${({ color }) => color || colors.blue_500};
  border-width: 2px;
  border-style: solid;
  border-color: ${({ color }) => color || colors.blue_500};
  border-radius: 4px;
  font-family: "Nunito", sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  transition: 200ms;
  cursor: pointer;
  &:hover {
    background-color: ${({ color }) => color || colors.blue_500};
    color: ${({ textColor }) => textColor || colors.ui_100};
  }
  &:disabled {
    background-color: ${colors.ui_500};
    color: ${colors.ui_700};
    cursor: not-allowed;
    border-color: ${colors.ui_500};
    pointer-events: none;
  }
  ${({ danger, primary }) => (danger ? dangerStyles : primary ? primaryStyles : "")};
`

Button.propTypes = {
  /** Control the visual importance of a button. */
  primary: PropTypes.bool,
  danger: PropTypes.bool,
  color: PropTypes.string,
  textColor: props =>
    props.color && !props.textColor && new Error("Required if prop of color was given")
}

export default Button
