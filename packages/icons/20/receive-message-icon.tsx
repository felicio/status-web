import { Path, Svg } from 'react-native-svg'
import { useCurrentColor } from 'tamagui'

import type { SvgProps } from 'react-native-svg'

const SvgReceiveMessageIcon = (props: SvgProps) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.723 16.618a1.65 1.65 0 0 1-1.446 0c-.343-.167-.562-.477-.729-.764-.17-.293-.354-.686-.573-1.157l-.014-.029-3.42-7.328-.013-.029c-.31-.666-.562-1.204-.717-1.622a3.395 3.395 0 0 1-.176-.622 1.372 1.372 0 0 1 .037-.658 1.65 1.65 0 0 1 1.176-1.082c.235-.057.463-.031.658.017.196.049.4.13.606.227.403.189.919.483 1.557.848l.028.016L10 5.751l2.303-1.316.028-.016c.639-.365 1.154-.659 1.558-.848.206-.096.41-.178.606-.227.195-.048.423-.074.658-.017a1.65 1.65 0 0 1 1.175 1.082c.076.23.07.46.037.658-.032.199-.097.408-.176.622-.155.418-.406.956-.717 1.622l-.013.03-3.42 7.327-.013.029c-.22.47-.404.864-.574 1.157-.167.287-.386.597-.729.764Zm-1.373-2.05v-7.69L7.052 5.563c-.673-.384-1.141-.652-1.49-.815a2.16 2.16 0 0 0-.37-.143.439.439 0 0 0-.055-.01.35.35 0 0 0-.225.206c0 .01.002.028.006.057.013.08.046.2.112.379.134.361.362.85.69 1.552l3.42 7.328c.077.168.147.316.21.45Zm1.3 0 .211-.45 3.42-7.328c.327-.702.555-1.19.689-1.552.066-.18.099-.3.112-.38a.424.424 0 0 0 .006-.056.35.35 0 0 0-.224-.207.443.443 0 0 0-.056.011c-.079.02-.196.062-.369.143-.35.163-.818.43-1.49.815L10.65 6.877v7.69Z"
        fill={color}
      />
    </Svg>
  )
}
export default SvgReceiveMessageIcon
