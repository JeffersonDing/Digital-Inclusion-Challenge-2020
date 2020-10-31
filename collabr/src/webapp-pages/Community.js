import React from 'react';
import { Chat, Channel, ChannelList, Window } from 'stream-chat-react';
import { ChannelHeader, MessageList } from 'stream-chat-react';
import { MessageInput, Thread } from 'stream-chat-react';
import { StreamChat } from 'stream-chat';
import { makeStyles } from '@material-ui/core/styles';
import 'stream-chat-react/dist/css/index.css';
const chatClient = new StreamChat('zu9pdb5rnd7t');
const userToken =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoidGlueS1tb29uLTUifQ.p1_tTxpEV1EtPuvG6w4egnfjxkzgaix7oAWD2Pt6XRI';

chatClient.setUser(
  {
    id: 'tiny-moon-5',
    name: 'Tiny moon',
    image: 'https://getstream.io/random_png/?id=tiny-moon-5&name=Tiny+moon'
  },
  userToken
);

const useStyles = makeStyles((theme) => ({
  center: {
    alignItems: 'center',
    marginTop: theme.spacing(10)
  }
}));

const filters = { type: 'messaging', members: { $in: ['tiny-moon-5'] } };
const sort = { last_message_at: -1 };
const channels = chatClient.queryChannels(filters, sort);

function Community() {
  const classes = useStyles();
  return (
    <div className={classes.center}>
      <Chat client={chatClient} theme={'messaging light'}>
        <ChannelList filters={filters} sort={sort} />
        <Channel>
          <Window>
            <ChannelHeader />
            <MessageList />
            <MessageInput />
          </Window>
          <Thread />
        </Channel>
      </Chat>
    </div>
  );
}
export default Community;
