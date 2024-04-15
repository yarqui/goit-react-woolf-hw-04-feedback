import { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { SectionStyled } from './Section.styled';

class Section extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    const { title, children } = this.props;

    return (
      <SectionStyled>
        <h2>{title}</h2>
        {children}
      </SectionStyled>
    );
  }
}

export default Section;
