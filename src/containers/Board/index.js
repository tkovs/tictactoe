import Board from '../../components/Board'
import { connect } from 'react-redux'
import { tickSquare, addHistory } from '../../actions'

const mapStateToProps = ({ history, board }) => ({
  squares: board.squares, stepNumber: history.stepNumber
})

const mapDispatchToProps = (dispatch) => ({
  handleClick: index => {
    dispatch(tickSquare(index))
    dispatch(addHistory(index))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board)