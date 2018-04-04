import React from 'react';
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";

const HelmetComponent = (props) => {
  const { documentTitle, documentDescription } = props;
  return (
    <Helmet>
      <title>{documentTitle}</title>
      <meta name="description" content={documentDescription} />
    </Helmet>
  )
};
HelmetComponent.propTypes = {
  documentTitle: PropTypes.string.isRequired,
  documentDescription: PropTypes.string.isRequired
};
export default HelmetComponent;