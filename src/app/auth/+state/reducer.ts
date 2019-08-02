import { ActionUnion, ActionTypes } from './actions';
import { User } from '../users';
import { omit as _omit, map as _map, keyBy as _keyBy, reduce as _reduce, find as _find } from 'lodash'
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
            const newState = {
                ...state,
                userIds: _map(users, '_id'),
                userEntities: _keyBy(users, '_id'),
                loading: false,
                blockUi: false
            }
            return newState;
        }

        /** Adding User */
        case ActionTypes.ADD_USER: {
            const newState = {
                ...state,
                loading: true,
            };
            return newState;
        }

        case ActionTypes.ADD_USER_SUCCESS: {
            const newUser = action.payload;
            const uIds = [
                ...state.userIds,
                newUser.id
            ];
            const uEntities = {
                ...state.userEntities
            }
            uEntities[newUser.id] = {
                enroll_id: newUser.id,
                username: newUser.data['username'],
                password: newUser.data['password'],
                address: newUser.data['address']
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


        /** Delete User */
        case ActionTypes.DELETE_USER: {
            const newState = {
                ...state,
                loading: true,
            };
            return newState;
        }

        case ActionTypes.DELETE_USER_SUCCESS: {
            const payload = action.payload;
            const user_id = payload.id;
            const uIds = state.userIds.filter(id => id !== user_id);
            const uEntities = _omit(state.userEntities, user_id);
            const newState = {
                ...state,
                userIds: uIds,
                userEntities: uEntities
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
