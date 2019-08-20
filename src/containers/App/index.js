import App from '../../components/App'
import { connect } from 'react-redux'
import { tickSquare } from '../../actions'

const mapStateToProps = ({ feedback }) => ({
  feedback: feedback.feedback, category: feedback.category
})

const mapDispatchToProps = (dispatch) => ({
  handleClick: (index, step) => dispatch(tickSquare(index, step))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
