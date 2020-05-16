import { getInitialData } from '../utils/api';
import { receiveUsers } from './users';
import { receiveTweets } from './tweets';
import { setAuthUser } from './authUser';
import { showLoading, hideLoading } from 'react-redux-loading';

const AUTHED_ID = 'tylermcginnis';

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading());
        return getInitialData()
            .then(({ users, tweets }) => {
                dispatch(receiveUsers(users));
                dispatch(receiveTweets(tweets));
                dispatch(setAuthUser(AUTHED_ID));
                dispatch(hideLoading());
            })
    }

}