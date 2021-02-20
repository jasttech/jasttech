const Banner = () => {
  return (
    <>
      <div
        className="jumbotron"
        style={{
          maxWidth: '60vw'
        }}
      >
        <h3>Simplicity isn't Simple</h3>
        <p
          style={{
            color: '#726363'
          }}
        >
          That's been one of my mantras - focus and simplicity. Simple can be
          harder than complex: You have to work hard to get your thinking clean
          to make it simple. But it's worth it in the end because once you get
          there, you can move mountains.
          <br />
          <small
            style={{
              color: 'GrayText'
            }}
          >
            STEVE JOBS
          </small>
        </p>
      </div>
    </>
  );
};

export { Banner };
