import { createIcon } from '../lib/create-icon'

const SvgUpToDateIcon = createIcon(props => {
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
        d="M7.5 1.9a4.1 4.1 0 0 0-3.624 6.019 4.6 4.6 0 1 0 4.61 7.952 5.955 5.955 0 0 1-.373-1.207 3.4 3.4 0 1 1-3.157-5.9l.83-.268-.547-.68a2.9 2.9 0 1 1 5.063-2.567l.245.917.723-.614a1.9 1.9 0 0 1 3.06 1.957c.41.022.808.085 1.192.186a3.102 3.102 0 0 0-4.34-3.501A4.1 4.1 0 0 0 7.5 1.9Zm6.5 8.2a3.4 3.4 0 1 0 0 6.8 3.4 3.4 0 0 0 0-6.8Zm-4.6 3.4a4.6 4.6 0 1 1 9.2 0 4.6 4.6 0 0 1-9.2 0Zm4.818 1.375 2-2.5-.937-.75-1.656 2.07-1.042-.694-.666.998 1.5 1 .458.305.343-.43Z"
        clipRule="evenodd"
      />
    </svg>
  )
})

export default SvgUpToDateIcon
