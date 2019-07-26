import { createFeatureSelector, createSelector } from "@ngrx/store";
import { values as _values } from 'lodash';
import { FeatureState, FEATURE_KEY } from './reducer';

const getFeatureState = createFeatureSelector<FeatureState>(FEATURE_KEY);

const getAllUsers = createSelector(
    getFeatureState,
    state => _values(state.userEntities)
);

const getAllUSerIds = createSelector(
    getFeatureState,
    state => _values(state.userIds)
);
const setSelectedUser = createSelector(
    getFeatureState,
    state => state.selectedUser
)

const isLoading = createSelector(
    getFeatureState,
    state => state.loading
)

const blockUi = createSelector(
    getFeatureState,
    state => state.blockUi
)

export const featureQuery = {
    getAllUsers,
    getAllUSerIds,
    setSelectedUser,
    isLoading,
    blockUi
}