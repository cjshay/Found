import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, signin } from '../actions/session_actions';


const formType = (pathname) => {
  if (pathname === "/signin") {
    return 'signin';
  }else if (pathname === "/signup"){
    return 'signup';
  }
};

const processingForm = (dispatch, type) => {
  if (type === 'signin') {
    return user => dispatch(signin(user));
  } else {
  return user => dispatch(signup(user));
  }
};

const mapStateToProps = state => {
  return {
    signedIn: !!state.session.currentUser,
    errors: state.session.errors
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    formType: formType(ownProps.location.pathname),
    processForm: processingForm(dispatch, formType(ownProps.location.pathname))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
