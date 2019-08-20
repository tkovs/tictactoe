import Board from '../../components/Board'
import { connect } from 'react-redux'
import { tickSquare } from '../../actions'

const mapStateToProps = ({ history, step }) => ({
  squares: history[step].squares, step
})

const mapDispatchToProps = (dispatch) => ({
  handleClick: (index, step) => dispatch(tickSquare(index, step))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board)