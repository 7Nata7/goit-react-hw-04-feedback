import PropTypes from "prop-types";

import css from './Section.module.css'

export const Section = ({ title, children }) => (
  <div>
    <h1 className={css.title}>{title}</h1>
    {children}
  </div>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node
}