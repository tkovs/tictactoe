import { connect } from 'react-redux'
import History from '../../components/History'
import { jumpTo, updateBoard } from '../../actions'

const mapStateToProps = ({ history }) => ({
  history: history.history,
  selectedHistory: history.selectedHistory,
  xIsNext: history.xIsNext
})

const mapDispatchToProps = (dispatch) => ({
  jumpTo: (step, board) => {
    dispatch(jumpTo(step))
    dispatch(updateBoard(board, step))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(History)