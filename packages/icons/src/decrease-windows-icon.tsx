import { createIcon } from '../lib/create-icon'

const SvgDecreaseWindowsIcon = createIcon(props => {
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
        d="M14.445 14.445c.534-.104.998-.29 1.354-.646.462-.46.637-1.102.72-1.842.081-.736.081-1.701.081-2.918v-.078c0-1.217 0-2.182-.082-2.918-.082-.74-.258-1.381-.719-1.842-.46-.461-1.102-.637-1.842-.72-.736-.081-1.701-.081-2.918-.081h-.079c-1.216 0-2.18 0-2.917.082-.74.082-1.381.258-1.842.719-.357.356-.542.82-.646 1.354-.534.104-.998.29-1.354.646-.461.46-.637 1.102-.72 1.842C3.4 8.78 3.4 9.744 3.4 10.961v.078c0 1.217 0 2.182.082 2.918.082.74.258 1.381.719 1.842.46.461 1.102.637 1.842.72.736.081 1.701.081 2.918.081h.078c1.217 0 2.182 0 2.918-.082.74-.082 1.381-.258 1.842-.719.357-.356.542-.82.646-1.354Zm.13-1.273a.98.98 0 0 0 .376-.221c.163-.164.3-.46.374-1.127.074-.662.075-1.56.075-2.824 0-1.265 0-2.162-.075-2.824-.073-.667-.21-.963-.374-1.127-.164-.164-.46-.3-1.127-.375-.662-.073-1.56-.074-2.824-.074-1.265 0-2.162 0-2.824.074-.667.075-.963.211-1.127.375a.981.981 0 0 0-.221.376C7.428 5.4 8.137 5.4 8.96 5.4h.079c1.216 0 2.18 0 2.917.082.74.082 1.381.258 1.842.719.462.46.637 1.102.72 1.842.081.736.081 1.701.081 2.918v.078c0 .824 0 1.533-.025 2.133ZM4.6 11c0-1.265 0-2.162.074-2.824.075-.667.211-.963.375-1.127.164-.164.46-.3 1.127-.375C6.838 6.601 7.736 6.6 9 6.6c1.265 0 2.162 0 2.824.074.667.074.963.211 1.127.375.163.164.3.46.374 1.127.074.662.075 1.56.075 2.824 0 1.265 0 2.162-.075 2.824-.073.667-.21.963-.374 1.127-.164.163-.46.3-1.127.374-.662.074-1.56.075-2.824.075-1.265 0-2.162 0-2.824-.075-.667-.073-.963-.21-1.127-.374-.164-.164-.3-.46-.375-1.127-.073-.662-.074-1.56-.074-2.824Z"
        clipRule="evenodd"
      />
    </svg>
  )
})

export default SvgDecreaseWindowsIcon
