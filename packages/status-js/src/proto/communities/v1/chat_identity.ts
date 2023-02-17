/* eslint-disable */
import Long from 'long'
import * as _m0 from 'protobufjs/minimal'
import {
  ImageType,
  imageTypeFromJSON,
  imageTypeToJSON,
} from '../../communities/v1/enums'

export const protobufPackage = 'communities.v1'

/** Cha// ChatIdentity represents the user defined identity associated with their public chat key */
export interface ChatIdentity {
  /** Lamport timestamp of the message */
  clock: number
  /** ens_name is the valid ENS name associated with the chat key */
  ensName: string
  /** images is a string indexed mapping of images associated with an identity */
  images: { [key: string]: IdentityImage }
  /** display name is the user set identity */
  displayName: string
  /** description is the user set description */
  description: string
  color: string
  emoji: string
  socialLinks: SocialLink[]
  /**
   * first known message timestamp in seconds (valid only for community chats for now)
   * 0 - unknown
   * 1 - no messages
   */
  firstMessageTimestamp: number
}

export interface ChatIdentity_ImagesEntry {
  key: string
  value: IdentityImage | undefined
}

/** ProfileImage represents data associated with a user's profile image */
export interface IdentityImage {
  /**
   * payload is a context based payload for the profile image data,
   * context is determined by the `source_type`
   */
  payload: Uint8Array
  /** source_type signals the image payload source */
  sourceType: IdentityImage_SourceType
  /** image_type signals the image type and method of parsing the payload */
  imageType: ImageType
  /** encryption_keys is a list of encrypted keys that can be used to decrypted an encrypted payload */
  encryptionKeys: Uint8Array[]
  /** encrypted signals the encryption state of the payload, default is false. */
  encrypted: boolean
}

/** SourceType are the predefined types of image source allowed */
export enum IdentityImage_SourceType {
  UNKNOWN_SOURCE_TYPE = 0,
  /** RAW_PAYLOAD - RAW_PAYLOAD image byte data */
  RAW_PAYLOAD = 1,
  /**
   * ENS_AVATAR - ENS_AVATAR uses the ENS record's resolver get-text-data.avatar data
   * The `payload` field will be ignored if ENS_AVATAR is selected
   * The application will read and parse the ENS avatar data as image payload data, URLs will be ignored
   * The parent `ChatMessageIdentity` must have a valid `ens_name` set
   */
  ENS_AVATAR = 2,
  UNRECOGNIZED = -1,
}

export function identityImage_SourceTypeFromJSON(
  object: any
): IdentityImage_SourceType {
  switch (object) {
    case 0:
    case 'UNKNOWN_SOURCE_TYPE':
      return IdentityImage_SourceType.UNKNOWN_SOURCE_TYPE
    case 1:
    case 'RAW_PAYLOAD':
      return IdentityImage_SourceType.RAW_PAYLOAD
    case 2:
    case 'ENS_AVATAR':
      return IdentityImage_SourceType.ENS_AVATAR
    case -1:
    case 'UNRECOGNIZED':
    default:
      return IdentityImage_SourceType.UNRECOGNIZED
  }
}

export function identityImage_SourceTypeToJSON(
  object: IdentityImage_SourceType
): string {
  switch (object) {
    case IdentityImage_SourceType.UNKNOWN_SOURCE_TYPE:
      return 'UNKNOWN_SOURCE_TYPE'
    case IdentityImage_SourceType.RAW_PAYLOAD:
      return 'RAW_PAYLOAD'
    case IdentityImage_SourceType.ENS_AVATAR:
      return 'ENS_AVATAR'
    case IdentityImage_SourceType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED'
  }
}

/** SocialLinks represents social link assosiated with given chat identity (personal/community) */
export interface SocialLink {
  text: string
  url: string
}

function createBaseChatIdentity(): ChatIdentity {
  return {
    clock: 0,
    ensName: '',
    images: {},
    displayName: '',
    description: '',
    color: '',
    emoji: '',
    socialLinks: [],
    firstMessageTimestamp: 0,
  }
}

export const ChatIdentity = {
  encode(
    message: ChatIdentity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clock !== 0) {
      writer.uint32(8).uint64(message.clock)
    }
    if (message.ensName !== '') {
      writer.uint32(18).string(message.ensName)
    }
    Object.entries(message.images).forEach(([key, value]) => {
      ChatIdentity_ImagesEntry.encode(
        { key: key as any, value },
        writer.uint32(26).fork()
      ).ldelim()
    })
    if (message.displayName !== '') {
      writer.uint32(34).string(message.displayName)
    }
    if (message.description !== '') {
      writer.uint32(42).string(message.description)
    }
    if (message.color !== '') {
      writer.uint32(50).string(message.color)
    }
    if (message.emoji !== '') {
      writer.uint32(58).string(message.emoji)
    }
    for (const v of message.socialLinks) {
      SocialLink.encode(v!, writer.uint32(66).fork()).ldelim()
    }
    if (message.firstMessageTimestamp !== 0) {
      writer.uint32(72).uint32(message.firstMessageTimestamp)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChatIdentity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseChatIdentity()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.clock = longToNumber(reader.uint64() as Long)
          break
        case 2:
          message.ensName = reader.string()
          break
        case 3:
          const entry3 = ChatIdentity_ImagesEntry.decode(
            reader,
            reader.uint32()
          )
          if (entry3.value !== undefined) {
            message.images[entry3.key] = entry3.value
          }
          break
        case 4:
          message.displayName = reader.string()
          break
        case 5:
          message.description = reader.string()
          break
        case 6:
          message.color = reader.string()
          break
        case 7:
          message.emoji = reader.string()
          break
        case 8:
          message.socialLinks.push(SocialLink.decode(reader, reader.uint32()))
          break
        case 9:
          message.firstMessageTimestamp = reader.uint32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): ChatIdentity {
    return {
      clock: isSet(object.clock) ? Number(object.clock) : 0,
      ensName: isSet(object.ensName) ? String(object.ensName) : '',
      images: isObject(object.images)
        ? Object.entries(object.images).reduce<{
            [key: string]: IdentityImage
          }>((acc, [key, value]) => {
            acc[key] = IdentityImage.fromJSON(value)
            return acc
          }, {})
        : {},
      displayName: isSet(object.displayName) ? String(object.displayName) : '',
      description: isSet(object.description) ? String(object.description) : '',
      color: isSet(object.color) ? String(object.color) : '',
      emoji: isSet(object.emoji) ? String(object.emoji) : '',
      socialLinks: Array.isArray(object?.socialLinks)
        ? object.socialLinks.map((e: any) => SocialLink.fromJSON(e))
        : [],
      firstMessageTimestamp: isSet(object.firstMessageTimestamp)
        ? Number(object.firstMessageTimestamp)
        : 0,
    }
  },

  toJSON(message: ChatIdentity): unknown {
    const obj: any = {}
    message.clock !== undefined && (obj.clock = Math.round(message.clock))
    message.ensName !== undefined && (obj.ensName = message.ensName)
    obj.images = {}
    if (message.images) {
      Object.entries(message.images).forEach(([k, v]) => {
        obj.images[k] = IdentityImage.toJSON(v)
      })
    }
    message.displayName !== undefined && (obj.displayName = message.displayName)
    message.description !== undefined && (obj.description = message.description)
    message.color !== undefined && (obj.color = message.color)
    message.emoji !== undefined && (obj.emoji = message.emoji)
    if (message.socialLinks) {
      obj.socialLinks = message.socialLinks.map(e =>
        e ? SocialLink.toJSON(e) : undefined
      )
    } else {
      obj.socialLinks = []
    }
    message.firstMessageTimestamp !== undefined &&
      (obj.firstMessageTimestamp = Math.round(message.firstMessageTimestamp))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<ChatIdentity>, I>>(
    object: I
  ): ChatIdentity {
    const message = createBaseChatIdentity()
    message.clock = object.clock ?? 0
    message.ensName = object.ensName ?? ''
    message.images = Object.entries(object.images ?? {}).reduce<{
      [key: string]: IdentityImage
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = IdentityImage.fromPartial(value)
      }
      return acc
    }, {})
    message.displayName = object.displayName ?? ''
    message.description = object.description ?? ''
    message.color = object.color ?? ''
    message.emoji = object.emoji ?? ''
    message.socialLinks =
      object.socialLinks?.map(e => SocialLink.fromPartial(e)) || []
    message.firstMessageTimestamp = object.firstMessageTimestamp ?? 0
    return message
  },
}

function createBaseChatIdentity_ImagesEntry(): ChatIdentity_ImagesEntry {
  return { key: '', value: undefined }
}

export const ChatIdentity_ImagesEntry = {
  encode(
    message: ChatIdentity_ImagesEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== '') {
      writer.uint32(10).string(message.key)
    }
    if (message.value !== undefined) {
      IdentityImage.encode(message.value, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ChatIdentity_ImagesEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseChatIdentity_ImagesEntry()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string()
          break
        case 2:
          message.value = IdentityImage.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): ChatIdentity_ImagesEntry {
    return {
      key: isSet(object.key) ? String(object.key) : '',
      value: isSet(object.value)
        ? IdentityImage.fromJSON(object.value)
        : undefined,
    }
  },

  toJSON(message: ChatIdentity_ImagesEntry): unknown {
    const obj: any = {}
    message.key !== undefined && (obj.key = message.key)
    message.value !== undefined &&
      (obj.value = message.value
        ? IdentityImage.toJSON(message.value)
        : undefined)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<ChatIdentity_ImagesEntry>, I>>(
    object: I
  ): ChatIdentity_ImagesEntry {
    const message = createBaseChatIdentity_ImagesEntry()
    message.key = object.key ?? ''
    message.value =
      object.value !== undefined && object.value !== null
        ? IdentityImage.fromPartial(object.value)
        : undefined
    return message
  },
}

function createBaseIdentityImage(): IdentityImage {
  return {
    payload: new Uint8Array(),
    sourceType: 0,
    imageType: 0,
    encryptionKeys: [],
    encrypted: false,
  }
}

export const IdentityImage = {
  encode(
    message: IdentityImage,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.payload.length !== 0) {
      writer.uint32(10).bytes(message.payload)
    }
    if (message.sourceType !== 0) {
      writer.uint32(16).int32(message.sourceType)
    }
    if (message.imageType !== 0) {
      writer.uint32(24).int32(message.imageType)
    }
    for (const v of message.encryptionKeys) {
      writer.uint32(34).bytes(v!)
    }
    if (message.encrypted === true) {
      writer.uint32(40).bool(message.encrypted)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IdentityImage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseIdentityImage()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.payload = reader.bytes()
          break
        case 2:
          message.sourceType = reader.int32() as any
          break
        case 3:
          message.imageType = reader.int32() as any
          break
        case 4:
          message.encryptionKeys.push(reader.bytes())
          break
        case 5:
          message.encrypted = reader.bool()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): IdentityImage {
    return {
      payload: isSet(object.payload)
        ? bytesFromBase64(object.payload)
        : new Uint8Array(),
      sourceType: isSet(object.sourceType)
        ? identityImage_SourceTypeFromJSON(object.sourceType)
        : 0,
      imageType: isSet(object.imageType)
        ? imageTypeFromJSON(object.imageType)
        : 0,
      encryptionKeys: Array.isArray(object?.encryptionKeys)
        ? object.encryptionKeys.map((e: any) => bytesFromBase64(e))
        : [],
      encrypted: isSet(object.encrypted) ? Boolean(object.encrypted) : false,
    }
  },

  toJSON(message: IdentityImage): unknown {
    const obj: any = {}
    message.payload !== undefined &&
      (obj.payload = base64FromBytes(
        message.payload !== undefined ? message.payload : new Uint8Array()
      ))
    message.sourceType !== undefined &&
      (obj.sourceType = identityImage_SourceTypeToJSON(message.sourceType))
    message.imageType !== undefined &&
      (obj.imageType = imageTypeToJSON(message.imageType))
    if (message.encryptionKeys) {
      obj.encryptionKeys = message.encryptionKeys.map(e =>
        base64FromBytes(e !== undefined ? e : new Uint8Array())
      )
    } else {
      obj.encryptionKeys = []
    }
    message.encrypted !== undefined && (obj.encrypted = message.encrypted)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<IdentityImage>, I>>(
    object: I
  ): IdentityImage {
    const message = createBaseIdentityImage()
    message.payload = object.payload ?? new Uint8Array()
    message.sourceType = object.sourceType ?? 0
    message.imageType = object.imageType ?? 0
    message.encryptionKeys = object.encryptionKeys?.map(e => e) || []
    message.encrypted = object.encrypted ?? false
    return message
  },
}

function createBaseSocialLink(): SocialLink {
  return { text: '', url: '' }
}

export const SocialLink = {
  encode(
    message: SocialLink,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.text !== '') {
      writer.uint32(10).string(message.text)
    }
    if (message.url !== '') {
      writer.uint32(18).string(message.url)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SocialLink {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseSocialLink()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.text = reader.string()
          break
        case 2:
          message.url = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): SocialLink {
    return {
      text: isSet(object.text) ? String(object.text) : '',
      url: isSet(object.url) ? String(object.url) : '',
    }
  },

  toJSON(message: SocialLink): unknown {
    const obj: any = {}
    message.text !== undefined && (obj.text = message.text)
    message.url !== undefined && (obj.url = message.url)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<SocialLink>, I>>(
    object: I
  ): SocialLink {
    const message = createBaseSocialLink()
    message.text = object.text ?? ''
    message.url = object.url ?? ''
    return message
  },
}

declare var self: any | undefined
declare var window: any | undefined
declare var global: any | undefined
var globalThis: any = (() => {
  if (typeof globalThis !== 'undefined') return globalThis
  if (typeof self !== 'undefined') return self
  if (typeof window !== 'undefined') return window
  if (typeof global !== 'undefined') return global
  throw 'Unable to locate global object'
})()

const atob: (b64: string) => string =
  globalThis.atob ||
  (b64 => globalThis.Buffer.from(b64, 'base64').toString('binary'))
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64)
  const arr = new Uint8Array(bin.length)
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i)
  }
  return arr
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  (bin => globalThis.Buffer.from(bin, 'binary').toString('base64'))
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = []
  arr.forEach(byte => {
    bin.push(String.fromCharCode(byte))
  })
  return btoa(bin.join(''))
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>

type KeysOfUnion<T> = T extends T ? keyof T : never
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER')
  }
  return long.toNumber()
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any
  _m0.configure()
}

function isObject(value: any): boolean {
  return typeof value === 'object' && value !== null
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined
}
