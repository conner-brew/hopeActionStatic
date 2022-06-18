function Contact() {
  return (
    <>
      <div className="page-header">
        <h1 className="slide-up-fade-in1">Contact Us</h1>
      </div>

      <div className="container-fluid mb-5">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-8">
            <h2>We'd love to hear from you</h2>
            <p>Please reach out to us with any questions our comments about or programs.</p>
            <form name="contact-form" id="contact-form" data-netlify="true" method="POST">
              <div className="mb-3">
                <label for="nameInput" className="form-label">Name</label>
                <input type="text" name="name" className="form-control" id="nameInput" required />
              </div>
              <div className="mb-3">
                <label for="emailInput" className="form-label">Email Address</label>
                <input type="email" className="form-control" name="email" id="emailInput" required />
              </div>
              <div className="mb-3">
                <label for="messageTextArea" className="form-label">Message</label>
                <textarea className="form-control" id="messageTextArea" name="message" rows="4" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary float-end px-5">Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact