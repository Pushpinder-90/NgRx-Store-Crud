import { ActionUnion, ActionTypes } from './actions';
import { User } from '../users';
import { map as _map, keyBy as _keyBy, reduce as _reduce, find as _find } from 'lodash'
import { _iterableDiffersFactory } from '@angular/core/src/application_module';


/*
*all state changes are happening inside the reducer based on the selected ‘Action. 
*/

export const FEATURE_KEY = 'users';

export interface FeatureState {
    userIds?: Array<any>;
    userEntities?: { [key: string]: User };
    selectedUser?: any;
    loading?: boolean;
    blockUi?: boolean;
}

export const initialstate: FeatureState = {
    userIds: [],
    userEntities: {},
};

export function reducer(state: FeatureState = initialstate, action: ActionUnion) {
    switch (action.type) {

        /** Loading all users */
        case ActionTypes.Load_USER: {
            const newState = {
                ...state,
                loading: true,
                blockUi: true
            };
            return newState;
        }

        case ActionTypes.Load_USER_SUCCESS: {
            const users = action.payload
            const updateIDs = _map(users, '_id')
            const updateEntities = _keyBy(users, '_id')
            const newState = {
                ...state,
                userIds: updateIDs,
                userEntities: updateEntities,
                loading: false,
                blockUi: false
            }

            return newState;
        }

        /** Adding User */
        case ActionTypes.ADD_USER: {
            const newState = {
                ...state,
            };
            return newState;
        }

        case ActionTypes.ADD_USER_SUCCESS: {
            const user = action.payload;
            const uIds = [
                ...state.userIds,
                user._id
            ];
            const uEntities = {
                ...state.userEntities
            }
            uEntities[user._id] = {
                enroll_id: user._id,
                username: user.username,
                password: user.password,
                address: user.address
            };
            const newState = {
                ...state,
                userIds: uIds,
                userEntities: uEntities,
                loading: false,
                blockUi: false
            }
            return newState
        }

        /** set selected User */
        case ActionTypes.SET_SELECTED_USER: {
            const newState = {
                ...state,
                selectedUser: action.payload,
            };
            return newState;
        }


    }

}