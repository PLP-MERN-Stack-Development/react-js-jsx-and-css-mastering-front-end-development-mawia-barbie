import React from "react";
import PropTypes from "prop-types";

const Card = ({ title, children, className = "" }) => {
  return (
    <div
      className={`bg-pink-200 dark:bg-gray-800 rounded-2xl shadow-md p-6 max-w-xl mx-auto ${className}`}
    >
      {title && (
        <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white text-center">
          {title}
        </h3>
      )}
      <div className="text-gray-700 dark:text-gray-300 text-center">
        {children}
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Card;
