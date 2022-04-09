function Home() {
  return (
    <>
      <div className="title" height="500px" width="100%">
        <div className="title_image">
          <div className="title_text">
            <h1 className="slide-up-fade-in1">We Share Hope.</h1>
            <h1 className="slide-up-fade-in2">We Meet Needs.</h1>
            <h1 className="slide-up-fade-in3">We Build Futures.</h1>
          </div>
        </div>
      </div>

      <div className="newsletter">
        <div width="100%">
          <div className="row">
            <div className="col-lg-6 col-md-12 mission" style={{ "padding": "10px" }}>
              <div>
                <p className="slide-up-fade-in5">We build hope and serve our community by building and strengthening relationships between neighbors,
                  strengthening relationships between neighborhoods and the church, and the church with our city.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12" style={{ "padding": "10px" }}>
              <div style={{ "padding": "2px", "backgroundColor": "white" }}>
                <div style={{ "padding": "10px", "backgroundColor": "#E0BC73" }} >
                  <h2>Want to get involved?</h2>
                  <button type="button" className="btn btn-outline-light btn-lg signup"><a href="https://signup.com/go/vMPDRwB"><span className="signup-btn">Click Here to Sign Up!</span></a></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="info">
        <h2>How does it work?</h2>
        <div className="row" style={{ "margin": "30px" }}>
          <div className="col-lg-4 col-md-12">
            <p className="feature-icon"><i className="fas fa-comments"></i></p>
            <h3 className="feature">Survey</h3>
            <p className="slide-up-fade-in5">We don't assume what people need. We ask. By starting our relationships thoughtfully, we get right to the root of the problem.</p>
          </div>
          <div className="col-lg-4 col-md-12">
            <p className="feature-icon"><i className="fas fa-people-carry"></i></p>
            <h3 className="feature">Supply</h3>
            <p className="slide-up-fade-in5">Once we know the need, we fill the need by connecting people to life-giving services and resources.</p>
          </div>
          <div className="col-lg-4 col-md-12">
            <p className="feature-icon"><i className="fas fa-hands-helping"></i></p>
            <h3 className="feature">Support</h3>
            <p className="slide-up-fade-in5">We don't just fill a need once. We build relationships that last a lifetime, so we'll always be around when we're needed.</p>
          </div>
        </div>
      </div>

      <div className="tail">
        <button type="button" className="btn btn-outline-light btn-lg contact">
          <a href="https://linktr.ee/hopeactioncville">
            <span className='contact'>Visit Us On Social Media!</span>
          </a>
        </button>
      </div>
    </>
  )
}

export default Home