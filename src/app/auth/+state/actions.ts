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

    USER_DETAIL = '[User] Add User',
    USER_DETAIL_SUCCESS = '[User] Add User Success',
    USER_DETAIL_FAILURE = '[User] Add User Failure',

    DELETE_USER = '[User] DELETE User',
    DELETE_USER_SUCCESS = '[User] DELETE User Success',
    DELETE_USER_FAILURE = '[User] DELETE User Failure',

    EDIT_USER = '[User] Edit User',
    EDIT_USER_SUCCESS = '[User] Edit User Success',
    EDIT_USER_FAILURE = '[User] Edit User Failure',

    SET_SELECTED_USER = '[User] Set Selected User',
}


export class DeleteUser implements Action {
    readonly type = ActionTypes.DELETE_USER;
    constructor(public payload: any ) { }
}

export class DeleteUserSuccess implements Action {
    readonly type = ActionTypes.DELETE_USER_SUCCESS;
    constructor(public payload: any) { }
}

export class DeleteUserFailure implements Action {
    readonly type = ActionTypes.DELETE_USER_FAILURE;
    constructor(public payload: string) { }
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

export class UserDetail implements Action {
    readonly type = ActionTypes.USER_DETAIL;
    constructor(public payload: any) { }
}

export class UserDetailSuccess implements Action {
    readonly type = ActionTypes.USER_DETAIL_SUCCESS;
    constructor(public payload: any) { }
}

export class UserDetailFailed implements Action {
    readonly type = ActionTypes.USER_DETAIL_FAILURE;
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
    | DeleteUser
    | DeleteUserSuccess
    | DeleteUserFailure
    | UserDetail
    | UserDetailSuccess
    | UserDetailFailed
    | EditUser
    | EditUserSuccess
    | EditUserFailure
    | SetSelectedUser
