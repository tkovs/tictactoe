import { history } from '../index'
import * as types from '../../../actions/types'

describe('history reducer', () => {
  it('should handle initial state', () => {
    expect(
      history(undefined, {})
    ).toEqual(
      [{
        squares: Array(9).fill(null),
        coordinates: {}
      }]
    )
  })

  it('should handle TICK_SQUARE', () => {
    expect(
      history(undefined, {
        type: types.TICK_SQUARE,
        payload: {
          position: 3,
          step: 0
        }
      })
    ).toEqual(
      [{
        squares: Array(9).fill(null),
        coordinates: {}
      }, {
        squares: [
          null, null, null,
          'X',  null, null,
          null, null, null
        ],
        coordinates: {
          col: 0,
          row: 1
        }
      }]
    )

    expect(
      history(
        [
          {
            squares: Array(9).fill(null),
            coordinates: {}
          },
          {
            squares: [
              null, null, null,
              'X',  null, null,
              null, null, null
            ],
            coordinates: {
              col: 0,
              row: 1
            }
          },
          {
            squares: [
              null, null, null,
              'X',  null, null,
              null, 'O',  null
            ],
            coordinates: {
              col: 1,
              row: 2
            }
          },
        ],
        {
          type: types.TICK_SQUARE,
          payload: {
            position: 6,
            step: 1
          }
        }
      )
    ).toEqual([
      {
        squares: Array(9).fill(null),
        coordinates: {}
      },
      {
        squares: [
          null, null, null,
          'X',  null, null,
          null, null, null
        ],
        coordinates: {
          col: 0,
          row: 1
        }
      },
      {
        squares: [
          null, null, null,
          'X',  null, null,
          'O',  null, null
        ],
        coordinates: {
          col: 0,
          row: 2
        }
      },
    ])
  })
})