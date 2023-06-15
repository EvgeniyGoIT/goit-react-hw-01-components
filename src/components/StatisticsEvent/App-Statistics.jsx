import PropTypes from 'prop-types';
import { Title, StatsList, StatItem, Label } from './Statistics.Styled';

export default function Statistics({ title, stats }) {
   return (<section>
       <Title>{title}</Title>
    <StatsList>
    {stats.map((stat) => (
          <StatItem key={stat.id}>
            <Label>{stat.label}</Label>
            <span>{stat.percentage}%</span>
          </StatItem>
        ))}
    </StatsList>
</section>)
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

