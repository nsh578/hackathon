const actionStatus = {
  BUSY: Symbol('THUNKLESS_ACTION_STATUS_BUSY'),
  SUCCESS: Symbol('THUNKLESS_ACTION_STATUS_SUCCESS'),
  FAILURE: Symbol('THUNKLESS_ACTION_STATUS_FAILURE'),
};

const BLOCKING = Symbol('THUNKLESS_FLAG_BLOCKING');
const WITH_STATUS = Symbol('THUNKLESS_FLAG_WITH_STATUS');
const MULTI_ACTION = Symbol('THUNKLESS_FLAG_MULTI_ACTION');

const actionsFromResults =
(next, flags, types, resultKey, action) => (results) => {
  if (!flags.has(MULTI_ACTION) || !Array.isArray(results)) {
    return next({ [resultKey]: results, type: types, ...action });
  }

  let i = 0;
  for (; i < results.length - 1; i += 1) {
    next({ [resultKey]: results[i], type: types[i], ...action });
  }

  return next({ [resultKey]: results[i], type: types[i], ...action });
};

const middleware = store => next => (action) => {
  // eslint-disable-next-line one-var,one-var-declaration-per-line
  let flags, promise, type, statusSelector;
  ({ /* eslint-disable prefer-const,no-param-reassign */
    flags = new Set(),
    promise,
    type,
    statusSelector,
    ...action
  } = action); /* eslint-enable */
  if (!promise) {
    return next(action);
  }

  if (!flags.has(WITH_STATUS)) {
    return promise
      .then(actionsFromResults(flags, type, 'payload', action))
      .catch(actionsFromResults(flags, type, 'error', action));
  }

  const [startActionType, successActionType, failActionType] = type;

  if (flags.has(BLOCKING) && statusSelector) {
    const currentStatus = statusSelector(store.getState());
    if (currentStatus === actionStatus.BUSY) {
      return null;
    }
  }

  if (!flags.has(MULTI_ACTION) || !Array.isArray(startActionType)) {
    next({ type: startActionType, ...action });
  } else {
    startActionType.forEach(t => next({ type: t, ...action }));
  }

  return promise
    .then(actionsFromResults(flags, successActionType, 'payload', action))
    .catch(actionsFromResults(flags, failActionType, 'error', action));
}

export default {
  middleware,
  actionStatus,
  BLOCKING,
  WITH_STATUS,
  MULTI_ACTION,
};
