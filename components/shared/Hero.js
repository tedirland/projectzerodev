const Hero = () => (
  <section className="fj-hero">
    <div className="fj-hero-wrapper row">
      <div className="hero-left col-md-6">
        <h1 className="white hero-title">Welcome To Project Zero Michigan</h1>
        <h2 className="white hero-subtitle">
          We're on a mission to make sustainibility resources more accessible
        </h2>
        <div className="button-container">
          <a href="" className="btn btn-main bg-blue ttu">
            See what we've been up to
          </a>
        </div>
      </div>
      <div className="hero-right col-md-6">
        <div className="hero-image-container">
          <a className="grow hero-link">
            <img
              className="hero-image"
              src="https://mediad.publicbroadcasting.net/p/michigan/files/styles/x_large/public/201505/GreatLakes.A2003260.1830.250m.jpg"
            ></img>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
