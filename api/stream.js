import stream from 'getstream';

const client = stream.connect(__CONFIG__.streamApiKey);

export default client;
