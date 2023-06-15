import PropTypes from 'prop-types';
import { FriendListStyled, FriendItem, Avatar, Name, Status } from './FriendList.Styled';

export default function FriendList({ friends }) {
  return (
    <FriendListStyled>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendItem key={id}>
          <Status isOnline={isOnline}>{isOnline}</Status>
            <Avatar src={avatar} alt={name} />
            <Name>{name}</Name>
        </FriendItem>
      ))} 
    </FriendListStyled>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};



    