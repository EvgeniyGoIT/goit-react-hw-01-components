import UserProfile from '../ProfileEvent/App-profile';
import Statistics from '../StatisticsEvent/App-Statistics';
import FriendList from '../FriensEvent/FriendList';
import TransactionHistory from '../TransactionsEvent/Transactions';
import user from 'user.json';
import data from 'data.json';
import friends from 'friends.json';
import transactions from 'transactions.json';
import { Container, InfoConteiner, UserConteiner } from './App.styled';


export const App = () => {
  return (
    <Container>
      <UserConteiner>
      <UserProfile
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


