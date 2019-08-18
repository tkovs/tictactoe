import board from '../board'
import { TICK_SQUARE, UPDATE_BOARD } from '../../actions'

describe('board reducer', () => {
  it('should handle initial state', () => {
    expect(
      board(undefined, {})
    ).toEqual({
      squares: Array(9).fill(null),
      xIsNext: true
    })
  })

  it('should handle TICK_SQUARE', () => {
    expect(
      board(undefined, {
        type: TICK_SQUARE,
        position: 3
      })
    ).toEqual({
      squares: [
        null, null, null,
        'X',  null, null,
        null, null, null
      ],
      xIsNext: false
    })

    expect(
      board(
        {
          squares: [
            null, null, 'O',
            null, 'X',  'O',
            null, 'X',  null
          ],
          xIsNext: true
        },
        { }
      )
    ).toEqual({
      squares: [
        null, null, 'O',
        null, 'X',  'O',
        null, 'X',  null
      ],
      xIsNext: true
    })

    expect(
      board(
        {
          squares: [
            null, null, 'O',
            null, 'X',  'O',
            'X', 'X',  null
          ],
          xIsNext: false
        },
        {
          type: TICK_SQUARE,
          position: 8
        }
      )
    ).toEqual({
      squares: [
        null, null, 'O',
        null, 'X',  'O',
        'X',  'X',  'O'
      ],
      xIsNext: true
    })
  })

  it('should handle UPDATE_BOARD', () => {
    expect(
      board(
        {
          squares: [
            null, null, 'X',
            'O',  'X',  'O',
            null, null, 'X'
          ],
          xIsNext: false
        },
        {
          type: UPDATE_BOARD,
          board: {
            squares: [
              null, null, null,
              'O',  'X',  'O',
              null, null, 'X'
            ],
            step: 4
          }
        }
      )
    ).toEqual(
      {
        squares: [
          null, null, null,
          'O', 'X', 'O',
          null, null, 'X'
        ],
        xIsNext: true
      }
    )
  })
})