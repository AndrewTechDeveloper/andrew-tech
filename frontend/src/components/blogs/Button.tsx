import * as React from 'react'
import Button from '@material-ui/core/Button';

interface StyleButtonProps {
  title: string
  changeInlineStyle?: (event: React.MouseEvent<HTMLButtonElement>) => void
  changeBlockType?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const InlineStyleButton: React.FC<StyleButtonProps> = ({ title, changeInlineStyle }) => (
  <button onClick={changeInlineStyle}>{title}</button>
)
export const BlockTypeButton: React.FC<StyleButtonProps> = ({ title, changeBlockType }) => (
  <button onClick={changeBlockType}>{title}</button>
)
