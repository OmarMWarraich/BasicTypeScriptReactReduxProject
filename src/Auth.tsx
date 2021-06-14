import React from 'react';
import { RootState } from './redux';
import { login,logout } from './redux/modules/user';
import { connect } from 'react-redux';

const mapStateToProps = (state: RootState) => ({
    username: state.user.username,
})

const mapDispatchToProps = { login, logout };

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const UnconnectedAuth: React.FC<Props> = props => {
    // Do auth things here!
    return <>{props.username}</>;
};

export const Auth = connect(
    mapStateToProps,
    mapDispatchToProps
)(UnconnectedAuth);
