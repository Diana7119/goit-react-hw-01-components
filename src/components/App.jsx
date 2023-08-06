import { Profile } from './profile/Profile';
import { Statistics } from './statistics/Statistics';
import { FriendList } from './friendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import user from '../api/user.json';
import data from '../api/data.json';
import friends from '../api/friends.json';
import transactions from '../api/transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title={data.title} stats={data.stats} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </>
  );
};


