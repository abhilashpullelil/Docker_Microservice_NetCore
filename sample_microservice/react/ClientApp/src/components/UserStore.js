import { connect } from 'react-redux';
import { App } from '../App';

const User = 'Abhilash';

const updateUser = name => {
    User = name;
};

const mapStateToProps = state => {
    return {
        UserName: User
    };
};

const mapDispatchToProps = dispatch => {
    return {
        UpdateUserName: userName => {
            dispatch(updateUser(userName));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);