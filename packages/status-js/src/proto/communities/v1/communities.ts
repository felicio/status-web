/* eslint-disable */
import Long from 'long'
import * as _m0 from 'protobufjs/minimal'
import { ChatIdentity } from '../../communities/v1/chat_identity'

export const protobufPackage = 'communities.v1'

export interface Grant {
  communityId: Uint8Array
  memberId: Uint8Array
  chatId: string
  clock: number
}

export interface CommunityMember {
  roles: CommunityMember_Roles[]
}

export enum CommunityMember_Roles {
  UNKNOWN_ROLE = 0,
  ROLE_ALL = 1,
  ROLE_MANAGE_USERS = 2,
  ROLE_MODERATE_CONTENT = 3,
  UNRECOGNIZED = -1,
}

export function communityMember_RolesFromJSON(
  object: any
): CommunityMember_Roles {
  switch (object) {
    case 0:
    case 'UNKNOWN_ROLE':
      return CommunityMember_Roles.UNKNOWN_ROLE
    case 1:
    case 'ROLE_ALL':
      return CommunityMember_Roles.ROLE_ALL
    case 2:
    case 'ROLE_MANAGE_USERS':
      return CommunityMember_Roles.ROLE_MANAGE_USERS
    case 3:
    case 'ROLE_MODERATE_CONTENT':
      return CommunityMember_Roles.ROLE_MODERATE_CONTENT
    case -1:
    case 'UNRECOGNIZED':
    default:
      return CommunityMember_Roles.UNRECOGNIZED
  }
}

export function communityMember_RolesToJSON(
  object: CommunityMember_Roles
): string {
  switch (object) {
    case CommunityMember_Roles.UNKNOWN_ROLE:
      return 'UNKNOWN_ROLE'
    case CommunityMember_Roles.ROLE_ALL:
      return 'ROLE_ALL'
    case CommunityMember_Roles.ROLE_MANAGE_USERS:
      return 'ROLE_MANAGE_USERS'
    case CommunityMember_Roles.ROLE_MODERATE_CONTENT:
      return 'ROLE_MODERATE_CONTENT'
    case CommunityMember_Roles.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED'
  }
}

export interface CommunityPermissions {
  ensOnly: boolean
  /** https://gitlab.matrix.org/matrix-org/olm/blob/master/docs/megolm.md is a candidate for the algorithm to be used in case we want to have private communityal chats, lighter than pairwise encryption using the DR, less secure, but more efficient for large number of participants */
  private: boolean
  access: CommunityPermissions_Access
}

export enum CommunityPermissions_Access {
  UNKNOWN_ACCESS = 0,
  NO_MEMBERSHIP = 1,
  INVITATION_ONLY = 2,
  ON_REQUEST = 3,
  UNRECOGNIZED = -1,
}

export function communityPermissions_AccessFromJSON(
  object: any
): CommunityPermissions_Access {
  switch (object) {
    case 0:
    case 'UNKNOWN_ACCESS':
      return CommunityPermissions_Access.UNKNOWN_ACCESS
    case 1:
    case 'NO_MEMBERSHIP':
      return CommunityPermissions_Access.NO_MEMBERSHIP
    case 2:
    case 'INVITATION_ONLY':
      return CommunityPermissions_Access.INVITATION_ONLY
    case 3:
    case 'ON_REQUEST':
      return CommunityPermissions_Access.ON_REQUEST
    case -1:
    case 'UNRECOGNIZED':
    default:
      return CommunityPermissions_Access.UNRECOGNIZED
  }
}

export function communityPermissions_AccessToJSON(
  object: CommunityPermissions_Access
): string {
  switch (object) {
    case CommunityPermissions_Access.UNKNOWN_ACCESS:
      return 'UNKNOWN_ACCESS'
    case CommunityPermissions_Access.NO_MEMBERSHIP:
      return 'NO_MEMBERSHIP'
    case CommunityPermissions_Access.INVITATION_ONLY:
      return 'INVITATION_ONLY'
    case CommunityPermissions_Access.ON_REQUEST:
      return 'ON_REQUEST'
    case CommunityPermissions_Access.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED'
  }
}

export interface CommunityDescription {
  clock: number
  members: { [key: string]: CommunityMember }
  permissions: CommunityPermissions | undefined
  identity: ChatIdentity | undefined
  chats: { [key: string]: CommunityChat }
  banList: string[]
  categories: { [key: string]: CommunityCategory }
  archiveMagnetlinkClock: number
  adminSettings: CommunityAdminSettings | undefined
  introMessage: string
  outroMessage: string
  encrypted: boolean
  tags: string[]
}

export interface CommunityDescription_MembersEntry {
  key: string
  value: CommunityMember | undefined
}

export interface CommunityDescription_ChatsEntry {
  key: string
  value: CommunityChat | undefined
}

export interface CommunityDescription_CategoriesEntry {
  key: string
  value: CommunityCategory | undefined
}

export interface CommunityAdminSettings {
  pinMessageAllMembersEnabled: boolean
}

export interface CommunityChat {
  members: { [key: string]: CommunityMember }
  permissions: CommunityPermissions | undefined
  identity: ChatIdentity | undefined
  categoryId: string
  position: number
}

export interface CommunityChat_MembersEntry {
  key: string
  value: CommunityMember | undefined
}

export interface CommunityCategory {
  categoryId: string
  name: string
  position: number
}

export interface CommunityInvitation {
  communityDescription: Uint8Array
  grant: Uint8Array
  chatId: string
  publicKey: Uint8Array
}

export interface CommunityRequestToJoin {
  clock: number
  ensName: string
  chatId: string
  communityId: Uint8Array
  displayName: string
}

export interface CommunityCancelRequestToJoin {
  clock: number
  ensName: string
  chatId: string
  communityId: Uint8Array
  displayName: string
}

export interface CommunityRequestToJoinResponse {
  clock: number
  community: CommunityDescription | undefined
  accepted: boolean
  grant: Uint8Array
  communityId: Uint8Array
  magnetUri: string
}

export interface CommunityRequestToLeave {
  clock: number
  communityId: Uint8Array
}

export interface CommunityMessageArchiveMagnetlink {
  clock: number
  magnetUri: string
}

export interface WakuMessage {
  sig: Uint8Array
  timestamp: number
  topic: Uint8Array
  payload: Uint8Array
  padding: Uint8Array
  hash: Uint8Array
  thirdPartyId: string
}

export interface WakuMessageArchiveMetadata {
  version: number
  from: number
  to: number
  contentTopic: Uint8Array[]
}

export interface WakuMessageArchive {
  version: number
  metadata: WakuMessageArchiveMetadata | undefined
  messages: WakuMessage[]
}

export interface WakuMessageArchiveIndexMetadata {
  version: number
  metadata: WakuMessageArchiveMetadata | undefined
  offset: number
  size: number
  padding: number
}

export interface WakuMessageArchiveIndex {
  archives: { [key: string]: WakuMessageArchiveIndexMetadata }
}

export interface WakuMessageArchiveIndex_ArchivesEntry {
  key: string
  value: WakuMessageArchiveIndexMetadata | undefined
}

function createBaseGrant(): Grant {
  return {
    communityId: new Uint8Array(),
    memberId: new Uint8Array(),
    chatId: '',
    clock: 0,
  }
}

export const Grant = {
  encode(message: Grant, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.communityId.length !== 0) {
      writer.uint32(10).bytes(message.communityId)
    }
    if (message.memberId.length !== 0) {
      writer.uint32(18).bytes(message.memberId)
    }
    if (message.chatId !== '') {
      writer.uint32(26).string(message.chatId)
    }
    if (message.clock !== 0) {
      writer.uint32(32).uint64(message.clock)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Grant {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseGrant()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.communityId = reader.bytes()
          break
        case 2:
          message.memberId = reader.bytes()
          break
        case 3:
          message.chatId = reader.string()
          break
        case 4:
          message.clock = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Grant {
    return {
      communityId: isSet(object.communityId)
        ? bytesFromBase64(object.communityId)
        : new Uint8Array(),
      memberId: isSet(object.memberId)
        ? bytesFromBase64(object.memberId)
        : new Uint8Array(),
      chatId: isSet(object.chatId) ? String(object.chatId) : '',
      clock: isSet(object.clock) ? Number(object.clock) : 0,
    }
  },

  toJSON(message: Grant): unknown {
    const obj: any = {}
    message.communityId !== undefined &&
      (obj.communityId = base64FromBytes(
        message.communityId !== undefined
          ? message.communityId
          : new Uint8Array()
      ))
    message.memberId !== undefined &&
      (obj.memberId = base64FromBytes(
        message.memberId !== undefined ? message.memberId : new Uint8Array()
      ))
    message.chatId !== undefined && (obj.chatId = message.chatId)
    message.clock !== undefined && (obj.clock = Math.round(message.clock))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<Grant>, I>>(object: I): Grant {
    const message = createBaseGrant()
    message.communityId = object.communityId ?? new Uint8Array()
    message.memberId = object.memberId ?? new Uint8Array()
    message.chatId = object.chatId ?? ''
    message.clock = object.clock ?? 0
    return message
  },
}

function createBaseCommunityMember(): CommunityMember {
  return { roles: [] }
}

export const CommunityMember = {
  encode(
    message: CommunityMember,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    writer.uint32(10).fork()
    for (const v of message.roles) {
      writer.int32(v)
    }
    writer.ldelim()
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommunityMember {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseCommunityMember()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos
            while (reader.pos < end2) {
              message.roles.push(reader.int32() as any)
            }
          } else {
            message.roles.push(reader.int32() as any)
          }
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): CommunityMember {
    return {
      roles: Array.isArray(object?.roles)
        ? object.roles.map((e: any) => communityMember_RolesFromJSON(e))
        : [],
    }
  },

  toJSON(message: CommunityMember): unknown {
    const obj: any = {}
    if (message.roles) {
      obj.roles = message.roles.map(e => communityMember_RolesToJSON(e))
    } else {
      obj.roles = []
    }
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<CommunityMember>, I>>(
    object: I
  ): CommunityMember {
    const message = createBaseCommunityMember()
    message.roles = object.roles?.map(e => e) || []
    return message
  },
}

function createBaseCommunityPermissions(): CommunityPermissions {
  return { ensOnly: false, private: false, access: 0 }
}

export const CommunityPermissions = {
  encode(
    message: CommunityPermissions,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.ensOnly === true) {
      writer.uint32(8).bool(message.ensOnly)
    }
    if (message.private === true) {
      writer.uint32(16).bool(message.private)
    }
    if (message.access !== 0) {
      writer.uint32(24).int32(message.access)
    }
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CommunityPermissions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseCommunityPermissions()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.ensOnly = reader.bool()
          break
        case 2:
          message.private = reader.bool()
          break
        case 3:
          message.access = reader.int32() as any
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): CommunityPermissions {
    return {
      ensOnly: isSet(object.ensOnly) ? Boolean(object.ensOnly) : false,
      private: isSet(object.private) ? Boolean(object.private) : false,
      access: isSet(object.access)
        ? communityPermissions_AccessFromJSON(object.access)
        : 0,
    }
  },

  toJSON(message: CommunityPermissions): unknown {
    const obj: any = {}
    message.ensOnly !== undefined && (obj.ensOnly = message.ensOnly)
    message.private !== undefined && (obj.private = message.private)
    message.access !== undefined &&
      (obj.access = communityPermissions_AccessToJSON(message.access))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<CommunityPermissions>, I>>(
    object: I
  ): CommunityPermissions {
    const message = createBaseCommunityPermissions()
    message.ensOnly = object.ensOnly ?? false
    message.private = object.private ?? false
    message.access = object.access ?? 0
    return message
  },
}

function createBaseCommunityDescription(): CommunityDescription {
  return {
    clock: 0,
    members: {},
    permissions: undefined,
    identity: undefined,
    chats: {},
    banList: [],
    categories: {},
    archiveMagnetlinkClock: 0,
    adminSettings: undefined,
    introMessage: '',
    outroMessage: '',
    encrypted: false,
    tags: [],
  }
}

export const CommunityDescription = {
  encode(
    message: CommunityDescription,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clock !== 0) {
      writer.uint32(8).uint64(message.clock)
    }
    Object.entries(message.members).forEach(([key, value]) => {
      CommunityDescription_MembersEntry.encode(
        { key: key as any, value },
        writer.uint32(18).fork()
      ).ldelim()
    })
    if (message.permissions !== undefined) {
      CommunityPermissions.encode(
        message.permissions,
        writer.uint32(26).fork()
      ).ldelim()
    }
    if (message.identity !== undefined) {
      ChatIdentity.encode(message.identity, writer.uint32(42).fork()).ldelim()
    }
    Object.entries(message.chats).forEach(([key, value]) => {
      CommunityDescription_ChatsEntry.encode(
        { key: key as any, value },
        writer.uint32(50).fork()
      ).ldelim()
    })
    for (const v of message.banList) {
      writer.uint32(58).string(v!)
    }
    Object.entries(message.categories).forEach(([key, value]) => {
      CommunityDescription_CategoriesEntry.encode(
        { key: key as any, value },
        writer.uint32(66).fork()
      ).ldelim()
    })
    if (message.archiveMagnetlinkClock !== 0) {
      writer.uint32(72).uint64(message.archiveMagnetlinkClock)
    }
    if (message.adminSettings !== undefined) {
      CommunityAdminSettings.encode(
        message.adminSettings,
        writer.uint32(82).fork()
      ).ldelim()
    }
    if (message.introMessage !== '') {
      writer.uint32(90).string(message.introMessage)
    }
    if (message.outroMessage !== '') {
      writer.uint32(98).string(message.outroMessage)
    }
    if (message.encrypted === true) {
      writer.uint32(104).bool(message.encrypted)
    }
    for (const v of message.tags) {
      writer.uint32(114).string(v!)
    }
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CommunityDescription {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseCommunityDescription()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.clock = longToNumber(reader.uint64() as Long)
          break
        case 2:
          const entry2 = CommunityDescription_MembersEntry.decode(
            reader,
            reader.uint32()
          )
          if (entry2.value !== undefined) {
            message.members[entry2.key] = entry2.value
          }
          break
        case 3:
          message.permissions = CommunityPermissions.decode(
            reader,
            reader.uint32()
          )
          break
        case 5:
          message.identity = ChatIdentity.decode(reader, reader.uint32())
          break
        case 6:
          const entry6 = CommunityDescription_ChatsEntry.decode(
            reader,
            reader.uint32()
          )
          if (entry6.value !== undefined) {
            message.chats[entry6.key] = entry6.value
          }
          break
        case 7:
          message.banList.push(reader.string())
          break
        case 8:
          const entry8 = CommunityDescription_CategoriesEntry.decode(
            reader,
            reader.uint32()
          )
          if (entry8.value !== undefined) {
            message.categories[entry8.key] = entry8.value
          }
          break
        case 9:
          message.archiveMagnetlinkClock = longToNumber(reader.uint64() as Long)
          break
        case 10:
          message.adminSettings = CommunityAdminSettings.decode(
            reader,
            reader.uint32()
          )
          break
        case 11:
          message.introMessage = reader.string()
          break
        case 12:
          message.outroMessage = reader.string()
          break
        case 13:
          message.encrypted = reader.bool()
          break
        case 14:
          message.tags.push(reader.string())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): CommunityDescription {
    return {
      clock: isSet(object.clock) ? Number(object.clock) : 0,
      members: isObject(object.members)
        ? Object.entries(object.members).reduce<{
            [key: string]: CommunityMember
          }>((acc, [key, value]) => {
            acc[key] = CommunityMember.fromJSON(value)
            return acc
          }, {})
        : {},
      permissions: isSet(object.permissions)
        ? CommunityPermissions.fromJSON(object.permissions)
        : undefined,
      identity: isSet(object.identity)
        ? ChatIdentity.fromJSON(object.identity)
        : undefined,
      chats: isObject(object.chats)
        ? Object.entries(object.chats).reduce<{ [key: string]: CommunityChat }>(
            (acc, [key, value]) => {
              acc[key] = CommunityChat.fromJSON(value)
              return acc
            },
            {}
          )
        : {},
      banList: Array.isArray(object?.banList)
        ? object.banList.map((e: any) => String(e))
        : [],
      categories: isObject(object.categories)
        ? Object.entries(object.categories).reduce<{
            [key: string]: CommunityCategory
          }>((acc, [key, value]) => {
            acc[key] = CommunityCategory.fromJSON(value)
            return acc
          }, {})
        : {},
      archiveMagnetlinkClock: isSet(object.archiveMagnetlinkClock)
        ? Number(object.archiveMagnetlinkClock)
        : 0,
      adminSettings: isSet(object.adminSettings)
        ? CommunityAdminSettings.fromJSON(object.adminSettings)
        : undefined,
      introMessage: isSet(object.introMessage)
        ? String(object.introMessage)
        : '',
      outroMessage: isSet(object.outroMessage)
        ? String(object.outroMessage)
        : '',
      encrypted: isSet(object.encrypted) ? Boolean(object.encrypted) : false,
      tags: Array.isArray(object?.tags)
        ? object.tags.map((e: any) => String(e))
        : [],
    }
  },

  toJSON(message: CommunityDescription): unknown {
    const obj: any = {}
    message.clock !== undefined && (obj.clock = Math.round(message.clock))
    obj.members = {}
    if (message.members) {
      Object.entries(message.members).forEach(([k, v]) => {
        obj.members[k] = CommunityMember.toJSON(v)
      })
    }
    message.permissions !== undefined &&
      (obj.permissions = message.permissions
        ? CommunityPermissions.toJSON(message.permissions)
        : undefined)
    message.identity !== undefined &&
      (obj.identity = message.identity
        ? ChatIdentity.toJSON(message.identity)
        : undefined)
    obj.chats = {}
    if (message.chats) {
      Object.entries(message.chats).forEach(([k, v]) => {
        obj.chats[k] = CommunityChat.toJSON(v)
      })
    }
    if (message.banList) {
      obj.banList = message.banList.map(e => e)
    } else {
      obj.banList = []
    }
    obj.categories = {}
    if (message.categories) {
      Object.entries(message.categories).forEach(([k, v]) => {
        obj.categories[k] = CommunityCategory.toJSON(v)
      })
    }
    message.archiveMagnetlinkClock !== undefined &&
      (obj.archiveMagnetlinkClock = Math.round(message.archiveMagnetlinkClock))
    message.adminSettings !== undefined &&
      (obj.adminSettings = message.adminSettings
        ? CommunityAdminSettings.toJSON(message.adminSettings)
        : undefined)
    message.introMessage !== undefined &&
      (obj.introMessage = message.introMessage)
    message.outroMessage !== undefined &&
      (obj.outroMessage = message.outroMessage)
    message.encrypted !== undefined && (obj.encrypted = message.encrypted)
    if (message.tags) {
      obj.tags = message.tags.map(e => e)
    } else {
      obj.tags = []
    }
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<CommunityDescription>, I>>(
    object: I
  ): CommunityDescription {
    const message = createBaseCommunityDescription()
    message.clock = object.clock ?? 0
    message.members = Object.entries(object.members ?? {}).reduce<{
      [key: string]: CommunityMember
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = CommunityMember.fromPartial(value)
      }
      return acc
    }, {})
    message.permissions =
      object.permissions !== undefined && object.permissions !== null
        ? CommunityPermissions.fromPartial(object.permissions)
        : undefined
    message.identity =
      object.identity !== undefined && object.identity !== null
        ? ChatIdentity.fromPartial(object.identity)
        : undefined
    message.chats = Object.entries(object.chats ?? {}).reduce<{
      [key: string]: CommunityChat
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = CommunityChat.fromPartial(value)
      }
      return acc
    }, {})
    message.banList = object.banList?.map(e => e) || []
    message.categories = Object.entries(object.categories ?? {}).reduce<{
      [key: string]: CommunityCategory
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = CommunityCategory.fromPartial(value)
      }
      return acc
    }, {})
    message.archiveMagnetlinkClock = object.archiveMagnetlinkClock ?? 0
    message.adminSettings =
      object.adminSettings !== undefined && object.adminSettings !== null
        ? CommunityAdminSettings.fromPartial(object.adminSettings)
        : undefined
    message.introMessage = object.introMessage ?? ''
    message.outroMessage = object.outroMessage ?? ''
    message.encrypted = object.encrypted ?? false
    message.tags = object.tags?.map(e => e) || []
    return message
  },
}

function createBaseCommunityDescription_MembersEntry(): CommunityDescription_MembersEntry {
  return { key: '', value: undefined }
}

export const CommunityDescription_MembersEntry = {
  encode(
    message: CommunityDescription_MembersEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== '') {
      writer.uint32(10).string(message.key)
    }
    if (message.value !== undefined) {
      CommunityMember.encode(message.value, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CommunityDescription_MembersEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseCommunityDescription_MembersEntry()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string()
          break
        case 2:
          message.value = CommunityMember.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): CommunityDescription_MembersEntry {
    return {
      key: isSet(object.key) ? String(object.key) : '',
      value: isSet(object.value)
        ? CommunityMember.fromJSON(object.value)
        : undefined,
    }
  },

  toJSON(message: CommunityDescription_MembersEntry): unknown {
    const obj: any = {}
    message.key !== undefined && (obj.key = message.key)
    message.value !== undefined &&
      (obj.value = message.value
        ? CommunityMember.toJSON(message.value)
        : undefined)
    return obj
  },

  fromPartial<
    I extends Exact<DeepPartial<CommunityDescription_MembersEntry>, I>
  >(object: I): CommunityDescription_MembersEntry {
    const message = createBaseCommunityDescription_MembersEntry()
    message.key = object.key ?? ''
    message.value =
      object.value !== undefined && object.value !== null
        ? CommunityMember.fromPartial(object.value)
        : undefined
    return message
  },
}

function createBaseCommunityDescription_ChatsEntry(): CommunityDescription_ChatsEntry {
  return { key: '', value: undefined }
}

export const CommunityDescription_ChatsEntry = {
  encode(
    message: CommunityDescription_ChatsEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== '') {
      writer.uint32(10).string(message.key)
    }
    if (message.value !== undefined) {
      CommunityChat.encode(message.value, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CommunityDescription_ChatsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseCommunityDescription_ChatsEntry()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string()
          break
        case 2:
          message.value = CommunityChat.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): CommunityDescription_ChatsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : '',
      value: isSet(object.value)
        ? CommunityChat.fromJSON(object.value)
        : undefined,
    }
  },

  toJSON(message: CommunityDescription_ChatsEntry): unknown {
    const obj: any = {}
    message.key !== undefined && (obj.key = message.key)
    message.value !== undefined &&
      (obj.value = message.value
        ? CommunityChat.toJSON(message.value)
        : undefined)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<CommunityDescription_ChatsEntry>, I>>(
    object: I
  ): CommunityDescription_ChatsEntry {
    const message = createBaseCommunityDescription_ChatsEntry()
    message.key = object.key ?? ''
    message.value =
      object.value !== undefined && object.value !== null
        ? CommunityChat.fromPartial(object.value)
        : undefined
    return message
  },
}

function createBaseCommunityDescription_CategoriesEntry(): CommunityDescription_CategoriesEntry {
  return { key: '', value: undefined }
}

export const CommunityDescription_CategoriesEntry = {
  encode(
    message: CommunityDescription_CategoriesEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== '') {
      writer.uint32(10).string(message.key)
    }
    if (message.value !== undefined) {
      CommunityCategory.encode(message.value, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CommunityDescription_CategoriesEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseCommunityDescription_CategoriesEntry()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string()
          break
        case 2:
          message.value = CommunityCategory.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): CommunityDescription_CategoriesEntry {
    return {
      key: isSet(object.key) ? String(object.key) : '',
      value: isSet(object.value)
        ? CommunityCategory.fromJSON(object.value)
        : undefined,
    }
  },

  toJSON(message: CommunityDescription_CategoriesEntry): unknown {
    const obj: any = {}
    message.key !== undefined && (obj.key = message.key)
    message.value !== undefined &&
      (obj.value = message.value
        ? CommunityCategory.toJSON(message.value)
        : undefined)
    return obj
  },

  fromPartial<
    I extends Exact<DeepPartial<CommunityDescription_CategoriesEntry>, I>
  >(object: I): CommunityDescription_CategoriesEntry {
    const message = createBaseCommunityDescription_CategoriesEntry()
    message.key = object.key ?? ''
    message.value =
      object.value !== undefined && object.value !== null
        ? CommunityCategory.fromPartial(object.value)
        : undefined
    return message
  },
}

function createBaseCommunityAdminSettings(): CommunityAdminSettings {
  return { pinMessageAllMembersEnabled: false }
}

export const CommunityAdminSettings = {
  encode(
    message: CommunityAdminSettings,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pinMessageAllMembersEnabled === true) {
      writer.uint32(8).bool(message.pinMessageAllMembersEnabled)
    }
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CommunityAdminSettings {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseCommunityAdminSettings()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pinMessageAllMembersEnabled = reader.bool()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): CommunityAdminSettings {
    return {
      pinMessageAllMembersEnabled: isSet(object.pinMessageAllMembersEnabled)
        ? Boolean(object.pinMessageAllMembersEnabled)
        : false,
    }
  },

  toJSON(message: CommunityAdminSettings): unknown {
    const obj: any = {}
    message.pinMessageAllMembersEnabled !== undefined &&
      (obj.pinMessageAllMembersEnabled = message.pinMessageAllMembersEnabled)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<CommunityAdminSettings>, I>>(
    object: I
  ): CommunityAdminSettings {
    const message = createBaseCommunityAdminSettings()
    message.pinMessageAllMembersEnabled =
      object.pinMessageAllMembersEnabled ?? false
    return message
  },
}

function createBaseCommunityChat(): CommunityChat {
  return {
    members: {},
    permissions: undefined,
    identity: undefined,
    categoryId: '',
    position: 0,
  }
}

export const CommunityChat = {
  encode(
    message: CommunityChat,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    Object.entries(message.members).forEach(([key, value]) => {
      CommunityChat_MembersEntry.encode(
        { key: key as any, value },
        writer.uint32(10).fork()
      ).ldelim()
    })
    if (message.permissions !== undefined) {
      CommunityPermissions.encode(
        message.permissions,
        writer.uint32(18).fork()
      ).ldelim()
    }
    if (message.identity !== undefined) {
      ChatIdentity.encode(message.identity, writer.uint32(26).fork()).ldelim()
    }
    if (message.categoryId !== '') {
      writer.uint32(34).string(message.categoryId)
    }
    if (message.position !== 0) {
      writer.uint32(40).int32(message.position)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommunityChat {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseCommunityChat()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          const entry1 = CommunityChat_MembersEntry.decode(
            reader,
            reader.uint32()
          )
          if (entry1.value !== undefined) {
            message.members[entry1.key] = entry1.value
          }
          break
        case 2:
          message.permissions = CommunityPermissions.decode(
            reader,
            reader.uint32()
          )
          break
        case 3:
          message.identity = ChatIdentity.decode(reader, reader.uint32())
          break
        case 4:
          message.categoryId = reader.string()
          break
        case 5:
          message.position = reader.int32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): CommunityChat {
    return {
      members: isObject(object.members)
        ? Object.entries(object.members).reduce<{
            [key: string]: CommunityMember
          }>((acc, [key, value]) => {
            acc[key] = CommunityMember.fromJSON(value)
            return acc
          }, {})
        : {},
      permissions: isSet(object.permissions)
        ? CommunityPermissions.fromJSON(object.permissions)
        : undefined,
      identity: isSet(object.identity)
        ? ChatIdentity.fromJSON(object.identity)
        : undefined,
      categoryId: isSet(object.categoryId) ? String(object.categoryId) : '',
      position: isSet(object.position) ? Number(object.position) : 0,
    }
  },

  toJSON(message: CommunityChat): unknown {
    const obj: any = {}
    obj.members = {}
    if (message.members) {
      Object.entries(message.members).forEach(([k, v]) => {
        obj.members[k] = CommunityMember.toJSON(v)
      })
    }
    message.permissions !== undefined &&
      (obj.permissions = message.permissions
        ? CommunityPermissions.toJSON(message.permissions)
        : undefined)
    message.identity !== undefined &&
      (obj.identity = message.identity
        ? ChatIdentity.toJSON(message.identity)
        : undefined)
    message.categoryId !== undefined && (obj.categoryId = message.categoryId)
    message.position !== undefined &&
      (obj.position = Math.round(message.position))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<CommunityChat>, I>>(
    object: I
  ): CommunityChat {
    const message = createBaseCommunityChat()
    message.members = Object.entries(object.members ?? {}).reduce<{
      [key: string]: CommunityMember
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = CommunityMember.fromPartial(value)
      }
      return acc
    }, {})
    message.permissions =
      object.permissions !== undefined && object.permissions !== null
        ? CommunityPermissions.fromPartial(object.permissions)
        : undefined
    message.identity =
      object.identity !== undefined && object.identity !== null
        ? ChatIdentity.fromPartial(object.identity)
        : undefined
    message.categoryId = object.categoryId ?? ''
    message.position = object.position ?? 0
    return message
  },
}

function createBaseCommunityChat_MembersEntry(): CommunityChat_MembersEntry {
  return { key: '', value: undefined }
}

export const CommunityChat_MembersEntry = {
  encode(
    message: CommunityChat_MembersEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== '') {
      writer.uint32(10).string(message.key)
    }
    if (message.value !== undefined) {
      CommunityMember.encode(message.value, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CommunityChat_MembersEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseCommunityChat_MembersEntry()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string()
          break
        case 2:
          message.value = CommunityMember.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): CommunityChat_MembersEntry {
    return {
      key: isSet(object.key) ? String(object.key) : '',
      value: isSet(object.value)
        ? CommunityMember.fromJSON(object.value)
        : undefined,
    }
  },

  toJSON(message: CommunityChat_MembersEntry): unknown {
    const obj: any = {}
    message.key !== undefined && (obj.key = message.key)
    message.value !== undefined &&
      (obj.value = message.value
        ? CommunityMember.toJSON(message.value)
        : undefined)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<CommunityChat_MembersEntry>, I>>(
    object: I
  ): CommunityChat_MembersEntry {
    const message = createBaseCommunityChat_MembersEntry()
    message.key = object.key ?? ''
    message.value =
      object.value !== undefined && object.value !== null
        ? CommunityMember.fromPartial(object.value)
        : undefined
    return message
  },
}

function createBaseCommunityCategory(): CommunityCategory {
  return { categoryId: '', name: '', position: 0 }
}

export const CommunityCategory = {
  encode(
    message: CommunityCategory,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.categoryId !== '') {
      writer.uint32(10).string(message.categoryId)
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name)
    }
    if (message.position !== 0) {
      writer.uint32(24).int32(message.position)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommunityCategory {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseCommunityCategory()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.categoryId = reader.string()
          break
        case 2:
          message.name = reader.string()
          break
        case 3:
          message.position = reader.int32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): CommunityCategory {
    return {
      categoryId: isSet(object.categoryId) ? String(object.categoryId) : '',
      name: isSet(object.name) ? String(object.name) : '',
      position: isSet(object.position) ? Number(object.position) : 0,
    }
  },

  toJSON(message: CommunityCategory): unknown {
    const obj: any = {}
    message.categoryId !== undefined && (obj.categoryId = message.categoryId)
    message.name !== undefined && (obj.name = message.name)
    message.position !== undefined &&
      (obj.position = Math.round(message.position))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<CommunityCategory>, I>>(
    object: I
  ): CommunityCategory {
    const message = createBaseCommunityCategory()
    message.categoryId = object.categoryId ?? ''
    message.name = object.name ?? ''
    message.position = object.position ?? 0
    return message
  },
}

function createBaseCommunityInvitation(): CommunityInvitation {
  return {
    communityDescription: new Uint8Array(),
    grant: new Uint8Array(),
    chatId: '',
    publicKey: new Uint8Array(),
  }
}

export const CommunityInvitation = {
  encode(
    message: CommunityInvitation,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.communityDescription.length !== 0) {
      writer.uint32(10).bytes(message.communityDescription)
    }
    if (message.grant.length !== 0) {
      writer.uint32(18).bytes(message.grant)
    }
    if (message.chatId !== '') {
      writer.uint32(26).string(message.chatId)
    }
    if (message.publicKey.length !== 0) {
      writer.uint32(34).bytes(message.publicKey)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommunityInvitation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseCommunityInvitation()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.communityDescription = reader.bytes()
          break
        case 2:
          message.grant = reader.bytes()
          break
        case 3:
          message.chatId = reader.string()
          break
        case 4:
          message.publicKey = reader.bytes()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): CommunityInvitation {
    return {
      communityDescription: isSet(object.communityDescription)
        ? bytesFromBase64(object.communityDescription)
        : new Uint8Array(),
      grant: isSet(object.grant)
        ? bytesFromBase64(object.grant)
        : new Uint8Array(),
      chatId: isSet(object.chatId) ? String(object.chatId) : '',
      publicKey: isSet(object.publicKey)
        ? bytesFromBase64(object.publicKey)
        : new Uint8Array(),
    }
  },

  toJSON(message: CommunityInvitation): unknown {
    const obj: any = {}
    message.communityDescription !== undefined &&
      (obj.communityDescription = base64FromBytes(
        message.communityDescription !== undefined
          ? message.communityDescription
          : new Uint8Array()
      ))
    message.grant !== undefined &&
      (obj.grant = base64FromBytes(
        message.grant !== undefined ? message.grant : new Uint8Array()
      ))
    message.chatId !== undefined && (obj.chatId = message.chatId)
    message.publicKey !== undefined &&
      (obj.publicKey = base64FromBytes(
        message.publicKey !== undefined ? message.publicKey : new Uint8Array()
      ))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<CommunityInvitation>, I>>(
    object: I
  ): CommunityInvitation {
    const message = createBaseCommunityInvitation()
    message.communityDescription =
      object.communityDescription ?? new Uint8Array()
    message.grant = object.grant ?? new Uint8Array()
    message.chatId = object.chatId ?? ''
    message.publicKey = object.publicKey ?? new Uint8Array()
    return message
  },
}

function createBaseCommunityRequestToJoin(): CommunityRequestToJoin {
  return {
    clock: 0,
    ensName: '',
    chatId: '',
    communityId: new Uint8Array(),
    displayName: '',
  }
}

export const CommunityRequestToJoin = {
  encode(
    message: CommunityRequestToJoin,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clock !== 0) {
      writer.uint32(8).uint64(message.clock)
    }
    if (message.ensName !== '') {
      writer.uint32(18).string(message.ensName)
    }
    if (message.chatId !== '') {
      writer.uint32(26).string(message.chatId)
    }
    if (message.communityId.length !== 0) {
      writer.uint32(34).bytes(message.communityId)
    }
    if (message.displayName !== '') {
      writer.uint32(42).string(message.displayName)
    }
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CommunityRequestToJoin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseCommunityRequestToJoin()
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
          message.chatId = reader.string()
          break
        case 4:
          message.communityId = reader.bytes()
          break
        case 5:
          message.displayName = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): CommunityRequestToJoin {
    return {
      clock: isSet(object.clock) ? Number(object.clock) : 0,
      ensName: isSet(object.ensName) ? String(object.ensName) : '',
      chatId: isSet(object.chatId) ? String(object.chatId) : '',
      communityId: isSet(object.communityId)
        ? bytesFromBase64(object.communityId)
        : new Uint8Array(),
      displayName: isSet(object.displayName) ? String(object.displayName) : '',
    }
  },

  toJSON(message: CommunityRequestToJoin): unknown {
    const obj: any = {}
    message.clock !== undefined && (obj.clock = Math.round(message.clock))
    message.ensName !== undefined && (obj.ensName = message.ensName)
    message.chatId !== undefined && (obj.chatId = message.chatId)
    message.communityId !== undefined &&
      (obj.communityId = base64FromBytes(
        message.communityId !== undefined
          ? message.communityId
          : new Uint8Array()
      ))
    message.displayName !== undefined && (obj.displayName = message.displayName)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<CommunityRequestToJoin>, I>>(
    object: I
  ): CommunityRequestToJoin {
    const message = createBaseCommunityRequestToJoin()
    message.clock = object.clock ?? 0
    message.ensName = object.ensName ?? ''
    message.chatId = object.chatId ?? ''
    message.communityId = object.communityId ?? new Uint8Array()
    message.displayName = object.displayName ?? ''
    return message
  },
}

function createBaseCommunityCancelRequestToJoin(): CommunityCancelRequestToJoin {
  return {
    clock: 0,
    ensName: '',
    chatId: '',
    communityId: new Uint8Array(),
    displayName: '',
  }
}

export const CommunityCancelRequestToJoin = {
  encode(
    message: CommunityCancelRequestToJoin,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clock !== 0) {
      writer.uint32(8).uint64(message.clock)
    }
    if (message.ensName !== '') {
      writer.uint32(18).string(message.ensName)
    }
    if (message.chatId !== '') {
      writer.uint32(26).string(message.chatId)
    }
    if (message.communityId.length !== 0) {
      writer.uint32(34).bytes(message.communityId)
    }
    if (message.displayName !== '') {
      writer.uint32(42).string(message.displayName)
    }
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CommunityCancelRequestToJoin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseCommunityCancelRequestToJoin()
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
          message.chatId = reader.string()
          break
        case 4:
          message.communityId = reader.bytes()
          break
        case 5:
          message.displayName = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): CommunityCancelRequestToJoin {
    return {
      clock: isSet(object.clock) ? Number(object.clock) : 0,
      ensName: isSet(object.ensName) ? String(object.ensName) : '',
      chatId: isSet(object.chatId) ? String(object.chatId) : '',
      communityId: isSet(object.communityId)
        ? bytesFromBase64(object.communityId)
        : new Uint8Array(),
      displayName: isSet(object.displayName) ? String(object.displayName) : '',
    }
  },

  toJSON(message: CommunityCancelRequestToJoin): unknown {
    const obj: any = {}
    message.clock !== undefined && (obj.clock = Math.round(message.clock))
    message.ensName !== undefined && (obj.ensName = message.ensName)
    message.chatId !== undefined && (obj.chatId = message.chatId)
    message.communityId !== undefined &&
      (obj.communityId = base64FromBytes(
        message.communityId !== undefined
          ? message.communityId
          : new Uint8Array()
      ))
    message.displayName !== undefined && (obj.displayName = message.displayName)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<CommunityCancelRequestToJoin>, I>>(
    object: I
  ): CommunityCancelRequestToJoin {
    const message = createBaseCommunityCancelRequestToJoin()
    message.clock = object.clock ?? 0
    message.ensName = object.ensName ?? ''
    message.chatId = object.chatId ?? ''
    message.communityId = object.communityId ?? new Uint8Array()
    message.displayName = object.displayName ?? ''
    return message
  },
}

function createBaseCommunityRequestToJoinResponse(): CommunityRequestToJoinResponse {
  return {
    clock: 0,
    community: undefined,
    accepted: false,
    grant: new Uint8Array(),
    communityId: new Uint8Array(),
    magnetUri: '',
  }
}

export const CommunityRequestToJoinResponse = {
  encode(
    message: CommunityRequestToJoinResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clock !== 0) {
      writer.uint32(8).uint64(message.clock)
    }
    if (message.community !== undefined) {
      CommunityDescription.encode(
        message.community,
        writer.uint32(18).fork()
      ).ldelim()
    }
    if (message.accepted === true) {
      writer.uint32(24).bool(message.accepted)
    }
    if (message.grant.length !== 0) {
      writer.uint32(34).bytes(message.grant)
    }
    if (message.communityId.length !== 0) {
      writer.uint32(42).bytes(message.communityId)
    }
    if (message.magnetUri !== '') {
      writer.uint32(50).string(message.magnetUri)
    }
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CommunityRequestToJoinResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseCommunityRequestToJoinResponse()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.clock = longToNumber(reader.uint64() as Long)
          break
        case 2:
          message.community = CommunityDescription.decode(
            reader,
            reader.uint32()
          )
          break
        case 3:
          message.accepted = reader.bool()
          break
        case 4:
          message.grant = reader.bytes()
          break
        case 5:
          message.communityId = reader.bytes()
          break
        case 6:
          message.magnetUri = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): CommunityRequestToJoinResponse {
    return {
      clock: isSet(object.clock) ? Number(object.clock) : 0,
      community: isSet(object.community)
        ? CommunityDescription.fromJSON(object.community)
        : undefined,
      accepted: isSet(object.accepted) ? Boolean(object.accepted) : false,
      grant: isSet(object.grant)
        ? bytesFromBase64(object.grant)
        : new Uint8Array(),
      communityId: isSet(object.communityId)
        ? bytesFromBase64(object.communityId)
        : new Uint8Array(),
      magnetUri: isSet(object.magnetUri) ? String(object.magnetUri) : '',
    }
  },

  toJSON(message: CommunityRequestToJoinResponse): unknown {
    const obj: any = {}
    message.clock !== undefined && (obj.clock = Math.round(message.clock))
    message.community !== undefined &&
      (obj.community = message.community
        ? CommunityDescription.toJSON(message.community)
        : undefined)
    message.accepted !== undefined && (obj.accepted = message.accepted)
    message.grant !== undefined &&
      (obj.grant = base64FromBytes(
        message.grant !== undefined ? message.grant : new Uint8Array()
      ))
    message.communityId !== undefined &&
      (obj.communityId = base64FromBytes(
        message.communityId !== undefined
          ? message.communityId
          : new Uint8Array()
      ))
    message.magnetUri !== undefined && (obj.magnetUri = message.magnetUri)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<CommunityRequestToJoinResponse>, I>>(
    object: I
  ): CommunityRequestToJoinResponse {
    const message = createBaseCommunityRequestToJoinResponse()
    message.clock = object.clock ?? 0
    message.community =
      object.community !== undefined && object.community !== null
        ? CommunityDescription.fromPartial(object.community)
        : undefined
    message.accepted = object.accepted ?? false
    message.grant = object.grant ?? new Uint8Array()
    message.communityId = object.communityId ?? new Uint8Array()
    message.magnetUri = object.magnetUri ?? ''
    return message
  },
}

function createBaseCommunityRequestToLeave(): CommunityRequestToLeave {
  return { clock: 0, communityId: new Uint8Array() }
}

export const CommunityRequestToLeave = {
  encode(
    message: CommunityRequestToLeave,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clock !== 0) {
      writer.uint32(8).uint64(message.clock)
    }
    if (message.communityId.length !== 0) {
      writer.uint32(18).bytes(message.communityId)
    }
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CommunityRequestToLeave {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseCommunityRequestToLeave()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.clock = longToNumber(reader.uint64() as Long)
          break
        case 2:
          message.communityId = reader.bytes()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): CommunityRequestToLeave {
    return {
      clock: isSet(object.clock) ? Number(object.clock) : 0,
      communityId: isSet(object.communityId)
        ? bytesFromBase64(object.communityId)
        : new Uint8Array(),
    }
  },

  toJSON(message: CommunityRequestToLeave): unknown {
    const obj: any = {}
    message.clock !== undefined && (obj.clock = Math.round(message.clock))
    message.communityId !== undefined &&
      (obj.communityId = base64FromBytes(
        message.communityId !== undefined
          ? message.communityId
          : new Uint8Array()
      ))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<CommunityRequestToLeave>, I>>(
    object: I
  ): CommunityRequestToLeave {
    const message = createBaseCommunityRequestToLeave()
    message.clock = object.clock ?? 0
    message.communityId = object.communityId ?? new Uint8Array()
    return message
  },
}

function createBaseCommunityMessageArchiveMagnetlink(): CommunityMessageArchiveMagnetlink {
  return { clock: 0, magnetUri: '' }
}

export const CommunityMessageArchiveMagnetlink = {
  encode(
    message: CommunityMessageArchiveMagnetlink,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clock !== 0) {
      writer.uint32(8).uint64(message.clock)
    }
    if (message.magnetUri !== '') {
      writer.uint32(18).string(message.magnetUri)
    }
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CommunityMessageArchiveMagnetlink {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseCommunityMessageArchiveMagnetlink()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.clock = longToNumber(reader.uint64() as Long)
          break
        case 2:
          message.magnetUri = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): CommunityMessageArchiveMagnetlink {
    return {
      clock: isSet(object.clock) ? Number(object.clock) : 0,
      magnetUri: isSet(object.magnetUri) ? String(object.magnetUri) : '',
    }
  },

  toJSON(message: CommunityMessageArchiveMagnetlink): unknown {
    const obj: any = {}
    message.clock !== undefined && (obj.clock = Math.round(message.clock))
    message.magnetUri !== undefined && (obj.magnetUri = message.magnetUri)
    return obj
  },

  fromPartial<
    I extends Exact<DeepPartial<CommunityMessageArchiveMagnetlink>, I>
  >(object: I): CommunityMessageArchiveMagnetlink {
    const message = createBaseCommunityMessageArchiveMagnetlink()
    message.clock = object.clock ?? 0
    message.magnetUri = object.magnetUri ?? ''
    return message
  },
}

function createBaseWakuMessage(): WakuMessage {
  return {
    sig: new Uint8Array(),
    timestamp: 0,
    topic: new Uint8Array(),
    payload: new Uint8Array(),
    padding: new Uint8Array(),
    hash: new Uint8Array(),
    thirdPartyId: '',
  }
}

export const WakuMessage = {
  encode(
    message: WakuMessage,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sig.length !== 0) {
      writer.uint32(10).bytes(message.sig)
    }
    if (message.timestamp !== 0) {
      writer.uint32(16).uint64(message.timestamp)
    }
    if (message.topic.length !== 0) {
      writer.uint32(26).bytes(message.topic)
    }
    if (message.payload.length !== 0) {
      writer.uint32(34).bytes(message.payload)
    }
    if (message.padding.length !== 0) {
      writer.uint32(42).bytes(message.padding)
    }
    if (message.hash.length !== 0) {
      writer.uint32(50).bytes(message.hash)
    }
    if (message.thirdPartyId !== '') {
      writer.uint32(58).string(message.thirdPartyId)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WakuMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseWakuMessage()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.sig = reader.bytes()
          break
        case 2:
          message.timestamp = longToNumber(reader.uint64() as Long)
          break
        case 3:
          message.topic = reader.bytes()
          break
        case 4:
          message.payload = reader.bytes()
          break
        case 5:
          message.padding = reader.bytes()
          break
        case 6:
          message.hash = reader.bytes()
          break
        case 7:
          message.thirdPartyId = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): WakuMessage {
    return {
      sig: isSet(object.sig) ? bytesFromBase64(object.sig) : new Uint8Array(),
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
      topic: isSet(object.topic)
        ? bytesFromBase64(object.topic)
        : new Uint8Array(),
      payload: isSet(object.payload)
        ? bytesFromBase64(object.payload)
        : new Uint8Array(),
      padding: isSet(object.padding)
        ? bytesFromBase64(object.padding)
        : new Uint8Array(),
      hash: isSet(object.hash)
        ? bytesFromBase64(object.hash)
        : new Uint8Array(),
      thirdPartyId: isSet(object.thirdPartyId)
        ? String(object.thirdPartyId)
        : '',
    }
  },

  toJSON(message: WakuMessage): unknown {
    const obj: any = {}
    message.sig !== undefined &&
      (obj.sig = base64FromBytes(
        message.sig !== undefined ? message.sig : new Uint8Array()
      ))
    message.timestamp !== undefined &&
      (obj.timestamp = Math.round(message.timestamp))
    message.topic !== undefined &&
      (obj.topic = base64FromBytes(
        message.topic !== undefined ? message.topic : new Uint8Array()
      ))
    message.payload !== undefined &&
      (obj.payload = base64FromBytes(
        message.payload !== undefined ? message.payload : new Uint8Array()
      ))
    message.padding !== undefined &&
      (obj.padding = base64FromBytes(
        message.padding !== undefined ? message.padding : new Uint8Array()
      ))
    message.hash !== undefined &&
      (obj.hash = base64FromBytes(
        message.hash !== undefined ? message.hash : new Uint8Array()
      ))
    message.thirdPartyId !== undefined &&
      (obj.thirdPartyId = message.thirdPartyId)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<WakuMessage>, I>>(
    object: I
  ): WakuMessage {
    const message = createBaseWakuMessage()
    message.sig = object.sig ?? new Uint8Array()
    message.timestamp = object.timestamp ?? 0
    message.topic = object.topic ?? new Uint8Array()
    message.payload = object.payload ?? new Uint8Array()
    message.padding = object.padding ?? new Uint8Array()
    message.hash = object.hash ?? new Uint8Array()
    message.thirdPartyId = object.thirdPartyId ?? ''
    return message
  },
}

function createBaseWakuMessageArchiveMetadata(): WakuMessageArchiveMetadata {
  return { version: 0, from: 0, to: 0, contentTopic: [] }
}

export const WakuMessageArchiveMetadata = {
  encode(
    message: WakuMessageArchiveMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.version !== 0) {
      writer.uint32(8).uint32(message.version)
    }
    if (message.from !== 0) {
      writer.uint32(16).uint64(message.from)
    }
    if (message.to !== 0) {
      writer.uint32(24).uint64(message.to)
    }
    for (const v of message.contentTopic) {
      writer.uint32(34).bytes(v!)
    }
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): WakuMessageArchiveMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseWakuMessageArchiveMetadata()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.version = reader.uint32()
          break
        case 2:
          message.from = longToNumber(reader.uint64() as Long)
          break
        case 3:
          message.to = longToNumber(reader.uint64() as Long)
          break
        case 4:
          message.contentTopic.push(reader.bytes())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): WakuMessageArchiveMetadata {
    return {
      version: isSet(object.version) ? Number(object.version) : 0,
      from: isSet(object.from) ? Number(object.from) : 0,
      to: isSet(object.to) ? Number(object.to) : 0,
      contentTopic: Array.isArray(object?.contentTopic)
        ? object.contentTopic.map((e: any) => bytesFromBase64(e))
        : [],
    }
  },

  toJSON(message: WakuMessageArchiveMetadata): unknown {
    const obj: any = {}
    message.version !== undefined && (obj.version = Math.round(message.version))
    message.from !== undefined && (obj.from = Math.round(message.from))
    message.to !== undefined && (obj.to = Math.round(message.to))
    if (message.contentTopic) {
      obj.contentTopic = message.contentTopic.map(e =>
        base64FromBytes(e !== undefined ? e : new Uint8Array())
      )
    } else {
      obj.contentTopic = []
    }
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<WakuMessageArchiveMetadata>, I>>(
    object: I
  ): WakuMessageArchiveMetadata {
    const message = createBaseWakuMessageArchiveMetadata()
    message.version = object.version ?? 0
    message.from = object.from ?? 0
    message.to = object.to ?? 0
    message.contentTopic = object.contentTopic?.map(e => e) || []
    return message
  },
}

function createBaseWakuMessageArchive(): WakuMessageArchive {
  return { version: 0, metadata: undefined, messages: [] }
}

export const WakuMessageArchive = {
  encode(
    message: WakuMessageArchive,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.version !== 0) {
      writer.uint32(8).uint32(message.version)
    }
    if (message.metadata !== undefined) {
      WakuMessageArchiveMetadata.encode(
        message.metadata,
        writer.uint32(18).fork()
      ).ldelim()
    }
    for (const v of message.messages) {
      WakuMessage.encode(v!, writer.uint32(26).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WakuMessageArchive {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseWakuMessageArchive()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.version = reader.uint32()
          break
        case 2:
          message.metadata = WakuMessageArchiveMetadata.decode(
            reader,
            reader.uint32()
          )
          break
        case 3:
          message.messages.push(WakuMessage.decode(reader, reader.uint32()))
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): WakuMessageArchive {
    return {
      version: isSet(object.version) ? Number(object.version) : 0,
      metadata: isSet(object.metadata)
        ? WakuMessageArchiveMetadata.fromJSON(object.metadata)
        : undefined,
      messages: Array.isArray(object?.messages)
        ? object.messages.map((e: any) => WakuMessage.fromJSON(e))
        : [],
    }
  },

  toJSON(message: WakuMessageArchive): unknown {
    const obj: any = {}
    message.version !== undefined && (obj.version = Math.round(message.version))
    message.metadata !== undefined &&
      (obj.metadata = message.metadata
        ? WakuMessageArchiveMetadata.toJSON(message.metadata)
        : undefined)
    if (message.messages) {
      obj.messages = message.messages.map(e =>
        e ? WakuMessage.toJSON(e) : undefined
      )
    } else {
      obj.messages = []
    }
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<WakuMessageArchive>, I>>(
    object: I
  ): WakuMessageArchive {
    const message = createBaseWakuMessageArchive()
    message.version = object.version ?? 0
    message.metadata =
      object.metadata !== undefined && object.metadata !== null
        ? WakuMessageArchiveMetadata.fromPartial(object.metadata)
        : undefined
    message.messages =
      object.messages?.map(e => WakuMessage.fromPartial(e)) || []
    return message
  },
}

function createBaseWakuMessageArchiveIndexMetadata(): WakuMessageArchiveIndexMetadata {
  return { version: 0, metadata: undefined, offset: 0, size: 0, padding: 0 }
}

export const WakuMessageArchiveIndexMetadata = {
  encode(
    message: WakuMessageArchiveIndexMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.version !== 0) {
      writer.uint32(8).uint32(message.version)
    }
    if (message.metadata !== undefined) {
      WakuMessageArchiveMetadata.encode(
        message.metadata,
        writer.uint32(18).fork()
      ).ldelim()
    }
    if (message.offset !== 0) {
      writer.uint32(24).uint64(message.offset)
    }
    if (message.size !== 0) {
      writer.uint32(32).uint64(message.size)
    }
    if (message.padding !== 0) {
      writer.uint32(40).uint64(message.padding)
    }
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): WakuMessageArchiveIndexMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseWakuMessageArchiveIndexMetadata()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.version = reader.uint32()
          break
        case 2:
          message.metadata = WakuMessageArchiveMetadata.decode(
            reader,
            reader.uint32()
          )
          break
        case 3:
          message.offset = longToNumber(reader.uint64() as Long)
          break
        case 4:
          message.size = longToNumber(reader.uint64() as Long)
          break
        case 5:
          message.padding = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): WakuMessageArchiveIndexMetadata {
    return {
      version: isSet(object.version) ? Number(object.version) : 0,
      metadata: isSet(object.metadata)
        ? WakuMessageArchiveMetadata.fromJSON(object.metadata)
        : undefined,
      offset: isSet(object.offset) ? Number(object.offset) : 0,
      size: isSet(object.size) ? Number(object.size) : 0,
      padding: isSet(object.padding) ? Number(object.padding) : 0,
    }
  },

  toJSON(message: WakuMessageArchiveIndexMetadata): unknown {
    const obj: any = {}
    message.version !== undefined && (obj.version = Math.round(message.version))
    message.metadata !== undefined &&
      (obj.metadata = message.metadata
        ? WakuMessageArchiveMetadata.toJSON(message.metadata)
        : undefined)
    message.offset !== undefined && (obj.offset = Math.round(message.offset))
    message.size !== undefined && (obj.size = Math.round(message.size))
    message.padding !== undefined && (obj.padding = Math.round(message.padding))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<WakuMessageArchiveIndexMetadata>, I>>(
    object: I
  ): WakuMessageArchiveIndexMetadata {
    const message = createBaseWakuMessageArchiveIndexMetadata()
    message.version = object.version ?? 0
    message.metadata =
      object.metadata !== undefined && object.metadata !== null
        ? WakuMessageArchiveMetadata.fromPartial(object.metadata)
        : undefined
    message.offset = object.offset ?? 0
    message.size = object.size ?? 0
    message.padding = object.padding ?? 0
    return message
  },
}

function createBaseWakuMessageArchiveIndex(): WakuMessageArchiveIndex {
  return { archives: {} }
}

export const WakuMessageArchiveIndex = {
  encode(
    message: WakuMessageArchiveIndex,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    Object.entries(message.archives).forEach(([key, value]) => {
      WakuMessageArchiveIndex_ArchivesEntry.encode(
        { key: key as any, value },
        writer.uint32(10).fork()
      ).ldelim()
    })
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): WakuMessageArchiveIndex {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseWakuMessageArchiveIndex()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          const entry1 = WakuMessageArchiveIndex_ArchivesEntry.decode(
            reader,
            reader.uint32()
          )
          if (entry1.value !== undefined) {
            message.archives[entry1.key] = entry1.value
          }
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): WakuMessageArchiveIndex {
    return {
      archives: isObject(object.archives)
        ? Object.entries(object.archives).reduce<{
            [key: string]: WakuMessageArchiveIndexMetadata
          }>((acc, [key, value]) => {
            acc[key] = WakuMessageArchiveIndexMetadata.fromJSON(value)
            return acc
          }, {})
        : {},
    }
  },

  toJSON(message: WakuMessageArchiveIndex): unknown {
    const obj: any = {}
    obj.archives = {}
    if (message.archives) {
      Object.entries(message.archives).forEach(([k, v]) => {
        obj.archives[k] = WakuMessageArchiveIndexMetadata.toJSON(v)
      })
    }
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<WakuMessageArchiveIndex>, I>>(
    object: I
  ): WakuMessageArchiveIndex {
    const message = createBaseWakuMessageArchiveIndex()
    message.archives = Object.entries(object.archives ?? {}).reduce<{
      [key: string]: WakuMessageArchiveIndexMetadata
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = WakuMessageArchiveIndexMetadata.fromPartial(value)
      }
      return acc
    }, {})
    return message
  },
}

function createBaseWakuMessageArchiveIndex_ArchivesEntry(): WakuMessageArchiveIndex_ArchivesEntry {
  return { key: '', value: undefined }
}

export const WakuMessageArchiveIndex_ArchivesEntry = {
  encode(
    message: WakuMessageArchiveIndex_ArchivesEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== '') {
      writer.uint32(10).string(message.key)
    }
    if (message.value !== undefined) {
      WakuMessageArchiveIndexMetadata.encode(
        message.value,
        writer.uint32(18).fork()
      ).ldelim()
    }
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): WakuMessageArchiveIndex_ArchivesEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseWakuMessageArchiveIndex_ArchivesEntry()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string()
          break
        case 2:
          message.value = WakuMessageArchiveIndexMetadata.decode(
            reader,
            reader.uint32()
          )
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): WakuMessageArchiveIndex_ArchivesEntry {
    return {
      key: isSet(object.key) ? String(object.key) : '',
      value: isSet(object.value)
        ? WakuMessageArchiveIndexMetadata.fromJSON(object.value)
        : undefined,
    }
  },

  toJSON(message: WakuMessageArchiveIndex_ArchivesEntry): unknown {
    const obj: any = {}
    message.key !== undefined && (obj.key = message.key)
    message.value !== undefined &&
      (obj.value = message.value
        ? WakuMessageArchiveIndexMetadata.toJSON(message.value)
        : undefined)
    return obj
  },

  fromPartial<
    I extends Exact<DeepPartial<WakuMessageArchiveIndex_ArchivesEntry>, I>
  >(object: I): WakuMessageArchiveIndex_ArchivesEntry {
    const message = createBaseWakuMessageArchiveIndex_ArchivesEntry()
    message.key = object.key ?? ''
    message.value =
      object.value !== undefined && object.value !== null
        ? WakuMessageArchiveIndexMetadata.fromPartial(object.value)
        : undefined
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
