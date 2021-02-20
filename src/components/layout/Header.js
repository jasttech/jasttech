const Header = ({ title }) => {
  return (
    <>
      <div className="services-header">
        <div className="container">
          <div class="d-flex pt-4 pb-4 mt-5">{title}</div>
        </div>
      </div>
    </>
  );
};

export { Header };
