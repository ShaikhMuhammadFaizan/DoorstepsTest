import "../App.css";
import Logo from '../assets/logo.svg'

function LandingPage() {
  return (
    <>
      <div className="landing-page">
            <img src={Logo} alt="logo" minwidth="50%"/>
            <h5>Home Finance Solutions</h5>
      </div>
    </>
  );
}

export default LandingPage;
