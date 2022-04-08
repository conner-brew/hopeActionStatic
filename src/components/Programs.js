import foodImage from '../images/food.jpg'
import neighborhoodsImage from '../images/neighborhoods.jpg'

function Programs() {
  return (
    <>
      <div className="row program-header">
        <h1 style={{"font-size" : "4rem"}} className="slide-up-fade-in1">Our Programs</h1>
      </div>

      <div className="row">
        <h1 className="program-name slide-up-fade-in2">Food Distribution</h1>
      </div>
      <div className="row program-food">
        <div className="col-lg-6 col-md-12">
          <div className="hero-wrapper">
            <img src={foodImage} alt="" srcset="" width="95%" style={{"border-radius": "10%"}} className="slide-up-fade-in3" />
          </div>
        </div>

        <div className="col-lg-6 col-md-12">
          <div className="carousel-wrapper">
            <p className="program-text slide-up-fade-in3" >
              According to the Orange Dot report, 1 in 6 Charlottesville City residents experience food insecurity. We're working with local partners to close that gap on a faithful and consistent basis.
            </p>
            <hr className="break" />
            <p className="program-text slide-up-fade-in3" >
              In collaboration with the local public school system and our regional food pantry, Loaves and Fishes, we provide weekly "backpack" food supplies to children and families.
            </p>
            <hr className="break" />
            <p className="program-text slide-up-fade-in3" >
              Currently, our Food Distribution program provides support for 30 children in Albemarle County on a weekly basis!
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <h1 className="program-name slide-up-fade-in3">Neighborhood Partnerships</h1>
      </div>

      <div className="row program-neighborhood">
        <div className="col-lg-6 col-md-12">
          <div className="hero-wrapper">
            <img src={neighborhoodsImage} alt="" srcset="" width="95%" style={{"border-radius": "10%"}} className="slide-up-fade-in5" />
          </div>
        </div>
        <div className="col-lg-6 col-md-12">

          <div className="carousel-wrapper">
            <p className="program-text slide-up-fade-in5" >
              Neighborhood Partnerships bridge the gap between public service providers and the communities that require access to services by building relationships directly in Charlottesville neighborhoods.
            </p>
            <hr className="break" />
            <p className="program-text slide-up-fade-in5" >
              We connect individuals, families, and communities directly to supplies, services, and support through in-neighborhood monthly events.
            </p>
            <hr className="break" />
            <p className="program-text slide-up-fade-in5" >
              You can find HopeAction neighborhood partnerships in the Michie Drive and Page Street neighborhoods on the 2nd and 4th Saturday of every month!
            </p>
          </div>
        </div>
      </div>
      <div className="tail">
        <button type="button" className="btn btn-outline-light btn-lg contact"><a href="https://linktr.ee/hopeactioncville"><span className='contact'>Visit Us On Social Media!</span></a></button>
      </div>
    </>
  )
}

export default Programs