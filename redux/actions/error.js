import { createAction } from 'redux-actions';

import { error as errorTypes } from '../../constants/actionTypes';

const enqueueError = createAction(errorTypes.ENQUEUE_ERROR);
const dequeueError = createAction(errorTypes.DEQUEUE_ERROR);

export default { enqueueError, dequeueError };
