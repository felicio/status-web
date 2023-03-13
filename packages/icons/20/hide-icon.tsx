import { useTheme } from '@tamagui/core'
import { Path, Svg } from 'react-native-svg'

import type { IconProps } from '../types'

const SvgHideIcon = (props: IconProps) => {
  const { color: token = '$neutral-100' } = props
  const theme = useTheme()
  /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const color = theme[token]?.val ?? token
  return (
    <Svg
      width={20}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M10 4c4.5 0 7 5 7 6s-2.5 6-7 6-7-5-7-6 2.5-6 7-6Z"
        stroke={color}
        strokeWidth={1.3}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.28 7.36 3.388 2.47l-.919.919L7.361 8.28a3.15 3.15 0 0 0 4.36 4.36l4.89 4.89.92-.919-4.892-4.89a3.15 3.15 0 0 0-4.36-4.36Zm.035 1.874a1.85 1.85 0 0 0 2.45 2.45l-2.45-2.45Zm3.37 1.531-2.45-2.45a1.85 1.85 0 0 1 2.45 2.45Z"
        fill={color}
      />
    </Svg>
  )
}
export default SvgHideIcon
