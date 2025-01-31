import { createIcon } from '../lib/create-icon'

const SvgPasswordIcon = createIcon(props => {
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
        d="M16.856 3.23a6.1 6.1 0 0 0-9.815 6.95l-3.76 3.718-.177.176v2.908h2.902l.177-.18 1.432-1.47.082-.084.044-.109.313-.772.77-.314.11-.046.086-.085.883-.88a6.1 6.1 0 0 0 6.953-9.812Zm-3.993-.576a4.9 4.9 0 1 1-2.77 9.133l-.398-.23-.326.324-1.11 1.106-.893.365-.235.096-.095.234-.363.897L5.5 15.782H4.304v-1.207L8.2 10.72l.33-.326-.232-.4a4.9 4.9 0 0 1 4.564-7.34Zm-.25 3.546a.9.9 0 1 1 1.273 1.273.9.9 0 0 1-1.273-1.273Zm2.122-.849a2.1 2.1 0 1 0-2.97 2.97 2.1 2.1 0 0 0 2.97-2.97Z"
        clipRule="evenodd"
      />
    </svg>
  )
})

export default SvgPasswordIcon
