import PropTypes from 'prop-types';
import { FriendItemStyled, Avatar, Name, Status } from './FriendList.Styled';

export default function FriendItem({ friend }) {
const { avatar, name, isOnline } = friend;
    return (
        <FriendItemStyled>
          <Status isOnline={isOnline}>{isOnline}</Status>
            <Avatar src={avatar} alt={name} />
            <Name>{name}</Name>
        </FriendItemStyled>
    )
}

FriendItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};

