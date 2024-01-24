import { createIcon } from '../lib/create-icon'

const SvgNetherlandsIcon = createIcon(props => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      fill="none"
      viewBox="0 0 20 20"
      focusable={false}
      aria-hidden={true}
    >
      <path fill="#fff" d="M0 7.778h20v4.444H0V7.778Z" />
      <path
        fill="#AE1F28"
        d="M17.778 2.778H2.222A2.222 2.222 0 0 0 0 5v2.778h20V5a2.222 2.222 0 0 0-2.222-2.222Z"
      />
      <path
        fill="#20478B"
        d="M2.222 17.222h15.556A2.222 2.222 0 0 0 20 15v-2.778H0V15c0 1.227.995 2.222 2.222 2.222Z"
      />
    </svg>
  )
})

export default SvgNetherlandsIcon
