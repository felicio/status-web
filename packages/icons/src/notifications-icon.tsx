import { createIcon } from '../lib/create-icon'

const SvgNotificationsIcon = createIcon(props => {
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
        d="M15 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm3.1 3c0-.995-.023-1.877-.088-2.657a4.49 4.49 0 0 1-1.153.756c.029.566.04 1.197.04 1.9 0 1.62-.062 2.853-.246 3.8-.182.943-.474 1.548-.89 1.964-.416.416-1.021.708-1.963.89-.948.184-2.181.247-3.8.247-1.62 0-2.852-.063-3.8-.247-.942-.182-1.548-.474-1.963-.89-.416-.416-.708-1.021-.89-1.963-.184-.948-.247-2.181-.247-3.8 0-1.619.063-2.852.247-3.8.182-.942.474-1.547.89-1.963.415-.416 1.021-.708 1.963-.89.948-.184 2.18-.247 3.8-.247.202 0 .399 0 .59.003a4.49 4.49 0 0 1 .424-1.194c-.324-.006-.662-.01-1.014-.01-1.631 0-2.96.063-4.028.27-1.074.208-1.937.572-2.584 1.22-.647.646-1.011 1.509-1.22 2.583C1.963 7.039 1.9 8.369 1.9 10c0 1.63.062 2.96.269 4.028.208 1.074.572 1.937 1.22 2.584.646.646 1.509 1.011 2.583 1.22 1.067.206 2.397.268 4.028.268 1.63 0 2.96-.062 4.028-.269 1.074-.208 1.937-.573 2.584-1.22.646-.646 1.011-1.51 1.22-2.583.206-1.067.268-2.397.268-4.028Z"
        clipRule="evenodd"
      />
    </svg>
  )
})

export default SvgNotificationsIcon
