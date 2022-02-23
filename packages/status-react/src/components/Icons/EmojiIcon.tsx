import React from 'react'
import styled from 'styled-components'

interface ThemeProps {
  isActive?: boolean
}

export const EmojiIcon = ({ isActive }: ThemeProps) => {
  return (
    <Icon
      width="20"
      height="20"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={isActive ? 'active' : ''}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 18.5C14.6944 18.5 18.5 14.6944 18.5 10C18.5 5.30558 14.6944 1.5 10 1.5C5.30558 1.5 1.5 5.30558 1.5 10C1.5 14.6944 5.30558 18.5 10 18.5ZM10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
      />
      <path
        className={isActive ? 'active' : ''}
        d="M7.56858 13.1746C7.22903 12.9373 6.75712 12.9308 6.46422 13.2237C6.17133 13.5166 6.16876 13.996 6.49708 14.2485C7.46695 14.9946 8.68155 15.4381 9.99976 15.4381C11.318 15.4381 12.5326 14.9946 13.5024 14.2485C13.8308 13.996 13.8282 13.5166 13.5353 13.2237C13.2424 12.9308 12.7705 12.9373 12.4309 13.1746C11.742 13.6558 10.9039 13.9381 9.99976 13.9381C9.09565 13.9381 8.25747 13.6558 7.56858 13.1746Z"
      />
      <path
        className={isActive ? 'active' : ''}
        d="M15 8.5C15 9.32843 14.3284 10 13.5 10C12.6716 10 12 9.32843 12 8.5C12 7.67157 12.6716 7 13.5 7C14.3284 7 15 7.67157 15 8.5Z"
      />
      <path
        className={isActive ? 'active' : ''}
        d="M8 8.5C8 9.32843 7.32843 10 6.5 10C5.67157 10 5 9.32843 5 8.5C5 7.67157 5.67157 7 6.5 7C7.32843 7 8 7.67157 8 8.5Z"
      />
    </Icon>
  )
}

const Icon = styled.svg`
  & > path {
    fill: ${({ theme }) => theme.secondary};
  }

  & > path.active {
    fill: ${({ theme }) => theme.tertiary};
  }
`
