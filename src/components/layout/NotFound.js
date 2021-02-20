import React from 'react';

const NotFound = () => {
  return (
    <>
      <div
        className="jumbotron"
        style={{
          height: '70vh'
        }}
      >
        <div className="container">
          <h1 className="x-large text-primary">
            <i className="fas fa-exclamation-triangle" />
            404, Page Not Found
          </h1>
          <p className="large">Sorry, this page does not exist</p>
        </div>
      </div>
    </>
  );
};

export default NotFound;
