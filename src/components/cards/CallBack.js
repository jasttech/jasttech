import styled from 'styled-components'

const Form = styled.form`
width: 20vw;
@media (max-width: 560px){
  width: 60vw;
}
`
const CallBack = () => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h2 class="featurette-heading">Request for Call Back.</h2>
          <br />
          <Form
          >
            <div className="form-group">
              <label>Full Name *</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label>Email *</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label>Phone Number *</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <button typ="submit" className="btn btn-secondary">
                Submit
              </button>
            </div>
          </Form>
          <br />
          <p>
            <strong>For Businesses: </strong> For Business inquiry fill our
            short feedback form or you can also send us an email and we'll get
            in touch shortly or call our Office Number (+256) 782692271
          </p>
          <p>
            <strong>Office Hours :</strong> 07:30 and 19:00 Mon to Sat, Sun -
            Holiday
          </p>
          <br />
        </div>
      </div>
    </>
  );
};

export { CallBack };
