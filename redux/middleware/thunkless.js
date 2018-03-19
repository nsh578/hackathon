const BLOCKING = Symbol('THUNKLESS_BLOCKING');
const WITH_STATUS = Symbol('THUNKLESS_WITH_STATUS');
const MULTI_ACTION = Symbol('THUNKLESS_MULTI_ACTION');

const actionsFromResults = (thunklessFlags, types, resultKey, action) => (results) => {
  if (!thunklessFlags.has(MULTI_ACTION)) {
    return next({ [resultKey]: results, type: types, ...action });
  } else {
    for (let i = 0; i < results.length-1; i++) {
      next({ [resultKey]: results[i], type: types[i], ...action });
    }
    return next({ [resultKey]: results[i], type: types[i], ...action });
  }
}

const middleware = store => next => action => {
  const { thunklessFlags = new Set(), promise, type, ...action } = action;
  const { statusSelector, statusTypes: [BUSY, SUCCESS, FAILURE], ...action } = action;
  if (!promise) {
    return next(action);
  }

  if (!thunklessFlags.has(WITH_STATUS)) {
    const types = thunklessFlags.has(MULTI_ACTION) ? type : [type];
    return promise
      .then(actionsFromResults(thunklessFlags, types, 'result', action))
      .catch(actionsFromResults(thunklessFlags, types, 'error', action));
  }

  if (thunklessFlags.has(BLOCKING) && statusSelector) {
    const currentStatus = statusSelector(store.getState());
    if (currentStatus === BUSY) {
      return next(action);
    }
  }

  next({ type: BUSY, ...action });
  return promise
    .then(actionsFromResults(thunklessFlags, SUCCESS, 'result', action))
    .catch(actionsFromResults(thunklessFlags, FAILURE, 'error', action));
}

export default { middleware, BLOCKING, WITH_STATUS, MULTI_ACTION };
