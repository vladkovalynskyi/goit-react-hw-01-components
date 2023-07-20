import './App.css';
import Profile from './components/Profile/profile.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import FriendList from './components/FriendList/FriendList.jsx';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';
import user from './components/Profile/user';
import data from './components/Statistics/data';
import friends from './components/FriendList/friends';
import transactions from './components/TransactionHistory/transactions';

export default function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </header>
      <Statistics title='Upload stats' stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}