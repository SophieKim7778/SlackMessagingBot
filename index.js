const axios = require('axios');

const slackToken = 'xoxb-5321185548544-5310136204113-qSfb6LZ0Dbe9SIT7SNJ0yHME';

run().catch(err => console.log(err));

async function run() {
  const url = 'https://slack.com/api/chat.postMessage';
  const res = await axios.post(url, {
    channel: '#알림-테스트',
    text: 'Hello, World!'
  }, { headers: { authorization: `Bearer ${slackToken}` } });

  console.log('Done', res.data);
}