/* eslint-disable */
import Long from 'long'
import * as _m0 from 'protobufjs/minimal'

export const protobufPackage = 'communities.v1'

export enum MessageType {
  UNKNOWN_MESSAGE_TYPE = 0,
  ONE_TO_ONE = 1,
  PUBLIC_GROUP = 2,
  PRIVATE_GROUP = 3,
  /** SYSTEM_MESSAGE_PRIVATE_GROUP - Only local */
  SYSTEM_MESSAGE_PRIVATE_GROUP = 4,
  COMMUNITY_CHAT = 5,
  /** SYSTEM_MESSAGE_GAP - Only local */
  SYSTEM_MESSAGE_GAP = 6,
  UNRECOGNIZED = -1,
}

export function messageTypeFromJSON(object: any): MessageType {
  switch (object) {
    case 0:
    case 'UNKNOWN_MESSAGE_TYPE':
      return MessageType.UNKNOWN_MESSAGE_TYPE
    case 1:
    case 'ONE_TO_ONE':
      return MessageType.ONE_TO_ONE
    case 2:
    case 'PUBLIC_GROUP':
      return MessageType.PUBLIC_GROUP
    case 3:
    case 'PRIVATE_GROUP':
      return MessageType.PRIVATE_GROUP
    case 4:
    case 'SYSTEM_MESSAGE_PRIVATE_GROUP':
      return MessageType.SYSTEM_MESSAGE_PRIVATE_GROUP
    case 5:
    case 'COMMUNITY_CHAT':
      return MessageType.COMMUNITY_CHAT
    case 6:
    case 'SYSTEM_MESSAGE_GAP':
      return MessageType.SYSTEM_MESSAGE_GAP
    case -1:
    case 'UNRECOGNIZED':
    default:
      return MessageType.UNRECOGNIZED
  }
}

export function messageTypeToJSON(object: MessageType): string {
  switch (object) {
    case MessageType.UNKNOWN_MESSAGE_TYPE:
      return 'UNKNOWN_MESSAGE_TYPE'
    case MessageType.ONE_TO_ONE:
      return 'ONE_TO_ONE'
    case MessageType.PUBLIC_GROUP:
      return 'PUBLIC_GROUP'
    case MessageType.PRIVATE_GROUP:
      return 'PRIVATE_GROUP'
    case MessageType.SYSTEM_MESSAGE_PRIVATE_GROUP:
      return 'SYSTEM_MESSAGE_PRIVATE_GROUP'
    case MessageType.COMMUNITY_CHAT:
      return 'COMMUNITY_CHAT'
    case MessageType.SYSTEM_MESSAGE_GAP:
      return 'SYSTEM_MESSAGE_GAP'
    case MessageType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED'
  }
}

export enum ImageType {
  UNKNOWN_IMAGE_TYPE = 0,
  /** PNG - Raster image files is payload data that can be read as a raster image */
  PNG = 1,
  JPEG = 2,
  WEBP = 3,
  GIF = 4,
  UNRECOGNIZED = -1,
}

export function imageTypeFromJSON(object: any): ImageType {
  switch (object) {
    case 0:
    case 'UNKNOWN_IMAGE_TYPE':
      return ImageType.UNKNOWN_IMAGE_TYPE
    case 1:
    case 'PNG':
      return ImageType.PNG
    case 2:
    case 'JPEG':
      return ImageType.JPEG
    case 3:
    case 'WEBP':
      return ImageType.WEBP
    case 4:
    case 'GIF':
      return ImageType.GIF
    case -1:
    case 'UNRECOGNIZED':
    default:
      return ImageType.UNRECOGNIZED
  }
}

export function imageTypeToJSON(object: ImageType): string {
  switch (object) {
    case ImageType.UNKNOWN_IMAGE_TYPE:
      return 'UNKNOWN_IMAGE_TYPE'
    case ImageType.PNG:
      return 'PNG'
    case ImageType.JPEG:
      return 'JPEG'
    case ImageType.WEBP:
      return 'WEBP'
    case ImageType.GIF:
      return 'GIF'
    case ImageType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED'
  }
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any
  _m0.configure()
}
