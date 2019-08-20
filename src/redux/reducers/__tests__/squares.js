import squares from '../squares'
import * as types from '../../../actions/types';

describe('squares reducer', () => {
  it('should handle initial state', () => {
    expect(
      squares(undefined, {})
    ).toEqual(Array(9).fill(null))
  })

  it('should handle TICK_SQUARE', () => {
    expect(
      squares(undefined, {
        type: types.TICK_SQUARE,
        payload: {
          position: 6,
          step: 0
        }
      })
    ).toEqual([
      null, null, null,
      null, null, null,
      'X',  null, null
    ])

    expect(
      squares([
        null, null, 'X',
        'O',  'X',  'O',
        null, null, null
      ], {
        type: types.TICK_SQUARE,
        payload: {
          position: 6,
          step: 4
        }
      })
    ).toEqual([
      null, null, 'X',
      'O',  'X',  'O',
      'X',  null, null
    ])

    expect(
      squares([
        null, 'X',  'X',
        'O',  'X',  'O',
        null, null, null
      ], {
        type: types.TICK_SQUARE,
        payload: {
          position: 6,
          step: 4
        }
      })
    ).toEqual([
      null, 'X',  'X',
      'O',  'X',  'O',
      'O',  null, null
    ])
  })
})
