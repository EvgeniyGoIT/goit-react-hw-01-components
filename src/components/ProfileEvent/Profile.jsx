import PropTypes from 'prop-types';
import { ProfileContainer, ProfileDescription, Avatar, Name, Tag, Location, StatsList, StatItem, Label, Quantity } from './Profile.styled';

export default function Profile({ username, tag, location, avatar, stats:{ followers, views, likes } }) {
    return (
    <ProfileContainer>
      <ProfileDescription>
        <Avatar src={avatar} alt={username} />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </ProfileDescription>

      <StatsList>
        <StatItem>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </StatItem>
        <StatItem>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </StatItem>
        <StatItem>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </StatItem>
      </StatsList>
    </ProfileContainer>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};


