import Profile from '../ProfileEvent/Profile';
import Statistics from '../StatisticsEvent/Statistics';
import FriendList from '../FriensEvent/FriendList';
import TransactionHistory from '../TransactionsEvent/Transactions';
import user from '../path/user.json';
import data from '../path/data.json';
import friends from '../path/friends.json';
import transactions from '../path/transactions.json';
import { Container, InfoConteiner, UserConteiner } from './App.styled';


export const App = () => {
  return (
    <Container>
      <UserConteiner>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        />
        </UserConteiner>
      <InfoConteiner>
       <Statistics title="Upload stats" stats={data} />
       <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
      </InfoConteiner>
     </Container>
  );
};


