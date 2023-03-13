import { useTheme } from '@tamagui/core'
import { Path, Svg } from 'react-native-svg'

import type { IconProps } from '../types'

const SvgStickersIcon = (props: IconProps) => {
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
        d="M10 2.85h-.108c-1.292 0-2.06 0-2.71.156a5.65 5.65 0 0 0-4.176 4.175c-.156.651-.156 1.42-.156 2.71v.766c0 .782 0 1.247.058 1.647a5.65 5.65 0 0 0 4.788 4.789c.4.057.865.057 1.647.057h.134c.95 0 1.498 0 1.97-.068a6.65 6.65 0 0 0 5.635-5.636c.068-.47.068-1.02.068-1.969v-.134c0-.782 0-1.247-.057-1.647a5.65 5.65 0 0 0-4.789-4.788c-.4-.058-.865-.058-1.647-.058H10ZM7.485 4.27c.481-.115 1.083-.12 2.515-.12h.591c.867 0 1.232.002 1.528.044a4.35 4.35 0 0 1 3.687 3.687c.042.29.044.644.044 1.469-.852 0-1.53.002-2.083.04-.59.04-1.086.123-1.546.314a4.65 4.65 0 0 0-2.517 2.516c-.19.46-.274.956-.314 1.547-.038.553-.04 1.231-.04 2.083-.825 0-1.18-.003-1.469-.044a4.35 4.35 0 0 1-3.687-3.687c-.042-.296-.044-.661-.044-1.528V10c0-1.432.005-2.034.12-2.515A4.35 4.35 0 0 1 7.485 4.27Zm3.165 11.57c.255-.007.442-.02.611-.044a5.35 5.35 0 0 0 4.535-4.535 5.39 5.39 0 0 0 .045-.611c-.858 0-1.485.002-1.985.037-.525.035-.863.104-1.138.218a3.35 3.35 0 0 0-1.813 1.813c-.114.275-.182.613-.218 1.138-.034.5-.037 1.127-.037 1.985Z"
        fill={color}
      />
    </Svg>
  )
}
export default SvgStickersIcon
