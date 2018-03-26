import stream from 'getstream';

import config from '../config';

const client = stream.connect(config.streamApiKey);

export default client;
