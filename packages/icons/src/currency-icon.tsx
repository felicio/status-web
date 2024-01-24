import { createIcon } from '../lib/create-icon'

const SvgCurrencyIcon = createIcon(props => {
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
      <g clipPath="url(#currency-icon_svg__a)">
        <path
          fill={props.color}
          d="m13.21 8.007-.556 1.207H4.782l.434-1.207h7.993Zm-1.039 2.415-.555 1.207H4.782l.434-1.207h6.955Zm2.463-5.675-.58 1.256a5.02 5.02 0 0 0-.814-.604 3.962 3.962 0 0 0-.9-.392 3.483 3.483 0 0 0-.99-.14c-.684 0-1.3.19-1.847.568-.548.379-.98.936-1.298 1.673-.318.736-.477 1.64-.477 2.71s.159 1.974.477 2.71c.318.737.75 1.295 1.298 1.673a3.173 3.173 0 0 0 1.847.567c.354 0 .688-.046 1.002-.138a3.88 3.88 0 0 0 .888-.38c.277-.162.533-.343.766-.544l.604 1.256a4.25 4.25 0 0 1-1.485.905 5.272 5.272 0 0 1-1.775.302c-.99 0-1.867-.258-2.632-.773-.76-.515-1.358-1.247-1.793-2.197-.43-.95-.646-2.077-.646-3.38 0-1.305.215-2.432.646-3.382.435-.95 1.032-1.682 1.793-2.197.765-.515 1.642-.773 2.632-.773.64 0 1.238.111 1.793.332.56.222 1.056.538 1.491.948Z"
        />
      </g>
      <defs>
        <clipPath id="currency-icon_svg__a">
          <path fill="#fff" d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  )
})

export default SvgCurrencyIcon
