import { useTheme } from '@tamagui/core'
import { Path, Svg } from 'react-native-svg'

import type { IconProps } from '../types'

const SvgSubscriptIcon = (props: IconProps) => {
  const { color: token = '$neutral-100' } = props
  const theme = useTheme()
  /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const color = theme[token]?.val ?? token
  return (
    <Svg
      width={20}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M18.664 16.768c.123 0 .216.032.28.096.064.07.096.16.096.272v.672h-4.152v-.376c0-.075.014-.152.04-.232a.757.757 0 0 1 .152-.232l1.744-1.72c.267-.256.488-.525.664-.808.181-.283.272-.56.272-.832 0-.256-.075-.453-.224-.592a.763.763 0 0 0-.552-.208.833.833 0 0 0-.56.184c-.139.117-.242.28-.312.488a.566.566 0 0 1-.2.216c-.07.037-.181.043-.336.016l-.624-.104c.037-.288.115-.539.232-.752.123-.219.275-.397.456-.536.181-.144.39-.25.624-.32.24-.075.499-.112.776-.112.288 0 .547.043.776.128.23.08.424.195.584.344.16.144.283.32.368.528.09.208.136.435.136.68 0 .213-.035.413-.104.6a2.275 2.275 0 0 1-.264.52c-.112.165-.24.328-.384.488-.144.155-.293.312-.448.472l-1.216 1.24a3.32 3.32 0 0 1 .384-.088 2.2 2.2 0 0 1 .36-.032h1.432Z"
        fill={color}
      />
      <Path
        d="m18.944 16.864.074-.068-.003-.003-.07.071Zm.096.944v.1h.1v-.1h-.1Zm-4.152 0h-.1v.1h.1v-.1Zm.04-.608-.093-.037-.002.005.095.032Zm.152-.232-.07-.071-.003.003.073.068Zm1.744-1.72-.07-.072.07.072Zm.664-.808-.084-.054v.001l.084.053Zm.048-1.424-.07.072.002.001.068-.073Zm-1.112-.024.065.076-.065-.076Zm-.312.488.087.05.005-.009.003-.01-.095-.031Zm-.2.216.048.088.002-.001-.05-.087Zm-.336.016.017-.098-.017.098Zm-.624-.104-.099-.013-.012.096.095.016.016-.099Zm.232-.752-.087-.049.087.049Zm.456-.536.06.08.002-.002-.062-.078Zm.624-.32.029.096-.029-.096Zm1.552.016-.035.094h.002l.033-.094Zm.584.344-.068.073.001.001.067-.074Zm.368.528-.092.038v.002l.092-.04Zm.032 1.28-.094-.035v.002l.094.033Zm-.648 1.008.073.068.002-.001-.075-.067Zm-.448.472.072.07-.072-.07Zm-1.216 1.24-.071-.07-.268.273.367-.107-.028-.096Zm.384-.088.017.099-.017-.099Zm1.792.068c.106 0 .17.027.21.067l.14-.142a.478.478 0 0 0-.35-.125v.2Zm.207.064c.044.047.07.112.07.204h.2a.484.484 0 0 0-.123-.34l-.147.136Zm.07.204v.672h.2v-.672h-.2Zm.1.572h-4.153v.2h4.152v-.2Zm-4.053.1v-.376h-.2v.376h.2Zm0-.376c0-.063.011-.13.035-.2l-.19-.064a.83.83 0 0 0-.045.264h.2Zm.033-.195a.656.656 0 0 1 .132-.201l-.146-.136a.854.854 0 0 0-.172.263l.186.074Zm.13-.198 1.743-1.72-.14-.142-1.744 1.72.14.142Zm1.742-1.719c.272-.261.5-.537.68-.827l-.17-.106a4.105 4.105 0 0 1-.648.789l.138.144Zm.68-.826c.189-.295.287-.59.287-.886h-.2c0 .249-.083.508-.256.778l.168.108Zm.287-.886c0-.276-.081-.503-.256-.665l-.136.146c.124.115.192.283.192.519h.2Zm-.255-.664a.863.863 0 0 0-.62-.236v.2c.2 0 .359.062.482.18l.139-.144Zm-.62-.236a.933.933 0 0 0-.626.208l.13.152c.122-.104.284-.16.495-.16v-.2Zm-.625.208a1.16 1.16 0 0 0-.343.532l.19.064a.961.961 0 0 1 .282-.444l-.13-.152Zm-.334.514a.468.468 0 0 1-.163.18l.099.173a.664.664 0 0 0 .237-.253l-.173-.1Zm-.161.178c-.038.02-.12.031-.272.005l-.034.197c.158.028.3.028.4-.026l-.094-.176Zm-.272.005-.624-.104-.033.198.624.104.033-.198Zm-.542.008c.036-.278.11-.516.22-.717l-.175-.096a2.21 2.21 0 0 0-.243.787l.198.026Zm.22-.716c.117-.208.26-.376.43-.506l-.122-.158a1.827 1.827 0 0 0-.482.566l.174.098Zm.431-.507c.171-.135.367-.236.59-.302l-.056-.192a1.924 1.924 0 0 0-.658.338l.124.156Zm.592-.303a2.5 2.5 0 0 1 .746-.107v-.2c-.286 0-.555.039-.806.117l.06.19Zm.746-.107c.278 0 .525.041.741.122l.07-.188a2.312 2.312 0 0 0-.81-.134v.2Zm.743.122c.218.076.4.184.549.323l.136-.146a1.73 1.73 0 0 0-.619-.365l-.066.188Zm.55.324c.149.134.263.297.343.492l.185-.076a1.528 1.528 0 0 0-.394-.564l-.134.148Zm.344.494c.084.194.127.407.127.64h.2c0-.258-.048-.498-.144-.72l-.183.08Zm.127.64c0 .202-.033.39-.098.565l.188.07c.074-.199.11-.41.11-.635h-.2Zm-.098.567a2.171 2.171 0 0 1-.253.497l.166.112c.116-.172.209-.353.275-.543l-.188-.066Zm-.253.497c-.109.161-.234.32-.375.477l.149.134c.146-.163.277-.33.392-.499l-.166-.112Zm-.374.476c-.144.154-.293.31-.447.47l.144.14c.155-.16.305-.319.45-.474l-.147-.136Zm-.446.47-1.216 1.24.142.14 1.216-1.24-.142-.14Zm-1.117 1.406c.124-.036.249-.065.373-.085l-.033-.198a3.423 3.423 0 0 0-.396.091l.056.192Zm.373-.085c.123-.02.237-.031.343-.031v-.2c-.118 0-.244.011-.376.033l.033.198Zm.343-.031h1.432v-.2h-1.432v.2Z"
        fill={color}
      />
      <Path
        d="m13 15.5-6-11M7 15.5l6-11"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}
export default SvgSubscriptIcon
