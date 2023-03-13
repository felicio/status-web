import { useTheme } from '@tamagui/core'
import { Path, Svg } from 'react-native-svg'

import type { IconProps } from '../types'

const SvgNotificationsIcon = (props: IconProps) => {
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
        d="M15 7.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm-5-4.15h-.024c-.912 0-1.629 0-2.209.04-.59.04-1.087.123-1.547.314a4.65 4.65 0 0 0-2.516 2.517c-.19.46-.274.955-.315 1.546-.04.58-.04 1.297-.04 2.209v.048c0 .912 0 1.629.04 2.209.04.59.124 1.086.315 1.546a4.65 4.65 0 0 0 2.516 2.517c.46.19.956.274 1.547.314.58.04 1.297.04 2.209.04h.048c.911 0 1.629 0 2.209-.04.59-.04 1.086-.123 1.546-.314a4.65 4.65 0 0 0 2.517-2.516c.19-.46.274-.956.314-1.547.04-.58.04-1.297.04-2.209v-.453h-1.3V10c0 .94 0 1.614-.037 2.144-.036.525-.104.863-.218 1.138a3.35 3.35 0 0 1-1.813 1.813c-.275.114-.613.183-1.138.218-.53.037-1.203.037-2.144.037-.94 0-1.614 0-2.145-.037-.524-.035-.862-.104-1.137-.218a3.35 3.35 0 0 1-1.813-1.813c-.114-.275-.183-.613-.219-1.138-.036-.53-.036-1.203-.036-2.144 0-.94 0-1.614.036-2.144.036-.525.105-.863.219-1.138a3.35 3.35 0 0 1 1.813-1.813c.275-.114.613-.183 1.137-.218C8.386 4.65 9.06 4.65 10 4.65h.428v-1.3H10Z"
        fill={color}
      />
    </Svg>
  )
}
export default SvgNotificationsIcon
