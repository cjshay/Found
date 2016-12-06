import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, signin } from '../actions/session_actions';


const formType = (pathname) => {
  if (pathname === "/login") {
    return 'login';
  }else if (pathname === "/signup"){
    return 'signup';
  }
};

const processingForm = (dispatch, type) => {
  if (type === 'login') {
    return user => dispatch(login(user));
  } else {
  return user => dispatch(signup(user));
  }
};

const mapStateToProps = state => {
  return {
    loggedIn: !!state.session.currentUser,
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
