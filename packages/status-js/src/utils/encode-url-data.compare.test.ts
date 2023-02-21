import { utf8 } from '@scure/base'
import { describe, expect, test } from 'vitest'

import { encodeUrlData } from './encode-url-data.compare'

import type {
  CommunityChatPreview,
  CommunityPreview,
  UserPreview,
} from '../protos/link-preview_pb'
import type { PlainMessage } from '@bufbuild/protobuf'

describe('community', () => {
  test('A', () => {
    const data = {
      displayName: 'Lorem ipsum dolor sit egestas.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non dui vitae augue elementum laoreet ac pharetra odio. Morbi vestibulum.',
      membersCount: 1_000_000,
      color: '#4360DF',
    }
    const encodedData = encodeUrlData('community', data, {
      serialization: 'csv',
      compression: 'noop',
      encoding: 'encodeURIComponent',
    })
    const characterLength = countCharacters(data)

    expect(characterLength).toBe(184)
    expect(encodedData).toBe(
      'Lorem%20ipsum%20dolor%20sit%20egestas.%2CLorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit.%20Phasellus%20non%20dui%20vitae%20augue%20elementum%20laoreet%20ac%20pharetra%20odio.%20Morbi%20vestibulum.%2C1000000%2C%234360DF'
    )
    expect(encodedData).toHaveLength(243)
  })

  test('B', () => {
    const encodedData = encodeUrlData(
      'community',
      {
        displayName: 'Lorem ipsum dolor sit egestas.',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non dui vitae augue elementum laoreet ac pharetra odio. Morbi vestibulum.',
        membersCount: 1_000_000,
        color: '#4360DF',
      },
      {
        serialization: 'csv',
        compression: 'noop',
        encoding: 'base58',
      }
    )

    expect(encodedData).toBe(
      '2PPnX9fDBvMJvWY5SnfmebN2ewvTW6yzhdJAVTRr3ui3QwzDf1R3GWN27cJ4L9dVZSmbs7tHjwPKfWzSEe2b4viHv7u8KYVFnYpNNS8GDFajUjBd9JuVkHRpEiR9rY7AgNU6CPUKMGDP2URUB9ovMY9KEFkJjpEEzVYTeMq1xuqfTm52nKayo336zDdQM9doCr2x6rL8WBFG2EjcKa7m2P1r2SfBFzvjWpET9LvDuszuJQWieQNbePkcGS6TRCRB'
    )
    expect(encodedData).toHaveLength(256)
  })

  test('C', () => {
    const encodedData = encodeUrlData(
      'community',
      {
        displayName: 'Lorem ipsum dolor sit egestas.',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non dui vitae augue elementum laoreet ac pharetra odio. Morbi vestibulum.',
        membersCount: 1_000_000,
        color: '#4360DF',
      },
      {
        serialization: 'csv',
        compression: 'noop',
        encoding: 'base64url',
      }
    )

    expect(encodedData).toBe(
      'TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGVnZXN0YXMuLExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFBoYXNlbGx1cyBub24gZHVpIHZpdGFlIGF1Z3VlIGVsZW1lbnR1bSBsYW9yZWV0IGFjIHBoYXJldHJhIG9kaW8uIE1vcmJpIHZlc3RpYnVsdW0uLDEwMDAwMDAsIzQzNjBERg=='
    )
    expect(encodedData).toHaveLength(252)
  })

  test('D', () => {
    const encodedData = encodeUrlData(
      'community',
      {
        displayName: 'Lorem ipsum dolor sit egestas.',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non dui vitae augue elementum laoreet ac pharetra odio. Morbi vestibulum.',
        membersCount: 1_000_000,
        color: '#4360DF',
      },
      {
        serialization: 'csv',
        compression: 'brotli',
        encoding: 'base64url',
      }
    )

    expect(encodedData).toBe(
      'G7oA4J0Htk1quxOPrPZpDHNJw9RkbkrTevCrOO5pPfxANBKT1oxRwtgQOeWAPcQSzSTgANtB7jH2huWQRVoeXNBza6V7uZrgrMw0GhZkMRuOLY7JrIAMPXpf3RM0zT7cfDeri-0boxSfphBSswje37Vg4kEm5MX5SzBD4EO9Y49H8fGmPmW1evMEqIN_5A=='
    )
    expect(encodedData).toHaveLength(192)
  })

  test('E', () => {
    const encodedData = encodeUrlData(
      'community',
      {
        displayName: 'Lorem ipsum dolor sit egestas.',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non dui vitae augue elementum laoreet ac pharetra odio. Morbi vestibulum.',
        membersCount: 1_000_000,
        color: '#4360DF',
      },
      {
        serialization: 'protobuf',
        compression: 'brotli',
        encoding: 'base64url',
      }
    )

    expect(encodedData).toBe(
      'G7sAgK0OzJOmo4yssBOBo6ekybWGRw-TDqBpImRzStN66S8_fBx3Wi8-CYpBaDEC98GMkJGEsSFyjBOFTRcZeFtvHzxkKV8QJcbjHpzQfWpGfDia4OjNJC4AIZP5w7_FMpkVkK5bz6NrgKbZ9pt3szpYvtBL8WoKITWKsP-sCRMPMiEP9l-CGQLv6g153IqXJ_Uuk4T2ffHRPA=='
    )
    expect(encodedData).toHaveLength(208)
  })

  test('F', () => {
    const encodedData = encodeUrlData(
      'community',
      {
        displayName: 'Lorem ipsum dolor sit egestas.',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non dui vitae augue elementum laoreet ac pharetra odio. Morbi vestibulum.',
        membersCount: 1_000_000,
        color: '#4360DF',
        publicKey: 'zQ3shY7r4cAdg4eUF5dfcuCqCFzWmdjHW4SX5hspM9ucAarfU',
      },
      {
        serialization: 'protobuf',
        compression: 'brotli',
        encoding: 'base64url',
      }
    )

    expect(encodedData).toBe(
      'G-4A4J0H2WnpjJPkb2iwqTU8ephUAOGSXVVtTnqhBFgOcrv5AXOPPGAEdowT8kE3XWTgAW_ywUOWnpIkSkzGQ0YHFAu7fE-FKmBTmil0oxrhsM7h3GJZsXIGoSlSUeQbQEt1bbx5t5YL-OBBM8GKqkAQ3DCC9xt2YEXIiBWEgtiKjDULCJrCGtyFLAlWWCpJtuzWxu9Yb2d7b-P0XG7-P22X9ms_76gj3ezg2_muXio-SSfn_x9Of19-7Lx87rYl3h0yEHn5Bg=='
    )
    expect(encodedData).toHaveLength(268)
  })

  describe('max', () => {
    test('A', () => {
      const encodedData = encodeUrlData(
        'community',
        {
          displayName: 'Lorem ipsum dolor sit egestas.',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non dui vitae augue elementum laoreet ac pharetra odio. Morbi vestibulum.',
          membersCount: 1_000_000,
          color: '#4360DF',
        },
        {
          serialization: 'protobuf',
          compression: 'brotli',
          encoding: 'base64url',
        }
      )

      expect(encodedData).toBe(
        'G7sAgK0OzJOmo4yssBOBo6ekybWGRw-TDqBpImRzStN66S8_fBx3Wi8-CYpBaDEC98GMkJGEsSFyjBOFTRcZeFtvHzxkKV8QJcbjHpzQfWpGfDia4OjNJC4AIZP5w7_FMpkVkK5bz6NrgKbZ9pt3szpYvtBL8WoKITWKsP-sCRMPMiEP9l-CGQLv6g153IqXJ_Uuk4T2ffHRPA=='
      )
      expect(encodedData).toHaveLength(208)
    })
  })

  describe('mid', () => {
    test('A', () => {
      const encodedData = encodeUrlData(
        'community',
        {
          displayName: 'Lorem ipsum eu.',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ex eu.',
          membersCount: 500_000,
          color: '#4360DF',
        },
        {
          serialization: 'protobuf',
          compression: 'brotli',
          encoding: 'base64url',
        }
      )

      expect(encodedData).toBe(
        'G2UA-J0Htk1qG1d7YfVJhrl-0BBikkagwtbcoqXJocUgXzQ1QxrbIQ9uG_t_MGFsiHoQhUCCShIAwjqn3CcrdFhUMGQT03NTR6r0E7k3Y3Z6TKSiQy1re8FPXfCwgA7-LOTotWW_rww='
      )
      expect(encodedData).toHaveLength(140)
    })
  })

  describe('min', () => {
    test('A', () => {
      const encodedData = encodeUrlData(
        'community',
        {
          displayName: 'L',
          membersCount: 0,
          color: '#4360DF',
        } as unknown as PlainMessage<CommunityPreview>,
        {
          serialization: 'protobuf',
          compression: 'brotli',
          encoding: 'base64url',
        }
      )

      expect(encodedData).toBe('iwWAGgFMQgcjNDM2MERGAw==')
      expect(encodedData).toHaveLength(24)
    })
  })
})

describe('chat', () => {
  test('A', () => {
    const data = {
      emoji: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
      displayName: 'lorem-ipsum-dolore-nulla',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non dui vitae augue elementum laoreet ac pharetra odio. Morbi vestibulum.',
      color: '#EAB700',
      community: {
        displayName: 'Lorem ipsum dolor sit egestas.',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non dui vitae augue elementum laoreet ac pharetra odio. Morbi vestibulum.',
        membersCount: 1_000_000,
        color: '#4360DF',
      },
    }
    const encodedData = encodeUrlData('chat', data, {
      serialization: 'protobuf',
      compression: 'brotli',
      encoding: 'base64url',
    })
    const characterLength = countCharacters(data)

    expect(characterLength).toBe(383)
    expect(encodedData).toBe(
      'G44BYCwKbLcVA5s5Bhs2lC8WIsbe1Ll70Kdv4FgHbWRTahsNE7FyJPCzCRkfQZmb4bJ3OjqVUh33_HvYgBqJydeBkE6OvwNbW5RYIBimLYEE85hyGwPHcepRaBelEHXmnEX3yVmaUcoIuLwEjUcQGxwNyGT88OJiMRjpkKZbz62rg0OjnnDuj5EHyxZaKh4NISR7Eg3GcmKIORmQG_svznCBNbWK1vxSPDyhV46c9cue2_5bgB6TrsKFS1NlHSn9HRAR3Nh3gj7ybhZ_bqKYhi3LGg=='
    )
    expect(encodedData).toHaveLength(284)
  })

  test('B', () => {
    const data = {
      emoji: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
      displayName: 'lorem-ipsum-dolore-nulla',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non dui vitae augue elementum laoreet ac pharetra odio. Morbi vestibulum.',
      color: '#EAB700',
      communityDisplayName: 'Lorem ipsum dolor sit egestas.',
      communityDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non dui vitae augue elementum laoreet ac pharetra odio. Morbi vestibulum.',
      communityMembersCount: 1_000_000,
      communityColor: '#4360DF',
    }
    const encodedData = encodeUrlData('chat', data, {
      serialization: 'csv',
      compression: 'noop',
      encoding: 'encodeURIComponent',
    })

    expect(encodedData).toBe(
      '%F0%9F%8F%B4%F3%A0%81%A7%F3%A0%81%A2%F3%A0%81%A5%F3%A0%81%AE%F3%A0%81%A7%F3%A0%81%BF%2Clorem-ipsum-dolore-nulla%2CLorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit.%20Phasellus%20non%20dui%20vitae%20augue%20elementum%20laoreet%20ac%20pharetra%20odio.%20Morbi%20vestibulum.%2C%23EAB700%2CLorem%20ipsum%20dolor%20sit%20egestas.%2CLorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit.%20Phasellus%20non%20dui%20vitae%20augue%20elementum%20laoreet%20ac%20pharetra%20odio.%20Morbi%20vestibulum.%2C1000000%2C%234360DF'
    )
    expect(encodedData).toHaveLength(552)
  })

  test('C', () => {
    const data = {
      emoji: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
      displayName: 'lorem-ipsum-dolore-nulla',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non dui vitae augue elementum laoreet ac pharetra odio. Morbi vestibulum.',
      color: '#EAB700',
      communityDisplayName: 'Lorem ipsum dolor sit egestas.',
      communityDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non dui vitae augue elementum laoreet ac pharetra odio. Morbi vestibulum.',
      communityMembersCount: 1_000_000,
      communityColor: '#4360DF',
    }
    const encodedData = encodeUrlData('chat', data, {
      serialization: 'csv',
      compression: 'brotli',
      encoding: 'base64url',
    })

    expect(encodedData).toBe(
      'G4UB4B2HKdyc5OYnb5yWKdkV_LzlLdVf_3Db_15mSNQgJCEym2mSzrbZtB60VuPuf9ILlmH6Ojn-Qso1bIuyBAPBtIWQeUK5jQ3BNXwK0ixiRn9nO1jYdlF-VnNeTc7N1YZRWyOCalEEwgZXArQ4Kv272AyOdNCQI_eVPcEq0e85z1XzYtvGSMEvQQzKmYw4R8kFJXPmAL04HzmHE2yIdVTzR_DzDXlSc_Vakg8OcOI8t38-YlTGG5CLiiFm'
    )
    expect(encodedData).toHaveLength(252) // shorter than A
  })

  test('D', () => {
    const data = {
      emoji: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
      displayName: 'lorem-ipsum-dolore-nulla',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non dui vitae augue elementum laoreet ac pharetra odio. Morbi vestibulum.',
      color: '#EAB700',
      communityDisplayName: 'Lorem ipsum dolor sit egestas.',
      communityDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non dui vitae augue elementum laoreet ac pharetra odio. Morbi vestibulum.',
      communityMembersCount: 1_000_000,
      communityColor: '#4360DF',
    }
    const encodedData = encodeUrlData('chat', data, {
      serialization: 'csv',
      compression: 'noop',
      encoding: 'base64url',
    })

    expect(encodedData).toBe(
      '8J-PtPOggafzoIGi86CBpfOgga7zoIGn86CBvyxsb3JlbS1pcHN1bS1kb2xvcmUtbnVsbGEsTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gUGhhc2VsbHVzIG5vbiBkdWkgdml0YWUgYXVndWUgZWxlbWVudHVtIGxhb3JlZXQgYWMgcGhhcmV0cmEgb2Rpby4gTW9yYmkgdmVzdGlidWx1bS4sI0VBQjcwMCxMb3JlbSBpcHN1bSBkb2xvciBzaXQgZWdlc3Rhcy4sTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gUGhhc2VsbHVzIG5vbiBkdWkgdml0YWUgYXVndWUgZWxlbWVudHVtIGxhb3JlZXQgYWMgcGhhcmV0cmEgb2Rpby4gTW9yYmkgdmVzdGlidWx1bS4sMTAwMDAwMCwjNDM2MERG'
    )
    expect(encodedData).toHaveLength(520)
  })

  test('E', () => {
    const data = {
      emoji: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
      displayName: 'lorem-ipsum-dolore-nulla',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non dui vitae augue elementum laoreet ac pharetra odio. Morbi vestibulum.',
      color: '#EAB700',
      communityDisplayName: 'Lorem ipsum dolor sit egestas.',
      communityDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non dui vitae augue elementum laoreet ac pharetra odio. Morbi vestibulum.',
      communityMembersCount: 1_000_000,
      communityColor: '#4360DF',
    }
    const encodedData = encodeUrlData('chat', data, {
      serialization: 'protobuf',
      compression: 'brotli',
      encoding: 'base64url',
    })

    expect(encodedData).toBe(
      'G4sBYCwOzNM_RWBzjmD5rRAWh6Zu3oM-_QbeRXOSpbQtygtx9Ugg4aceYXwEZepMwosOV0sYGBp1mlNmKZ8cu3XwppPj78DWFiUWCIZpSyDBtpxyGwPHcepRaBelEI3LOJLuEyPVlDQCLpeg9whig6MOGfQPXlwsOj0MUnXreXQ2sKvnE8793uNgrokailddCIkWRIOxGOiyjHTIg_0Xo5tgVV0ZQyuKl8e1RI-Rb_bc-e8OTFj1EE5cGkWS-lK2IrWxLQR95Fsr_t0FBdZ4Mi8B'
    )
    expect(encodedData).toHaveLength(280)
  })

  test('F', () => {
    const data = {
      emoji: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
      displayName: 'lorem-ipsum-dolore-nulla',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non dui vitae augue elementum laoreet ac pharetra odio. Morbi vestibulum.',
      color: '#EAB700',
      communityDisplayName: 'Lorem ipsum dolor sit egestas.',
      communityDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non dui vitae augue elementum laoreet ac pharetra odio. Morbi vestibulum.',
      communityMembersCount: 1_000_000,
      communityColor: '#4360DF',
    }
    const encodedData = encodeUrlData('chat', data, {
      serialization: 'csv',
      compression: 'lz',
      encoding: 'base64url',
    })

    expect(encodedData).toBe(
      'jwbhf9wC245jtoRjtopjtkHY7kyH8dgNAGwPYCcCmAtgLQCWADgM4CuJAJtjgcQHbWaYCG6AMnkQAIKNQgIZMBlUgBcBnQvmnoBAY2wtK-FdMXVccuhVKUVpFgHMB-TDIB0AgAoALTpo7VKAlurHVSAgDcZTnw5anNqUOsifBZpWgEufkU5FQFyFwJpXE4BbENsewBZPAAjfwD8SmlSUvZaW3QAYgBRAEEAIQB2AAYe3n5RYQTxPEkZK3Mq6VdGvgIhqhHGMalZeUVlNQ0tHXj9TkNyY1MLKxtpe2dXa0wPLx86P0Dg0M5wyPOYuISkghTOGkMpwsjk8gVimUKtNavVCI0AIx9ZH9JoAFgAzAA2HoAEQAYkAAA=='
    )
    expect(encodedData).toHaveLength(376)
  })

  test('G', () => {
    const data = {
      emoji: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
      displayName: 'lorem-ipsum-dolore-nulla',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non dui vitae augue elementum laoreet ac pharetra odio. Morbi vestibulum.',
      color: '#EAB700',
      community: {
        displayName: 'Lorem ipsum dolor sit egestas.',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non dui vitae augue elementum laoreet ac pharetra odio. Morbi vestibulum.',
        membersCount: 1_000_000,
        color: '#4360DF',
      },
    }
    const encodedData = encodeUrlData('chat', data, {
      serialization: 'protobuf',
      compression: 'browser:brotli',
      encoding: 'base64url',
    })

    expect(encodedData).toBe(
      'G44BACwKbLcVA5s5Bhs2lC8WIsbe1Ll70Kdv4FgHbWRTahsNE7FyJPCzCRkfQZmb4bJ3OjqVUh33_HvYgBqJydeBkE6OvwNbW5RYIBimLYEE85hyGwPH8ehRaBelEHXmnEX3yVmaUcoUuLwEjU0QGxwNyGT88OViMRjpkKZbz62rg0OjXnHuj5EHyxZaKh4NISR7EiXGcmKIORmQG_svznCBNbWK1vxSPDyhV46c9cue2_5bgB6TrtqFS1NlHSn9HRCR3djXgj7yLhd_bqKYhi3LGg=='
    ) // has slightly different output then node:brotli
    expect(encodedData).toHaveLength(284) // but has same length
  })

  test('H', () => {
    const data = {
      emoji: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
      displayName: '有些出于偶然',
      description:
        '无可否认，当读者在浏览一个页面的排版时，难免会被可阅读的内容所分散注意力。有些则是故',
      color: '#EAB700',
      community: {
        displayName: '它使用由超过200个拉丁',
        description:
          '然而这个生成器则是互联网上首个确切的生成器。它使用由超过200个拉丁单词所构造的词典',
        membersCount: 1_000_000,
        color: '#4360DF',
      },
    }
    const encodedData = encodeUrlData('chat', data, {
      serialization: 'protobuf',
      compression: 'brotli',
      encoding: 'base64url',
    })

    expect(encodedData).toBe(
      'G2QBQJwFdqwxrBnNb57kP0irrJpuouIjS1WZqHS6A2txojsUHidyu3evaAO3GQQku5NCQXiwAYchBIMNyptts-MD9bZAwoTasraIMkjbS1uAD7oxsAQ53OAmQWCefyBuuXlAu6J7eKQRQhgg5tan75fFp9jwGIjBLbGhnyUht2qj5GWlSBp7_OXsHxgnr21xA2HgR9VGYYikQJA4tcQHDrQzg_ARC9KiOVDD6vgTCM9_CN0HJ1zxwP3w6nzgkDTNuvDCFD3Clqo6Cf_UNY2cNRlKTqj86G4gC2dUNSApwiq72BdGTtrleiRFPUhCbTRbmEG4YwFOs4EjBdJHHRiqjS5GYGc1dAdgcGr2BQ=='
    )
    expect(encodedData).toHaveLength(360)
  })

  test('I', () => {
    const data = {
      emoji: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
      displayName: 'обеспечивает',
      description:
        'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает',
      color: '#EAB700',
      community: {
        displayName: 'скрытой в середи',
        description:
          'Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э.,',
        membersCount: 1_000_000,
        color: '#4360DF',
      },
    }
    const encodedData = encodeUrlData('chat', data, {
      serialization: 'protobuf',
      compression: 'brotli',
      encoding: 'base64url',
    })

    expect(encodedData).toBe(
      'GxwC4D0Ubywi9SATczdEJ2bC9dWrQIKfXPR8jLEGQiSJ_SGaJ6JY7ZTujUTnQrt9qZ1ouaETCKUQfnO7Q9js2xzp0wQot4Ehp_9TnTB0oVq6CVJWl0Iob3VQ0zA2OkQrCC7b5OZsefwWKLzmCUUceGZZd9nuRgOf6gbOMeHZFHxcufBkaVnOE5xkQQowVp8XfECxjCqrzMjSlkd4foK0kDWOSW6wGIZGi-0VN7WIpqAAtEuLE5o2tgFjZ_3PVd__3_kpvOBdv-aenxPHNZfsd1vdzDqVIdaoyZjQpO1r0Y_FIByzbkM31hg-Xdx_9ke5q0gVPPWEX_FoGG9GZcq-D0GcNVnD4C9pskfUHpbphAwja_AfAfu-hoyWxDT1pphVjEKh9UYCw0aO0R7ImQoMgdBSOs1ZdjI-cHWw169xxXF2mt8A'
    )
    expect(encodedData).toHaveLength(432)
  })

  describe('max', () => {
    test('A', () => {
      const data = {
        emoji: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
        displayName: 'lorem-ipsum-dolore-nulla',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non dui vitae augue elementum laoreet ac pharetra odio. Morbi vestibulum.',
        color: '#EAB700',
        community: {
          displayName: 'Lorem ipsum dolor sit egestas.',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non dui vitae augue elementum laoreet ac pharetra odio. Morbi vestibulum.',
          membersCount: 1_000_000,
          color: '#4360DF',
        },
      }
      const encodedData = encodeUrlData('chat', data, {
        serialization: 'protobuf',
        compression: 'noop',
        encoding: 'base64url',
      })

      expect(encodedData).toBe(
        'G44BYCwKbLcVA5s5Bhs2lC8WIsbe1Ll70Kdv4FgHbWRTahsNE7FyJPCzCRkfQZmb4bJ3OjqVUh33_HvYgBqJydeBkE6OvwNbW5RYIBimLYEE85hyGwPHcepRaBelEHXmnEX3yVmaUcoIuLwEjUcQGxwNyGT88OJiMRjpkKZbz62rg0OjnnDuj5EHyxZaKh4NISR7Eg3GcmKIORmQG_svznCBNbWK1vxSPDyhV46c9cue2_5bgB6TrsKFS1NlHSn9HRAR3Nh3gj7ybhZ_bqKYhi3LGg=='
      )
      expect(encodedData).toHaveLength(284)
    })
  })

  describe('mid', () => {
    test('A', () => {
      const data = {
        emoji: '💂‍♀️',
        displayName: 'lorem-ipsuma',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ex eu.',
        color: '#EAB700',
        community: {
          displayName: 'Lorem ipsum eu.',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ex eu.',
          membersCount: 500_000,
          color: '#4360DF',
        },
      }
      const encodedData = encodeUrlData('chat', data, {
        serialization: 'protobuf',
        compression: 'brotli',
        encoding: 'base64url',
      })

      expect(encodedData).toBe(
        'G9UAoBwFbutBXB2JQFKvc_1N3QT5fb5B_hvLtlECf_m2qATjCB-k-oBpqoxtuWX_6WiKKMdd-iuErOdVCBxy84NiwBamlmFq9cNzgskMjN-kHzaiXNsgQN1fhCXUmTueFueSWRPabVic9t7gYynoDib4gyUb_K9jCn4Op_-eNcL0dZNbW10NCx5Yshj9er-8wSRxZrsB'
      )
      expect(encodedData).toHaveLength(200)
    })
  })

  describe('min', () => {
    test('A', () => {
      const data = {
        emoji: '🫅',
        displayName: 'l',
        color: '#EAB700',
        community: {
          displayName: 'L',
          membersCount: 0,
          color: '#4360DF',
        },
      }
      const encodedData = encodeUrlData(
        'chat',
        data as unknown as PlainMessage<CommunityChatPreview>,
        {
          serialization: 'protobuf',
          compression: 'brotli',
          encoding: 'base64url',
        }
      )

      expect(encodedData).toBe(
        'iw-AEgFsKgTwn6uFMgcjRUFCNzAwOgwaAUxCByM0MzYwREYD'
      )
      expect(encodedData).toHaveLength(48)
    })
  })
})

describe('user', () => {
  test('A', () => {
    const data = {
      displayName: 'Lorem ipsum dolore nulla',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce finibus eleifend urna. Sed euismod tellus vel tellus interdum molestie. Maecenas ut fringilla dui. Duis auctor quis magna at congue. Duis euismod tempor pharetra. Morbi blandit.',
      color: '#EAB700',
    }
    const encodedData = encodeUrlData('user', data, {
      serialization: 'protobuf',
      compression: 'brotli',
      encoding: 'base64url',
    })
    const characterLength = countCharacters(data)

    expect(characterLength).toBe(271)
    expect(encodedData).toBe(
      'GxUBoJwHdsOHgITK206z2oTI6cn2pEtSkxmSJyFKmBF4myq27J1Oe-VxJ_YlRcI4D_AFouMYJ6wzv66LnJ8PjkNGz1Pk70qr7Qlu6Ju9l74z4W0mn-EsI7Ugm_X1x5OzWB2Qpa_mVH9A0xqmcxK3ul6doFFv-kKHy3BcYGvus1A068Q_jaZ6MVZv7GPMUg4UTrokunCH-qNmgtU6VGtCetYJ_MlteVwghXn8aQawLdzvCbw_CVbIwBOX4nqHxmqUOtIB'
    )
    expect(encodedData).toHaveLength(260)
  })

  test('B', () => {
    const data = {
      displayName: 'John',
      description: 'I am John',
      color: '#EAB700',
    }
    const encodedData = encodeUrlData('user', data, {
      serialization: 'protobuf',
      compression: 'brotli',
      encoding: 'base64url',
    })
    const characterLength = countCharacters(data)

    expect(characterLength).toBe(20)
    expect(encodedData).toBe('iwyAEgRKb2huGglJIGFtIEpvaG46ByNFQUI3MDAD')
    expect(encodedData).toHaveLength(40)
  })

  test('C', () => {
    const data = {
      displayName: 'John',
      description: 'I am John',
      color: '#EAB700',
    }
    const encodedData = encodeUrlData('user', data, {
      serialization: 'csv',
      compression: 'brotli',
      encoding: 'base64url',
    })
    const characterLength = countCharacters(data)

    expect(characterLength).toBe(20)
    expect(encodedData).toBe('iwqASm9obixJIGFtIEpvaG4sI0VBQjcwMAM=')
    expect(encodedData).toHaveLength(36)
  })

  test('D', () => {
    const data = {
      displayName: 'John',
      description: 'I am John',
      color: '#EAB700',
    }
    const encodedData = encodeUrlData('user', data, {
      serialization: 'csv',
      compression: 'noop',
      encoding: 'encodeURIComponent',
    })
    const characterLength = countCharacters(data)

    expect(characterLength).toBe(20)
    expect(encodedData).toBe('John%2CI%20am%20John%2C%23EAB700')
    expect(encodedData).toHaveLength(32)
  })

  describe('max', () => {
    test('A', () => {
      const data = {
        displayName: 'Lorem ipsum dolore nulla',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce finibus eleifend urna. Sed euismod tellus vel tellus interdum molestie. Maecenas ut fringilla dui. Duis auctor quis magna at congue. Duis euismod tempor pharetra. Morbi blandit.',
        color: '#EAB700',
      }
      const encodedData = encodeUrlData('user', data, {
        serialization: 'protobuf',
        compression: 'brotli',
        encoding: 'base64url',
      })

      expect(encodedData).toBe(
        'GxUBoJwHdsOHgITK206z2oTI6cn2pEtSkxmSJyFKmBF4myq27J1Oe-VxJ_YlRcI4D_AFouMYJ6wzv66LnJ8PjkNGz1Pk70qr7Qlu6Ju9l74z4W0mn-EsI7Ugm_X1x5OzWB2Qpa_mVH9A0xqmcxK3ul6doFFv-kKHy3BcYGvus1A068Q_jaZ6MVZv7GPMUg4UTrokunCH-qNmgtU6VGtCetYJ_MlteVwghXn8aQawLdzvCbw_CVbIwBOX4nqHxmqUOtIB'
      )
      expect(encodedData).toHaveLength(260)
    })
  })

  describe('mid', () => {
    test('A', () => {
      const data = {
        displayName: 'Lorem ipsuma',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae urna sagittis, maximus metus in, finibus lacus sed.',
        color: '#EAB700',
      }
      const encodedData = encodeUrlData('user', data, {
        serialization: 'protobuf',
        compression: 'brotli',
        encoding: 'base64url',
      })

      expect(encodedData).toBe(
        'G5AAYBwJdmzJcOxhPUKlJ4MEk6lL4QNedFJp9LSDbcKdfT-WnaoBAxtw4JBRIDpttPDVyOSjpLrzeqQZ3LTNcvqj_PdKg8zJHMK6aAqWrB2QyI0auBSkidbj2zQk_GiS0I5FoFJoRnVbh4o5mc7FIXOhb4pJQtMaU-zv3fnzeF4A'
      )
      expect(encodedData).toHaveLength(172)
    })
  })

  describe('min', () => {
    test('A', () => {
      const data = {
        displayName: 'Lorem',
        color: '#EAB700',
      }
      const encodedData = encodeUrlData(
        'user',
        data as unknown as PlainMessage<UserPreview>,
        {
          serialization: 'protobuf',
          compression: 'brotli',
          encoding: 'base64url',
        }
      )

      expect(encodedData).toBe('iweAEgVMb3JlbToHI0VBQjcwMAM=')
      expect(encodedData).toHaveLength(28)
    })
  })
})

// function countCharacters(data: Record<string, string | number>): number {
function countCharacters(data: object): number {
  return Object.values(data).reduce((a, v) => {
    if (typeof v === 'object') {
      return a + countCharacters(v)
    }

    return a + utf8.decode(v.toString()).length
  }, 0)
}
