import React from 'react';
import PropTypes from 'prop-types';

// title - "Топ недели"  "Лучшее"
// children - PaintingList

function Section({ title, children }) {
  return (
    <div>
      {/* если передали title то рендерить разметку <h2>{title}</h2> */}
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
}

// PropTypes.node - ожидает любую сущность (число, строку ...)

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
