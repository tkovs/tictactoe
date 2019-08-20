import { connect } from 'react-redux'
import History from '../../components/History'
import { jumpTo } from '../../actions'

const mapStateToProps = ({ history, step }) => ({
  history, step
})

const mapDispatchToProps = (dispatch) => ({
  handleClick: (step) => dispatch(jumpTo(step))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(History)