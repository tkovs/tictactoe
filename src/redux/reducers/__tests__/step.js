import step from '../step'
import * as types from '../../../actions/types'

describe('step reducer', () => {
  it('should handle initial state', () => {
    expect(
      step(undefined, {})
    ).toEqual(0)
  })

  it('should handle INCREMENT_STEP', () => {
    expect(
      step(undefined, {
        type: types.INCREMENT_STEP
      })
    ).toEqual(1)

    expect(
      step(1, {
        type: types.INCREMENT_STEP
      })
    ).toEqual(2)
  })

  it('should handle JUMP_TO', () => {
    expect(
      step(undefined, {
        type: types.JUMP_TO,
        payload: {
          step: 2
        }
      })
    ).toEqual(2)

    expect(
      step(6, {
        type: types.JUMP_TO,
        payload: {
          step: 5
        }
      })
    ).toEqual(5)
  })
})