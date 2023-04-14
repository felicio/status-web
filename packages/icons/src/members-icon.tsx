import { createIcon } from '../lib/create-icon'

const SvgMembersIcon = createIcon(props => {
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
      <path
        fill={props.color}
        fillRule="evenodd"
        d="M5.6 5.5a1.4 1.4 0 1 1 2.8 0 1.4 1.4 0 0 1-2.8 0ZM7 2.9a2.6 2.6 0 1 0 0 5.2 2.6 2.6 0 0 0 0-5.2Zm1.986 6.913c-.302.29-.573.613-.807.962a3.56 3.56 0 0 0-1.18-.175c-.896 0-1.686.22-2.28.962-.576.72-1.042 2.018-1.11 4.338h4.819c.115-2.403.591-3.984 1.34-4.995C10.672 9.685 11.89 9.4 13 9.4c1.103 0 2.313.28 3.218 1.413.877 1.096 1.382 2.887 1.382 5.687v.6H12v-1.2h4.391c-.068-2.32-.534-3.618-1.11-4.338-.594-.743-1.385-.962-2.281-.962-.89 0-1.672.215-2.268 1.02-.633.855-1.132 2.47-1.132 5.48H2.4v-.6c0-2.8.505-4.591 1.381-5.687C4.687 9.68 5.897 9.4 7 9.4c.653 0 1.343.098 1.986.413ZM13 4.1a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8Zm-2.6 1.4a2.6 2.6 0 1 1 5.2 0 2.6 2.6 0 0 1-5.2 0Z"
        clipRule="evenodd"
      />
    </svg>
  )
})

export default SvgMembersIcon
