import PropTypes from 'prop-types';
import { Title, StatsList, StatItem, Label } from './Statistics.Styled';

export default function Statistics({ title, stats }) {
   return (<section>
    {title && <Title>{title}</Title>}
    <StatsList>
    {stats.map(({ id, label, percentage }) => (
          <StatItem key={id}>
            <Label>{label}</Label>
            <span>{percentage}%</span>
          </StatItem>
        ))}
    </StatsList>
</section>)
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

