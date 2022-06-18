import foodImage from '../images/food.jpg'
import neighborhoodsImage from '../images/neighborhoods.jpg'

function Programs() {
  return (
    <>
  <div className="page-header">
    <h1 className="slide-up-fade-in1">Our Programs</h1>
  </div>


  <div className="container-fluid mb-5">

    <h1 className="program-name slide-up-fade-in2">Food Distribution</h1>
    <div className="row align-items-center justify-content-center program-row">
      <div className="col-lg-5 col-md-12 mb-lg-0 mb-4 px-5 px-lg-0">
        <img src={foodImage} className="img-fluid slide-up-fade-in3"  style={{"borderRadius": "10%"}} />  
      </div>
      <div className="col-lg-5 col-md-12 px-lg-4">
        <p className="program-text slide-up-fade-in3">
          According to the Orange Dot report, 1 in 6 Charlottesville City residents experience food insecurity. We're
          working with local partners to close that gap on a faithful and consistent basis.
        </p>
        <hr className="break" />
        <p className="program-text slide-up-fade-in3">
          In collaboration with the local public school system and our regional food pantry, Loaves and Fishes, we
          provide weekly "backpack" food supplies to children and families.
        </p>
        <hr className="break" />
        <p className="program-text slide-up-fade-in3">
          Currently, our Food Distribution program provides support for 30 children in Albemarle County on a weekly
          basis!
        </p>
      </div>
    </div>
    
    <h1 className="program-name slide-up-fade-in3">Neighborhood Partnerships</h1>
    <div className="row align-items-center justify-content-center program-row">
      <div className="col-lg-5 col-md-12 mb-lg-0 mb-4 px-5 px-lg-0">
        <img src={neighborhoodsImage} className="img-fluid slide-up-fade-in5" style={{"borderRadius": "10%"}} />
      </div>

      <div className="col-lg-5 col-md-12 px-lg-4">
        <p className="program-text slide-up-fade-in5">
          Neighborhood Partnerships bridge the gap between public service providers and the communities that require
          access to services by building relationships directly in Charlottesville neighborhoods.
        </p>
        <hr className="break" />
        <p className="program-text slide-up-fade-in5">
          We connect individuals, families, and communities directly to supplies, services, and support through
          in-neighborhood monthly events.
        </p>
        <hr className="break" />
        <p className="program-text slide-up-fade-in5">
          You can find HopeAction neighborhood partnerships in the Michie Drive and Page Street neighborhoods on the
          2nd
          and 4th Saturday of every month!
        </p>
      </div>
    </div>

  </div>

  <div className="tail">
    <button type="button" className="btn btn-outline-light btn-lg contact"><a
        href="https://linktr.ee/hopeactioncville"><span className='contact'>Visit Us On Social Media!</span></a></button>
  </div>
    </>
  )
}

export default Programs