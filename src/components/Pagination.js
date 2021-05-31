import React from "react";
import PropTypes from "prop-types";

const Pagination = ({ search, actualPage, setActualPage, totalPages }) => {
  const previewPage = () => {
    if (actualPage <= 1) return;
    setActualPage(actualPage - 1);
  };

  const nextPage = () => {
    if (actualPage >= totalPages) return;
    setActualPage(actualPage + 1);
  };

  return (
    <div className="mb-4 row justify-content-center">
      {actualPage === 1 ? null : (
        <button type="button" onClick={previewPage} className="bbtn btn-info">
          &laquo; Preview
        </button>
      )}
      {search ? (
        <span className="mr-4 ml-4 badge bg-info text-light p-2">
          {actualPage}
        </span>
      ) : null}
      {actualPage === totalPages ? null : (
        <button type="button" onClick={nextPage} className="bbtn btn-info">
          &raquo; next
        </button>
      )}
    </div>
  );
};

Pagination.propTypes = {
  search: PropTypes.string.isRequired,
  actualPage: PropTypes.number.isRequired,
  setActualPage: PropTypes.func.isRequired,
  totalPages: PropTypes.number.isRequired,
};

export default Pagination;
