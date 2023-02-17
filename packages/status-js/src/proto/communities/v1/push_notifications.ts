/* eslint-disable */
import Long from 'long'
import * as _m0 from 'protobufjs/minimal'
import { ChatIdentity } from '../../communities/v1/chat_identity'

export const protobufPackage = 'communities.v1'

export interface PushNotificationRegistration {
  tokenType: PushNotificationRegistration_TokenType
  deviceToken: string
  installationId: string
  accessToken: string
  enabled: boolean
  version: number
  allowedKeyList: Uint8Array[]
  blockedChatList: Uint8Array[]
  unregister: boolean
  grant: Uint8Array
  allowFromContactsOnly: boolean
  apnTopic: string
  blockMentions: boolean
  allowedMentionsChatList: Uint8Array[]
}

export enum PushNotificationRegistration_TokenType {
  UNKNOWN_TOKEN_TYPE = 0,
  APN_TOKEN = 1,
  FIREBASE_TOKEN = 2,
  UNRECOGNIZED = -1,
}

export function pushNotificationRegistration_TokenTypeFromJSON(
  object: any
): PushNotificationRegistration_TokenType {
  switch (object) {
    case 0:
    case 'UNKNOWN_TOKEN_TYPE':
      return PushNotificationRegistration_TokenType.UNKNOWN_TOKEN_TYPE
    case 1:
    case 'APN_TOKEN':
      return PushNotificationRegistration_TokenType.APN_TOKEN
    case 2:
    case 'FIREBASE_TOKEN':
      return PushNotificationRegistration_TokenType.FIREBASE_TOKEN
    case -1:
    case 'UNRECOGNIZED':
    default:
      return PushNotificationRegistration_TokenType.UNRECOGNIZED
  }
}

export function pushNotificationRegistration_TokenTypeToJSON(
  object: PushNotificationRegistration_TokenType
): string {
  switch (object) {
    case PushNotificationRegistration_TokenType.UNKNOWN_TOKEN_TYPE:
      return 'UNKNOWN_TOKEN_TYPE'
    case PushNotificationRegistration_TokenType.APN_TOKEN:
      return 'APN_TOKEN'
    case PushNotificationRegistration_TokenType.FIREBASE_TOKEN:
      return 'FIREBASE_TOKEN'
    case PushNotificationRegistration_TokenType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED'
  }
}

export interface PushNotificationRegistrationResponse {
  success: boolean
  error: PushNotificationRegistrationResponse_ErrorType
  requestId: Uint8Array
}

export enum PushNotificationRegistrationResponse_ErrorType {
  UNKNOWN_ERROR_TYPE = 0,
  MALFORMED_MESSAGE = 1,
  VERSION_MISMATCH = 2,
  UNSUPPORTED_TOKEN_TYPE = 3,
  INTERNAL_ERROR = 4,
  UNRECOGNIZED = -1,
}

export function pushNotificationRegistrationResponse_ErrorTypeFromJSON(
  object: any
): PushNotificationRegistrationResponse_ErrorType {
  switch (object) {
    case 0:
    case 'UNKNOWN_ERROR_TYPE':
      return PushNotificationRegistrationResponse_ErrorType.UNKNOWN_ERROR_TYPE
    case 1:
    case 'MALFORMED_MESSAGE':
      return PushNotificationRegistrationResponse_ErrorType.MALFORMED_MESSAGE
    case 2:
    case 'VERSION_MISMATCH':
      return PushNotificationRegistrationResponse_ErrorType.VERSION_MISMATCH
    case 3:
    case 'UNSUPPORTED_TOKEN_TYPE':
      return PushNotificationRegistrationResponse_ErrorType.UNSUPPORTED_TOKEN_TYPE
    case 4:
    case 'INTERNAL_ERROR':
      return PushNotificationRegistrationResponse_ErrorType.INTERNAL_ERROR
    case -1:
    case 'UNRECOGNIZED':
    default:
      return PushNotificationRegistrationResponse_ErrorType.UNRECOGNIZED
  }
}

export function pushNotificationRegistrationResponse_ErrorTypeToJSON(
  object: PushNotificationRegistrationResponse_ErrorType
): string {
  switch (object) {
    case PushNotificationRegistrationResponse_ErrorType.UNKNOWN_ERROR_TYPE:
      return 'UNKNOWN_ERROR_TYPE'
    case PushNotificationRegistrationResponse_ErrorType.MALFORMED_MESSAGE:
      return 'MALFORMED_MESSAGE'
    case PushNotificationRegistrationResponse_ErrorType.VERSION_MISMATCH:
      return 'VERSION_MISMATCH'
    case PushNotificationRegistrationResponse_ErrorType.UNSUPPORTED_TOKEN_TYPE:
      return 'UNSUPPORTED_TOKEN_TYPE'
    case PushNotificationRegistrationResponse_ErrorType.INTERNAL_ERROR:
      return 'INTERNAL_ERROR'
    case PushNotificationRegistrationResponse_ErrorType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED'
  }
}

export interface ContactCodeAdvertisement {
  pushNotificationInfo: PushNotificationQueryInfo[]
  chatIdentity: ChatIdentity | undefined
}

export interface PushNotificationQuery {
  publicKeys: Uint8Array[]
}

export interface PushNotificationQueryInfo {
  accessToken: string
  installationId: string
  publicKey: Uint8Array
  allowedKeyList: Uint8Array[]
  grant: Uint8Array
  version: number
  serverPublicKey: Uint8Array
}

export interface PushNotificationQueryResponse {
  info: PushNotificationQueryInfo[]
  messageId: Uint8Array
  success: boolean
}

export interface PushNotification {
  accessToken: string
  chatId: Uint8Array
  publicKey: Uint8Array
  installationId: string
  message: Uint8Array
  type: PushNotification_PushNotificationType
  author: Uint8Array
}

export enum PushNotification_PushNotificationType {
  UNKNOWN_PUSH_NOTIFICATION_TYPE = 0,
  MESSAGE = 1,
  MENTION = 2,
  REQUEST_TO_JOIN_COMMUNITY = 3,
  UNRECOGNIZED = -1,
}

export function pushNotification_PushNotificationTypeFromJSON(
  object: any
): PushNotification_PushNotificationType {
  switch (object) {
    case 0:
    case 'UNKNOWN_PUSH_NOTIFICATION_TYPE':
      return PushNotification_PushNotificationType.UNKNOWN_PUSH_NOTIFICATION_TYPE
    case 1:
    case 'MESSAGE':
      return PushNotification_PushNotificationType.MESSAGE
    case 2:
    case 'MENTION':
      return PushNotification_PushNotificationType.MENTION
    case 3:
    case 'REQUEST_TO_JOIN_COMMUNITY':
      return PushNotification_PushNotificationType.REQUEST_TO_JOIN_COMMUNITY
    case -1:
    case 'UNRECOGNIZED':
    default:
      return PushNotification_PushNotificationType.UNRECOGNIZED
  }
}

export function pushNotification_PushNotificationTypeToJSON(
  object: PushNotification_PushNotificationType
): string {
  switch (object) {
    case PushNotification_PushNotificationType.UNKNOWN_PUSH_NOTIFICATION_TYPE:
      return 'UNKNOWN_PUSH_NOTIFICATION_TYPE'
    case PushNotification_PushNotificationType.MESSAGE:
      return 'MESSAGE'
    case PushNotification_PushNotificationType.MENTION:
      return 'MENTION'
    case PushNotification_PushNotificationType.REQUEST_TO_JOIN_COMMUNITY:
      return 'REQUEST_TO_JOIN_COMMUNITY'
    case PushNotification_PushNotificationType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED'
  }
}

export interface PushNotificationRequest {
  requests: PushNotification[]
  messageId: Uint8Array
}

export interface PushNotificationReport {
  success: boolean
  error: PushNotificationReport_ErrorType
  publicKey: Uint8Array
  installationId: string
}

export enum PushNotificationReport_ErrorType {
  UNKNOWN_ERROR_TYPE = 0,
  WRONG_TOKEN = 1,
  INTERNAL_ERROR = 2,
  NOT_REGISTERED = 3,
  UNRECOGNIZED = -1,
}

export function pushNotificationReport_ErrorTypeFromJSON(
  object: any
): PushNotificationReport_ErrorType {
  switch (object) {
    case 0:
    case 'UNKNOWN_ERROR_TYPE':
      return PushNotificationReport_ErrorType.UNKNOWN_ERROR_TYPE
    case 1:
    case 'WRONG_TOKEN':
      return PushNotificationReport_ErrorType.WRONG_TOKEN
    case 2:
    case 'INTERNAL_ERROR':
      return PushNotificationReport_ErrorType.INTERNAL_ERROR
    case 3:
    case 'NOT_REGISTERED':
      return PushNotificationReport_ErrorType.NOT_REGISTERED
    case -1:
    case 'UNRECOGNIZED':
    default:
      return PushNotificationReport_ErrorType.UNRECOGNIZED
  }
}

export function pushNotificationReport_ErrorTypeToJSON(
  object: PushNotificationReport_ErrorType
): string {
  switch (object) {
    case PushNotificationReport_ErrorType.UNKNOWN_ERROR_TYPE:
      return 'UNKNOWN_ERROR_TYPE'
    case PushNotificationReport_ErrorType.WRONG_TOKEN:
      return 'WRONG_TOKEN'
    case PushNotificationReport_ErrorType.INTERNAL_ERROR:
      return 'INTERNAL_ERROR'
    case PushNotificationReport_ErrorType.NOT_REGISTERED:
      return 'NOT_REGISTERED'
    case PushNotificationReport_ErrorType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED'
  }
}

export interface PushNotificationResponse {
  messageId: Uint8Array
  reports: PushNotificationReport[]
}

function createBasePushNotificationRegistration(): PushNotificationRegistration {
  return {
    tokenType: 0,
    deviceToken: '',
    installationId: '',
    accessToken: '',
    enabled: false,
    version: 0,
    allowedKeyList: [],
    blockedChatList: [],
    unregister: false,
    grant: new Uint8Array(),
    allowFromContactsOnly: false,
    apnTopic: '',
    blockMentions: false,
    allowedMentionsChatList: [],
  }
}

export const PushNotificationRegistration = {
  encode(
    message: PushNotificationRegistration,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.tokenType !== 0) {
      writer.uint32(8).int32(message.tokenType)
    }
    if (message.deviceToken !== '') {
      writer.uint32(18).string(message.deviceToken)
    }
    if (message.installationId !== '') {
      writer.uint32(26).string(message.installationId)
    }
    if (message.accessToken !== '') {
      writer.uint32(34).string(message.accessToken)
    }
    if (message.enabled === true) {
      writer.uint32(40).bool(message.enabled)
    }
    if (message.version !== 0) {
      writer.uint32(48).uint64(message.version)
    }
    for (const v of message.allowedKeyList) {
      writer.uint32(58).bytes(v!)
    }
    for (const v of message.blockedChatList) {
      writer.uint32(66).bytes(v!)
    }
    if (message.unregister === true) {
      writer.uint32(72).bool(message.unregister)
    }
    if (message.grant.length !== 0) {
      writer.uint32(82).bytes(message.grant)
    }
    if (message.allowFromContactsOnly === true) {
      writer.uint32(88).bool(message.allowFromContactsOnly)
    }
    if (message.apnTopic !== '') {
      writer.uint32(98).string(message.apnTopic)
    }
    if (message.blockMentions === true) {
      writer.uint32(104).bool(message.blockMentions)
    }
    for (const v of message.allowedMentionsChatList) {
      writer.uint32(114).bytes(v!)
    }
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PushNotificationRegistration {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBasePushNotificationRegistration()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.tokenType = reader.int32() as any
          break
        case 2:
          message.deviceToken = reader.string()
          break
        case 3:
          message.installationId = reader.string()
          break
        case 4:
          message.accessToken = reader.string()
          break
        case 5:
          message.enabled = reader.bool()
          break
        case 6:
          message.version = longToNumber(reader.uint64() as Long)
          break
        case 7:
          message.allowedKeyList.push(reader.bytes())
          break
        case 8:
          message.blockedChatList.push(reader.bytes())
          break
        case 9:
          message.unregister = reader.bool()
          break
        case 10:
          message.grant = reader.bytes()
          break
        case 11:
          message.allowFromContactsOnly = reader.bool()
          break
        case 12:
          message.apnTopic = reader.string()
          break
        case 13:
          message.blockMentions = reader.bool()
          break
        case 14:
          message.allowedMentionsChatList.push(reader.bytes())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): PushNotificationRegistration {
    return {
      tokenType: isSet(object.tokenType)
        ? pushNotificationRegistration_TokenTypeFromJSON(object.tokenType)
        : 0,
      deviceToken: isSet(object.deviceToken) ? String(object.deviceToken) : '',
      installationId: isSet(object.installationId)
        ? String(object.installationId)
        : '',
      accessToken: isSet(object.accessToken) ? String(object.accessToken) : '',
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : false,
      version: isSet(object.version) ? Number(object.version) : 0,
      allowedKeyList: Array.isArray(object?.allowedKeyList)
        ? object.allowedKeyList.map((e: any) => bytesFromBase64(e))
        : [],
      blockedChatList: Array.isArray(object?.blockedChatList)
        ? object.blockedChatList.map((e: any) => bytesFromBase64(e))
        : [],
      unregister: isSet(object.unregister) ? Boolean(object.unregister) : false,
      grant: isSet(object.grant)
        ? bytesFromBase64(object.grant)
        : new Uint8Array(),
      allowFromContactsOnly: isSet(object.allowFromContactsOnly)
        ? Boolean(object.allowFromContactsOnly)
        : false,
      apnTopic: isSet(object.apnTopic) ? String(object.apnTopic) : '',
      blockMentions: isSet(object.blockMentions)
        ? Boolean(object.blockMentions)
        : false,
      allowedMentionsChatList: Array.isArray(object?.allowedMentionsChatList)
        ? object.allowedMentionsChatList.map((e: any) => bytesFromBase64(e))
        : [],
    }
  },

  toJSON(message: PushNotificationRegistration): unknown {
    const obj: any = {}
    message.tokenType !== undefined &&
      (obj.tokenType = pushNotificationRegistration_TokenTypeToJSON(
        message.tokenType
      ))
    message.deviceToken !== undefined && (obj.deviceToken = message.deviceToken)
    message.installationId !== undefined &&
      (obj.installationId = message.installationId)
    message.accessToken !== undefined && (obj.accessToken = message.accessToken)
    message.enabled !== undefined && (obj.enabled = message.enabled)
    message.version !== undefined && (obj.version = Math.round(message.version))
    if (message.allowedKeyList) {
      obj.allowedKeyList = message.allowedKeyList.map(e =>
        base64FromBytes(e !== undefined ? e : new Uint8Array())
      )
    } else {
      obj.allowedKeyList = []
    }
    if (message.blockedChatList) {
      obj.blockedChatList = message.blockedChatList.map(e =>
        base64FromBytes(e !== undefined ? e : new Uint8Array())
      )
    } else {
      obj.blockedChatList = []
    }
    message.unregister !== undefined && (obj.unregister = message.unregister)
    message.grant !== undefined &&
      (obj.grant = base64FromBytes(
        message.grant !== undefined ? message.grant : new Uint8Array()
      ))
    message.allowFromContactsOnly !== undefined &&
      (obj.allowFromContactsOnly = message.allowFromContactsOnly)
    message.apnTopic !== undefined && (obj.apnTopic = message.apnTopic)
    message.blockMentions !== undefined &&
      (obj.blockMentions = message.blockMentions)
    if (message.allowedMentionsChatList) {
      obj.allowedMentionsChatList = message.allowedMentionsChatList.map(e =>
        base64FromBytes(e !== undefined ? e : new Uint8Array())
      )
    } else {
      obj.allowedMentionsChatList = []
    }
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<PushNotificationRegistration>, I>>(
    object: I
  ): PushNotificationRegistration {
    const message = createBasePushNotificationRegistration()
    message.tokenType = object.tokenType ?? 0
    message.deviceToken = object.deviceToken ?? ''
    message.installationId = object.installationId ?? ''
    message.accessToken = object.accessToken ?? ''
    message.enabled = object.enabled ?? false
    message.version = object.version ?? 0
    message.allowedKeyList = object.allowedKeyList?.map(e => e) || []
    message.blockedChatList = object.blockedChatList?.map(e => e) || []
    message.unregister = object.unregister ?? false
    message.grant = object.grant ?? new Uint8Array()
    message.allowFromContactsOnly = object.allowFromContactsOnly ?? false
    message.apnTopic = object.apnTopic ?? ''
    message.blockMentions = object.blockMentions ?? false
    message.allowedMentionsChatList =
      object.allowedMentionsChatList?.map(e => e) || []
    return message
  },
}

function createBasePushNotificationRegistrationResponse(): PushNotificationRegistrationResponse {
  return { success: false, error: 0, requestId: new Uint8Array() }
}

export const PushNotificationRegistrationResponse = {
  encode(
    message: PushNotificationRegistrationResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.success === true) {
      writer.uint32(8).bool(message.success)
    }
    if (message.error !== 0) {
      writer.uint32(16).int32(message.error)
    }
    if (message.requestId.length !== 0) {
      writer.uint32(26).bytes(message.requestId)
    }
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PushNotificationRegistrationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBasePushNotificationRegistrationResponse()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool()
          break
        case 2:
          message.error = reader.int32() as any
          break
        case 3:
          message.requestId = reader.bytes()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): PushNotificationRegistrationResponse {
    return {
      success: isSet(object.success) ? Boolean(object.success) : false,
      error: isSet(object.error)
        ? pushNotificationRegistrationResponse_ErrorTypeFromJSON(object.error)
        : 0,
      requestId: isSet(object.requestId)
        ? bytesFromBase64(object.requestId)
        : new Uint8Array(),
    }
  },

  toJSON(message: PushNotificationRegistrationResponse): unknown {
    const obj: any = {}
    message.success !== undefined && (obj.success = message.success)
    message.error !== undefined &&
      (obj.error = pushNotificationRegistrationResponse_ErrorTypeToJSON(
        message.error
      ))
    message.requestId !== undefined &&
      (obj.requestId = base64FromBytes(
        message.requestId !== undefined ? message.requestId : new Uint8Array()
      ))
    return obj
  },

  fromPartial<
    I extends Exact<DeepPartial<PushNotificationRegistrationResponse>, I>
  >(object: I): PushNotificationRegistrationResponse {
    const message = createBasePushNotificationRegistrationResponse()
    message.success = object.success ?? false
    message.error = object.error ?? 0
    message.requestId = object.requestId ?? new Uint8Array()
    return message
  },
}

function createBaseContactCodeAdvertisement(): ContactCodeAdvertisement {
  return { pushNotificationInfo: [], chatIdentity: undefined }
}

export const ContactCodeAdvertisement = {
  encode(
    message: ContactCodeAdvertisement,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.pushNotificationInfo) {
      PushNotificationQueryInfo.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.chatIdentity !== undefined) {
      ChatIdentity.encode(
        message.chatIdentity,
        writer.uint32(18).fork()
      ).ldelim()
    }
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ContactCodeAdvertisement {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseContactCodeAdvertisement()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pushNotificationInfo.push(
            PushNotificationQueryInfo.decode(reader, reader.uint32())
          )
          break
        case 2:
          message.chatIdentity = ChatIdentity.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): ContactCodeAdvertisement {
    return {
      pushNotificationInfo: Array.isArray(object?.pushNotificationInfo)
        ? object.pushNotificationInfo.map((e: any) =>
            PushNotificationQueryInfo.fromJSON(e)
          )
        : [],
      chatIdentity: isSet(object.chatIdentity)
        ? ChatIdentity.fromJSON(object.chatIdentity)
        : undefined,
    }
  },

  toJSON(message: ContactCodeAdvertisement): unknown {
    const obj: any = {}
    if (message.pushNotificationInfo) {
      obj.pushNotificationInfo = message.pushNotificationInfo.map(e =>
        e ? PushNotificationQueryInfo.toJSON(e) : undefined
      )
    } else {
      obj.pushNotificationInfo = []
    }
    message.chatIdentity !== undefined &&
      (obj.chatIdentity = message.chatIdentity
        ? ChatIdentity.toJSON(message.chatIdentity)
        : undefined)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<ContactCodeAdvertisement>, I>>(
    object: I
  ): ContactCodeAdvertisement {
    const message = createBaseContactCodeAdvertisement()
    message.pushNotificationInfo =
      object.pushNotificationInfo?.map(e =>
        PushNotificationQueryInfo.fromPartial(e)
      ) || []
    message.chatIdentity =
      object.chatIdentity !== undefined && object.chatIdentity !== null
        ? ChatIdentity.fromPartial(object.chatIdentity)
        : undefined
    return message
  },
}

function createBasePushNotificationQuery(): PushNotificationQuery {
  return { publicKeys: [] }
}

export const PushNotificationQuery = {
  encode(
    message: PushNotificationQuery,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.publicKeys) {
      writer.uint32(10).bytes(v!)
    }
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PushNotificationQuery {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBasePushNotificationQuery()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.publicKeys.push(reader.bytes())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): PushNotificationQuery {
    return {
      publicKeys: Array.isArray(object?.publicKeys)
        ? object.publicKeys.map((e: any) => bytesFromBase64(e))
        : [],
    }
  },

  toJSON(message: PushNotificationQuery): unknown {
    const obj: any = {}
    if (message.publicKeys) {
      obj.publicKeys = message.publicKeys.map(e =>
        base64FromBytes(e !== undefined ? e : new Uint8Array())
      )
    } else {
      obj.publicKeys = []
    }
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<PushNotificationQuery>, I>>(
    object: I
  ): PushNotificationQuery {
    const message = createBasePushNotificationQuery()
    message.publicKeys = object.publicKeys?.map(e => e) || []
    return message
  },
}

function createBasePushNotificationQueryInfo(): PushNotificationQueryInfo {
  return {
    accessToken: '',
    installationId: '',
    publicKey: new Uint8Array(),
    allowedKeyList: [],
    grant: new Uint8Array(),
    version: 0,
    serverPublicKey: new Uint8Array(),
  }
}

export const PushNotificationQueryInfo = {
  encode(
    message: PushNotificationQueryInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.accessToken !== '') {
      writer.uint32(10).string(message.accessToken)
    }
    if (message.installationId !== '') {
      writer.uint32(18).string(message.installationId)
    }
    if (message.publicKey.length !== 0) {
      writer.uint32(26).bytes(message.publicKey)
    }
    for (const v of message.allowedKeyList) {
      writer.uint32(34).bytes(v!)
    }
    if (message.grant.length !== 0) {
      writer.uint32(42).bytes(message.grant)
    }
    if (message.version !== 0) {
      writer.uint32(48).uint64(message.version)
    }
    if (message.serverPublicKey.length !== 0) {
      writer.uint32(58).bytes(message.serverPublicKey)
    }
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PushNotificationQueryInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBasePushNotificationQueryInfo()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.accessToken = reader.string()
          break
        case 2:
          message.installationId = reader.string()
          break
        case 3:
          message.publicKey = reader.bytes()
          break
        case 4:
          message.allowedKeyList.push(reader.bytes())
          break
        case 5:
          message.grant = reader.bytes()
          break
        case 6:
          message.version = longToNumber(reader.uint64() as Long)
          break
        case 7:
          message.serverPublicKey = reader.bytes()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): PushNotificationQueryInfo {
    return {
      accessToken: isSet(object.accessToken) ? String(object.accessToken) : '',
      installationId: isSet(object.installationId)
        ? String(object.installationId)
        : '',
      publicKey: isSet(object.publicKey)
        ? bytesFromBase64(object.publicKey)
        : new Uint8Array(),
      allowedKeyList: Array.isArray(object?.allowedKeyList)
        ? object.allowedKeyList.map((e: any) => bytesFromBase64(e))
        : [],
      grant: isSet(object.grant)
        ? bytesFromBase64(object.grant)
        : new Uint8Array(),
      version: isSet(object.version) ? Number(object.version) : 0,
      serverPublicKey: isSet(object.serverPublicKey)
        ? bytesFromBase64(object.serverPublicKey)
        : new Uint8Array(),
    }
  },

  toJSON(message: PushNotificationQueryInfo): unknown {
    const obj: any = {}
    message.accessToken !== undefined && (obj.accessToken = message.accessToken)
    message.installationId !== undefined &&
      (obj.installationId = message.installationId)
    message.publicKey !== undefined &&
      (obj.publicKey = base64FromBytes(
        message.publicKey !== undefined ? message.publicKey : new Uint8Array()
      ))
    if (message.allowedKeyList) {
      obj.allowedKeyList = message.allowedKeyList.map(e =>
        base64FromBytes(e !== undefined ? e : new Uint8Array())
      )
    } else {
      obj.allowedKeyList = []
    }
    message.grant !== undefined &&
      (obj.grant = base64FromBytes(
        message.grant !== undefined ? message.grant : new Uint8Array()
      ))
    message.version !== undefined && (obj.version = Math.round(message.version))
    message.serverPublicKey !== undefined &&
      (obj.serverPublicKey = base64FromBytes(
        message.serverPublicKey !== undefined
          ? message.serverPublicKey
          : new Uint8Array()
      ))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<PushNotificationQueryInfo>, I>>(
    object: I
  ): PushNotificationQueryInfo {
    const message = createBasePushNotificationQueryInfo()
    message.accessToken = object.accessToken ?? ''
    message.installationId = object.installationId ?? ''
    message.publicKey = object.publicKey ?? new Uint8Array()
    message.allowedKeyList = object.allowedKeyList?.map(e => e) || []
    message.grant = object.grant ?? new Uint8Array()
    message.version = object.version ?? 0
    message.serverPublicKey = object.serverPublicKey ?? new Uint8Array()
    return message
  },
}

function createBasePushNotificationQueryResponse(): PushNotificationQueryResponse {
  return { info: [], messageId: new Uint8Array(), success: false }
}

export const PushNotificationQueryResponse = {
  encode(
    message: PushNotificationQueryResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.info) {
      PushNotificationQueryInfo.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.messageId.length !== 0) {
      writer.uint32(18).bytes(message.messageId)
    }
    if (message.success === true) {
      writer.uint32(24).bool(message.success)
    }
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PushNotificationQueryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBasePushNotificationQueryResponse()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.info.push(
            PushNotificationQueryInfo.decode(reader, reader.uint32())
          )
          break
        case 2:
          message.messageId = reader.bytes()
          break
        case 3:
          message.success = reader.bool()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): PushNotificationQueryResponse {
    return {
      info: Array.isArray(object?.info)
        ? object.info.map((e: any) => PushNotificationQueryInfo.fromJSON(e))
        : [],
      messageId: isSet(object.messageId)
        ? bytesFromBase64(object.messageId)
        : new Uint8Array(),
      success: isSet(object.success) ? Boolean(object.success) : false,
    }
  },

  toJSON(message: PushNotificationQueryResponse): unknown {
    const obj: any = {}
    if (message.info) {
      obj.info = message.info.map(e =>
        e ? PushNotificationQueryInfo.toJSON(e) : undefined
      )
    } else {
      obj.info = []
    }
    message.messageId !== undefined &&
      (obj.messageId = base64FromBytes(
        message.messageId !== undefined ? message.messageId : new Uint8Array()
      ))
    message.success !== undefined && (obj.success = message.success)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<PushNotificationQueryResponse>, I>>(
    object: I
  ): PushNotificationQueryResponse {
    const message = createBasePushNotificationQueryResponse()
    message.info =
      object.info?.map(e => PushNotificationQueryInfo.fromPartial(e)) || []
    message.messageId = object.messageId ?? new Uint8Array()
    message.success = object.success ?? false
    return message
  },
}

function createBasePushNotification(): PushNotification {
  return {
    accessToken: '',
    chatId: new Uint8Array(),
    publicKey: new Uint8Array(),
    installationId: '',
    message: new Uint8Array(),
    type: 0,
    author: new Uint8Array(),
  }
}

export const PushNotification = {
  encode(
    message: PushNotification,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.accessToken !== '') {
      writer.uint32(10).string(message.accessToken)
    }
    if (message.chatId.length !== 0) {
      writer.uint32(18).bytes(message.chatId)
    }
    if (message.publicKey.length !== 0) {
      writer.uint32(26).bytes(message.publicKey)
    }
    if (message.installationId !== '') {
      writer.uint32(34).string(message.installationId)
    }
    if (message.message.length !== 0) {
      writer.uint32(42).bytes(message.message)
    }
    if (message.type !== 0) {
      writer.uint32(48).int32(message.type)
    }
    if (message.author.length !== 0) {
      writer.uint32(58).bytes(message.author)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PushNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBasePushNotification()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.accessToken = reader.string()
          break
        case 2:
          message.chatId = reader.bytes()
          break
        case 3:
          message.publicKey = reader.bytes()
          break
        case 4:
          message.installationId = reader.string()
          break
        case 5:
          message.message = reader.bytes()
          break
        case 6:
          message.type = reader.int32() as any
          break
        case 7:
          message.author = reader.bytes()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): PushNotification {
    return {
      accessToken: isSet(object.accessToken) ? String(object.accessToken) : '',
      chatId: isSet(object.chatId)
        ? bytesFromBase64(object.chatId)
        : new Uint8Array(),
      publicKey: isSet(object.publicKey)
        ? bytesFromBase64(object.publicKey)
        : new Uint8Array(),
      installationId: isSet(object.installationId)
        ? String(object.installationId)
        : '',
      message: isSet(object.message)
        ? bytesFromBase64(object.message)
        : new Uint8Array(),
      type: isSet(object.type)
        ? pushNotification_PushNotificationTypeFromJSON(object.type)
        : 0,
      author: isSet(object.author)
        ? bytesFromBase64(object.author)
        : new Uint8Array(),
    }
  },

  toJSON(message: PushNotification): unknown {
    const obj: any = {}
    message.accessToken !== undefined && (obj.accessToken = message.accessToken)
    message.chatId !== undefined &&
      (obj.chatId = base64FromBytes(
        message.chatId !== undefined ? message.chatId : new Uint8Array()
      ))
    message.publicKey !== undefined &&
      (obj.publicKey = base64FromBytes(
        message.publicKey !== undefined ? message.publicKey : new Uint8Array()
      ))
    message.installationId !== undefined &&
      (obj.installationId = message.installationId)
    message.message !== undefined &&
      (obj.message = base64FromBytes(
        message.message !== undefined ? message.message : new Uint8Array()
      ))
    message.type !== undefined &&
      (obj.type = pushNotification_PushNotificationTypeToJSON(message.type))
    message.author !== undefined &&
      (obj.author = base64FromBytes(
        message.author !== undefined ? message.author : new Uint8Array()
      ))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<PushNotification>, I>>(
    object: I
  ): PushNotification {
    const message = createBasePushNotification()
    message.accessToken = object.accessToken ?? ''
    message.chatId = object.chatId ?? new Uint8Array()
    message.publicKey = object.publicKey ?? new Uint8Array()
    message.installationId = object.installationId ?? ''
    message.message = object.message ?? new Uint8Array()
    message.type = object.type ?? 0
    message.author = object.author ?? new Uint8Array()
    return message
  },
}

function createBasePushNotificationRequest(): PushNotificationRequest {
  return { requests: [], messageId: new Uint8Array() }
}

export const PushNotificationRequest = {
  encode(
    message: PushNotificationRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.requests) {
      PushNotification.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.messageId.length !== 0) {
      writer.uint32(18).bytes(message.messageId)
    }
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PushNotificationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBasePushNotificationRequest()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.requests.push(
            PushNotification.decode(reader, reader.uint32())
          )
          break
        case 2:
          message.messageId = reader.bytes()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): PushNotificationRequest {
    return {
      requests: Array.isArray(object?.requests)
        ? object.requests.map((e: any) => PushNotification.fromJSON(e))
        : [],
      messageId: isSet(object.messageId)
        ? bytesFromBase64(object.messageId)
        : new Uint8Array(),
    }
  },

  toJSON(message: PushNotificationRequest): unknown {
    const obj: any = {}
    if (message.requests) {
      obj.requests = message.requests.map(e =>
        e ? PushNotification.toJSON(e) : undefined
      )
    } else {
      obj.requests = []
    }
    message.messageId !== undefined &&
      (obj.messageId = base64FromBytes(
        message.messageId !== undefined ? message.messageId : new Uint8Array()
      ))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<PushNotificationRequest>, I>>(
    object: I
  ): PushNotificationRequest {
    const message = createBasePushNotificationRequest()
    message.requests =
      object.requests?.map(e => PushNotification.fromPartial(e)) || []
    message.messageId = object.messageId ?? new Uint8Array()
    return message
  },
}

function createBasePushNotificationReport(): PushNotificationReport {
  return {
    success: false,
    error: 0,
    publicKey: new Uint8Array(),
    installationId: '',
  }
}

export const PushNotificationReport = {
  encode(
    message: PushNotificationReport,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.success === true) {
      writer.uint32(8).bool(message.success)
    }
    if (message.error !== 0) {
      writer.uint32(16).int32(message.error)
    }
    if (message.publicKey.length !== 0) {
      writer.uint32(26).bytes(message.publicKey)
    }
    if (message.installationId !== '') {
      writer.uint32(34).string(message.installationId)
    }
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PushNotificationReport {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBasePushNotificationReport()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool()
          break
        case 2:
          message.error = reader.int32() as any
          break
        case 3:
          message.publicKey = reader.bytes()
          break
        case 4:
          message.installationId = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): PushNotificationReport {
    return {
      success: isSet(object.success) ? Boolean(object.success) : false,
      error: isSet(object.error)
        ? pushNotificationReport_ErrorTypeFromJSON(object.error)
        : 0,
      publicKey: isSet(object.publicKey)
        ? bytesFromBase64(object.publicKey)
        : new Uint8Array(),
      installationId: isSet(object.installationId)
        ? String(object.installationId)
        : '',
    }
  },

  toJSON(message: PushNotificationReport): unknown {
    const obj: any = {}
    message.success !== undefined && (obj.success = message.success)
    message.error !== undefined &&
      (obj.error = pushNotificationReport_ErrorTypeToJSON(message.error))
    message.publicKey !== undefined &&
      (obj.publicKey = base64FromBytes(
        message.publicKey !== undefined ? message.publicKey : new Uint8Array()
      ))
    message.installationId !== undefined &&
      (obj.installationId = message.installationId)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<PushNotificationReport>, I>>(
    object: I
  ): PushNotificationReport {
    const message = createBasePushNotificationReport()
    message.success = object.success ?? false
    message.error = object.error ?? 0
    message.publicKey = object.publicKey ?? new Uint8Array()
    message.installationId = object.installationId ?? ''
    return message
  },
}

function createBasePushNotificationResponse(): PushNotificationResponse {
  return { messageId: new Uint8Array(), reports: [] }
}

export const PushNotificationResponse = {
  encode(
    message: PushNotificationResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.messageId.length !== 0) {
      writer.uint32(10).bytes(message.messageId)
    }
    for (const v of message.reports) {
      PushNotificationReport.encode(v!, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PushNotificationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBasePushNotificationResponse()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.messageId = reader.bytes()
          break
        case 2:
          message.reports.push(
            PushNotificationReport.decode(reader, reader.uint32())
          )
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): PushNotificationResponse {
    return {
      messageId: isSet(object.messageId)
        ? bytesFromBase64(object.messageId)
        : new Uint8Array(),
      reports: Array.isArray(object?.reports)
        ? object.reports.map((e: any) => PushNotificationReport.fromJSON(e))
        : [],
    }
  },

  toJSON(message: PushNotificationResponse): unknown {
    const obj: any = {}
    message.messageId !== undefined &&
      (obj.messageId = base64FromBytes(
        message.messageId !== undefined ? message.messageId : new Uint8Array()
      ))
    if (message.reports) {
      obj.reports = message.reports.map(e =>
        e ? PushNotificationReport.toJSON(e) : undefined
      )
    } else {
      obj.reports = []
    }
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<PushNotificationResponse>, I>>(
    object: I
  ): PushNotificationResponse {
    const message = createBasePushNotificationResponse()
    message.messageId = object.messageId ?? new Uint8Array()
    message.reports =
      object.reports?.map(e => PushNotificationReport.fromPartial(e)) || []
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined
}
