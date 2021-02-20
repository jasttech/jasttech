const Card = ({ children, footerTitle, footerSubTitle }) => {
  return (
    <>
      <div className="card">
        <div className="card-body">{children}</div>
        <div className="card-footer">
          <span
            style={{
              fontSize: 15
            }}
          >
            {footerTitle}
          </span>
          <br />
          <span
            style={{
              fontSize: 11
            }}
          >
            {footerSubTitle}
          </span>
        </div>
      </div>
    </>
  );
};

export { Card };
