import PropTypes from 'prop-types';
import { BtnSection, BtnSectionTitle } from '../Section/Section.styled';

const Section = ({ title, children }) => {
  return (
    <BtnSection>
      <BtnSectionTitle>{title}</BtnSectionTitle>
      {children}
    </BtnSection>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
