import Swal from 'sweetalert2';

const Unavailable = (e) => {
  e.preventDefault();
  Swal.fire({
    title: 'Oops!',
    text: 'Feature is currently unavailable',
    icon: 'warning',
    showCancelButton: true
  });
};

const RequestQuote = () => {
  return (
    <>
      <div
        class="modal fade"
        id="requestQuote"
        tabindex="-1"
        aria-labelledby="requestQuoteLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5
                class="modal-title"
                id="requestQuoteLabel"
                style={{
                  fontSize: '2.5rem'
                }}
              >
                Request for Quote
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <label>Name*</label>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First.."
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last.."
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Email*</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label>Phone No.*</label>
                      <input type="number" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label>How can we help you?*</label>
                      {/* <input type="text" className="form-control" /> */}
                      <select className="form-control">
                        <option>Quotation Request</option>
                        <option>General Inquiry</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Message</label>
                      <textarea type="text" rows="6" className="form-control" />
                    </div>
                    <div className="form-group">
                      <button
                        className="btn btn-success btn-block"
                        onClick={Unavailable}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { RequestQuote };
