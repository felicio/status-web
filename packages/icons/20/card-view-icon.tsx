import { useTheme } from '@tamagui/core'
import { Path, Svg } from 'react-native-svg'

import type { IconProps } from '../types'

const SvgCardViewIcon = (props: IconProps) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.3 2.85h-.028c-.816 0-1.468 0-1.995.043-.54.044-1.006.137-1.434.355a3.65 3.65 0 0 0-1.595 1.595c-.218.428-.31.893-.355 1.434-.043.526-.043 1.179-.043 1.995v4.11c0 1.036 0 1.719.194 2.291a3.648 3.648 0 0 0 2.283 2.283c.572.195 1.255.194 2.291.194H12.382c1.036 0 1.72 0 2.291-.194a3.648 3.648 0 0 0 2.283-2.283c.195-.572.195-1.255.194-2.291V8.272c0-.816 0-1.469-.043-1.995-.044-.54-.137-1.006-.355-1.434a3.65 3.65 0 0 0-1.595-1.595c-.428-.218-.893-.31-1.434-.355-.526-.043-1.179-.043-1.995-.043H8.3Zm7.55 5.357c0-.802-.002-1.374-.039-1.824-.037-.46-.108-.736-.217-.95a2.35 2.35 0 0 0-1.027-1.027c-.214-.109-.49-.18-.95-.217-.467-.038-1.066-.039-1.917-.039H8.3c-.85 0-1.45 0-1.917.039-.46.037-.736.108-.95.217a2.35 2.35 0 0 0-1.027 1.027c-.109.214-.18.49-.217.95-.037.45-.039 1.022-.039 1.824a3.648 3.648 0 0 1 1.177-.663c.572-.195 1.255-.194 2.291-.194H12.382c1.036 0 1.72 0 2.291.194.436.148.834.374 1.177.663ZM4.658 14.96a2.353 2.353 0 0 1-.252-.392c-.109-.214-.18-.49-.217-.95-.033-.404-.038-.906-.039-1.583.002-1.055.016-1.469.125-1.79a2.35 2.35 0 0 1 1.47-1.47c.342-.115.789-.124 2.005-.124h4.5c1.216 0 1.664.009 2.005.125a2.35 2.35 0 0 1 1.47 1.47c.11.32.124.734.125 1.789 0 .677-.006 1.18-.039 1.583-.037.46-.108.736-.217.95a2.35 2.35 0 0 1-1.027 1.027c-.214.109-.49.18-.95.217-.458.038-1.042.039-1.865.039H8.248c-.823 0-1.407-.001-1.865-.039-.46-.037-.736-.108-.95-.217a2.351 2.351 0 0 1-.775-.635Z"
        fill={color}
      />
    </Svg>
  )
}
export default SvgCardViewIcon
