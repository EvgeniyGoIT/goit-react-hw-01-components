import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem'
import { FriendListStyled } from './FriendList.Styled';

export default function FriendList({ friends }) {
  return (
  <FriendListStyled>
      {friends.map((friend) => (
  <FriendListItem key={friend.id} friend={friend} />
))}
    </FriendListStyled>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};


    