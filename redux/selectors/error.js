import { createSelector } from 'reselect';

const errorListSelector = state => state.error;

const peek = createSelector(
  errorListSelector,
  payload => payload.first(),
);

const isEmpty = createSelector(
  errorListSelector,
  payload => payload.isEmpty(),
);

export const errorSelector = state => ({
  errorsExist: !isEmpty(state),
  nextError: peek(state),
});
