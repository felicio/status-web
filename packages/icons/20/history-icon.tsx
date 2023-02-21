import { Path, Svg } from 'react-native-svg'
import { useCurrentColor } from 'tamagui'

import type { SvgProps } from 'react-native-svg'

const SvgHistoryIcon = (props: SvgProps) => {
  const { color: colorToken = 'currentColor', ...rest } = props
  const color = useCurrentColor(colorToken)
  return (
    <Svg
      width={20}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <Path
        d="M7.516 2.287A7.99 7.99 0 0 1 10 1.9c1.091 0 2.143.211 3.156.633a8.092 8.092 0 0 1 2.571 1.74 8.096 8.096 0 0 1 1.74 2.57l-.003.002.003-.001A8.132 8.132 0 0 1 18.1 10a8.132 8.132 0 0 1-.633 3.156 8.093 8.093 0 0 1-1.74 2.571 8.09 8.09 0 0 1-2.57 1.74h-.001a8.131 8.131 0 0 1-5.814.182m.174-15.362.03.095-.03-.095Zm0 0a8.207 8.207 0 0 0-2.238 1.131h-.001a8.115 8.115 0 0 0-1.74 1.709c-.116.153-.227.31-.332.47-.036.055-.07.11-.105.167m0 0V3.9H1.9V8.1H6.1V6.9H3.84M3.1 5.764a6.39 6.39 0 0 0-.1.169V4H2v4h4V7H3.79l.05-.1M3.1 5.764v.196a8.094 8.094 0 0 1 .517-.772l-.36 6.68M3.84 6.9c.27-.54.605-1.032 1.004-1.478a6.955 6.955 0 0 1 3.216-2.04A6.727 6.727 0 0 1 10 3.1c.632 0 1.241.082 1.829.246a6.889 6.889 0 0 1 3.045 1.78 6.871 6.871 0 0 1 0 9.75 6.871 6.871 0 0 1-7.1 1.656l-.032.093M3.84 6.9h-.112a6.861 6.861 0 0 1 1.041-1.544 7.055 7.055 0 0 1 3.262-2.07A6.827 6.827 0 0 1 10 3c.64 0 1.26.083 1.855.25a6.99 6.99 0 0 1 3.09 1.805 6.968 6.968 0 0 1 0 9.89 6.973 6.973 0 0 1-7.203 1.68m0 0 .033-.095a6.902 6.902 0 0 1-3.47-2.642l-.075.052.075-.051a6.724 6.724 0 0 1-.95-2.048l-.027-.097-.097.027-.96.266-.097.026.026.096a7.879 7.879 0 0 0 1.092 2.373m4.45 2.093a7.002 7.002 0 0 1-3.52-2.68 6.821 6.821 0 0 1-.962-2.069l-.002-.009m.034 2.666a8.21 8.21 0 0 0 1.764 1.882c.691.533 1.453.944 2.286 1.234m-4.05-3.116.083-.056-.083.056Zm4.05 3.116.033-.094m-.033.094.033-.094m0 0a7.966 7.966 0 0 1-2.258-1.219 8.11 8.11 0 0 1-2.379-2.984m4.637 4.203a8.032 8.032 0 0 0 5.742-.18 7.99 7.99 0 0 0 2.54-1.719 7.99 7.99 0 0 0 1.718-2.539c.416-1 .625-2.039.625-3.117a8.03 8.03 0 0 0-.617-3.098l.092-.02-14.737 6.47m0 0a7.778 7.778 0 0 1-.414-1.123l-.008-.028a7.1 7.1 0 0 1-.02-.068l.865-.24.096-.026m-.519 1.485.52-1.485M10.1 6v-.1H8.9v4.853l.03.029 3.148 3.14.07.07.071-.07.703-.703.07-.07-.07-.071-2.822-2.83V6Z"
        fill={color}
        stroke={color}
        strokeWidth={0.2}
      />
    </Svg>
  )
}
export default SvgHistoryIcon
