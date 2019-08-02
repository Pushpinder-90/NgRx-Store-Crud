import { Injectable } from '@angular/core';
import {
    ActionTypes, SetSelectedUser,
    AddUser, AddUserFailed, AddUserSuccess,
    LoadUser, LoadUserError, LoadUserSuccess,
    EditUser, EditUserSuccess, EditUserFailure,
    DeleteUser, DeleteUserSuccess, DeleteUserFailure
} from './actions';
import { DataPersistence } from '@nrwl/nx'
import { Effect } from '@ngrx/effects';
import { FeatureState } from './reducer';
import { map, tap, mergeMap } from 'rxjs/operators';
import { UserService } from '../services';

@Injectable()
export class Effects {

    constructor(
        private api: UserService,
        private persistence: DataPersistence<FeatureState>
    ) { }

    @Effect()
    addUser$ = this.persistence.fetch(ActionTypes.ADD_USER, {
        run: (action: AddUser, state: FeatureState) => {
            return this.api.addUser$(action.payload).pipe(
                tap(response => console.log('Add User- Effect  :', response)),
                mergeMap(response => [
                    new AddUserSuccess(response),
                    new SetSelectedUser(response['id'])
                ])
            )
        },
        onError: (action: AddUser, error) => {
            new AddUserFailed(error)
        }
    });

    @Effect()
    loadAllUser$ = this.persistence.fetch(ActionTypes.Load_USER, {
        run: (action: LoadUser, state: FeatureState) => {
            return this.api.loadAllUser$().pipe(
                tap(res => console.log("loadAllUser$ res:", res)),
                map(res => new LoadUserSuccess(res))
            )
        },
        onError: (action: LoadUser, error) => {
            new LoadUserError(error);
        }
    });

    @Effect()
    editUser$ = this.persistence.fetch(ActionTypes.EDIT_USER, {
        run: (action: EditUser, state: any) => {
            const fState: FeatureState = state.users;
            const selectedUser = fState.userEntities[fState.selectedUser]
            const payload = {
                ...action.payload,
                enroll_id: selectedUser['_id'],
            }
            return this.api.editUser$(payload).pipe(
                map(response => new EditUserSuccess(response))
            )
        },
        onError: (action: EditUser, error) => {
            new EditUserFailure(error)
        }
    });


    @Effect()
    deleteUser$ = this.persistence.fetch(ActionTypes.DELETE_USER, {
        run: (action: DeleteUser, state: FeatureState) => {
            const user = action.payload
            const payload = user['_id'] 
            console.log('Effects _id_payload :', payload)
            return this.api.deleteUser$(payload).pipe(
                map(response => {
                    console.log('Delete Response', response)
                    return new DeleteUserSuccess(response)
                })
            )
        },
        onError: (action: DeleteUser, error) => {
            new DeleteUserFailure(error)
        }
    })

}
