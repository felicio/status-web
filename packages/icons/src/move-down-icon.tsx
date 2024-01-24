import { createIcon } from '../lib/create-icon'

const SvgMoveDownIcon = createIcon(props => {
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
        d="M11.748 17.97c.474.1 1.056.13 1.753.13.696 0 1.278-.03 1.751-.13.48-.1.902-.282 1.22-.624.314-.34.462-.767.538-1.224.076-.453.09-.997.09-1.622 0-.624-.013-1.168-.087-1.62-.074-.457-.22-.885-.533-1.225-.317-.343-.739-.525-1.22-.625-.474-.1-1.059-.13-1.76-.13-.7 0-1.285.03-1.76.13-.48.1-.902.282-1.219.625-.314.34-.459.768-.533 1.225-.074.452-.088.996-.088 1.62 0 .625.015 1.17.09 1.622.077.457.225.885.54 1.224.317.341.738.523 1.219.624Zm-6.172-1.894.976-.976c-.483 0-.884-.002-1.214-.03-.37-.03-.705-.094-1.018-.254a2.6 2.6 0 0 1-1.136-1.136c-.16-.312-.224-.647-.254-1.018-.03-.358-.03-.798-.03-1.337v-2.65c0-.54 0-.98.03-1.338.03-.37.095-.705.254-1.018A2.6 2.6 0 0 1 4.32 5.183c.313-.16.647-.224 1.018-.254.358-.03.798-.03 1.337-.03h3.232c.01-.377.032-.719.08-1.019.075-.457.22-.885.534-1.225.317-.343.738-.525 1.22-.625.474-.1 1.059-.13 1.76-.13.7 0 1.285.03 1.76.13.48.1.902.282 1.219.625.314.34.459.768.533 1.225.074.452.087.996.087 1.62 0 .625-.014 1.17-.09 1.622-.076.458-.224.885-.539 1.224-.317.341-.738.523-1.219.624-.473.1-1.055.13-1.752.13-.696 0-1.278-.03-1.752-.13-.48-.1-.901-.283-1.218-.624-.315-.34-.463-.766-.54-1.224A7.54 7.54 0 0 1 9.908 6.1H6.7c-.57 0-.96 0-1.264.025-.297.024-.456.069-.571.127a1.4 1.4 0 0 0-.612.612c-.059.115-.103.275-.127.571C4.1 7.738 4.1 8.13 4.1 8.7v2.6c0 .57 0 .961.026 1.264.024.297.068.456.127.571a1.4 1.4 0 0 0 .612.612c.115.059.274.103.57.127.277.023.626.025 1.117.026l-.976-.976.849-.848 2 2 .424.424-.424.424-2 2-.849-.848ZM11.101 5.5c0 .625.016 1.08.073 1.425.057.339.144.506.235.604.089.096.246.195.586.266.347.073.827.105 1.506.105.678 0 1.158-.032 1.505-.105.34-.07.497-.17.586-.266.091-.098.178-.265.235-.604.057-.345.073-.8.073-1.425 0-.626-.015-1.082-.071-1.427-.055-.34-.141-.506-.23-.604-.088-.094-.243-.193-.584-.265-.348-.072-.83-.104-1.514-.104s-1.167.032-1.515.104c-.34.072-.496.171-.583.265-.09.098-.176.264-.231.604-.056.345-.072.8-.072 1.427Z"
        clipRule="evenodd"
      />
    </svg>
  )
})

export default SvgMoveDownIcon
