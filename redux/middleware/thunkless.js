const actionStatus = {
  BUSY: Symbol('THUNKLESS_ACTION_STATUS_BUSY'),
  SUCCESS: Symbol('THUNKLESS_ACTION_STATUS_SUCCESS'),
  FAILURE: Symbol('THUNKLESS_ACTION_STATUS_FAILURE'),
};

const BLOCKING = Symbol('THUNKLESS_FLAG_BLOCKING');
const WITH_STATUS = Symbol('THUNKLESS_FLAG_WITH_STATUS');
const MULTI_ACTION = Symbol('THUNKLESS_FLAG_MULTI_ACTION');

const middleware = store => (next) => {
  const actionsFromResults =
  (flags, types, { iterateActions, ...rest }) => (results) => {
    if (!flags.has(MULTI_ACTION) || !Array.isArray(results)) {
      return next({ payload: results, type: types, ...rest });
    }

    let i;
    let _types;
    let _results;
    if (iterateActions) {
      _types = [];
      _results = [];
      let j;
      for (i = 0; i < types.length; i += 1) {
        if (!iterateActions.has(types[i])) {
          _types.push(types[i]);
          _results.push(results[i]);
        } else {
          for (j = 0; j < results[i].length; j += 1) {
            _types.push(types[i]);
            _results.push(results[i][j]);
          }
        }
      }
    } else {
      _types = types;
      _results = results;
    }

    for (i = 0; i < _results.length - 1; i += 1) {
      next({ payload: _results[i], type: _types[i], ...rest });
    }

    return next({ payload: _results[i], type: _types[i], ...rest });
  };

  return (action) => {
    const {
      type,
      flags = new Set(),
      promise,
      statusSelector,
      ...rest
    } = action;
    if (!promise) {
      return next({ type, ...rest });
    }

    if (!flags.has(WITH_STATUS)) {
      return promise
        .then(actionsFromResults(flags, type, rest))
        .catch(actionsFromResults(flags, type, rest));
    }

    const [startActionType, successActionType, failActionType] = type;

    if (flags.has(BLOCKING) && statusSelector) {
      const currentStatus = statusSelector(store.getState());
      if (currentStatus === actionStatus.BUSY) {
        return null;
      }
    }

    if (!flags.has(MULTI_ACTION) || !Array.isArray(startActionType)) {
      next({ type: startActionType, ...rest });
    } else {
      startActionType.forEach(t => next({ type: t, ...rest }));
    }

    return promise
      .then(actionsFromResults(flags, successActionType, rest))
      .catch(actionsFromResults(flags, failActionType, rest));
  }
}

export default {
  middleware,
  actionStatus,
  BLOCKING,
  WITH_STATUS,
  MULTI_ACTION,
};
