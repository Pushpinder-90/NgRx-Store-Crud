import { Action } from '@ngrx/store';
import { User } from '../users';

/* 
* Change the collection of the user's state using the actions
*/

export enum ActionTypes {
    Load_USER = '[User] Load User',
    Load_USER_SUCCESS = '[User] Load User Success',
    Load_USER_FAILURE = '[User] Load User Failure',

    ADD_USER = '[User] Add User',
    ADD_USER_SUCCESS = '[User] Add User Success',
    ADD_USER_FAILURE = '[User] Add User Failure',

    EDIT_USER = '[User] Edit User',
    EDIT_USER_SUCCESS = '[User] Edit User Success',
    EDIT_USER_FAILURE = '[User] Edit User Failure',

    SET_SELECTED_USER = '[User] Set Selected User',
}


export class EditUser implements Action {
    readonly type = ActionTypes.EDIT_USER;
    constructor(public payload: any) { }
}

export class EditUserSuccess implements Action {
    readonly type = ActionTypes.EDIT_USER_SUCCESS;
    constructor(public payload: User) { }
}

export class EditUserFailure implements Action {
    readonly type = ActionTypes.EDIT_USER_FAILURE;
    constructor(public payload: string) { }
}

export class LoadUser implements Action {
    readonly type = ActionTypes.Load_USER;
    constructor() { }
}

export class LoadUserSuccess implements Action {
    readonly type = ActionTypes.Load_USER_SUCCESS;
    constructor(public payload: User[]) { }
}

export class LoadUserError implements Action {
    readonly type = ActionTypes.Load_USER_FAILURE;
    constructor(public payload: string) { }
}

export class AddUser implements Action {
    readonly type = ActionTypes.ADD_USER;
    constructor(public payload: any) { }
}

export class AddUserSuccess implements Action {
    readonly type = ActionTypes.ADD_USER_SUCCESS;
    constructor(public payload: any) { }
}

export class AddUserFailed implements Action {
    readonly type = ActionTypes.ADD_USER_FAILURE;
    constructor(public payload: string) { }
}

//  --- Set Selection

export class SetSelectedUser implements Action {
    readonly type = ActionTypes.SET_SELECTED_USER;
    constructor(public payload: any) { }
}


export type ActionUnion = AddUser
    | AddUserSuccess
    | AddUserFailed
    | LoadUser
    | LoadUserSuccess
    | LoadUserError
    | EditUser
    | EditUserSuccess
    | EditUserFailure
    | SetSelectedUser