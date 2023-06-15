import PropTypes from 'prop-types';
import { ProfileContainer, ProfileDescription, Avatar, Name, Tag, Location, StatsList, StatItem, Label, Quantity } from './Profile.styled';

export default function UserProfile({ username, tag, location, avatar, stats }) {
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
          <Quantity>{stats.followers}</Quantity>
        </StatItem>
        <StatItem>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </StatItem>
        <StatItem>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </StatItem>
      </StatsList>
    </ProfileContainer>
  );
};

UserProfile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.object,
}


