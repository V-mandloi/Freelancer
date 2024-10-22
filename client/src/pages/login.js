import "../css/login.css";
// import {link} from ReactDOM;
// import exampleImage from '01basicreact\Resources\majorIcn.png';

function Login() {
  return (
    <div>
      <nav className="navbar">
        <div className="left">
          <div className="logo">Logo</div>
        </div>
        <div className="center">
          <a href="#find-freelancer">Find Freelancers</a>
          <a href="#find-jobs">Find Jobs</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact Us</a>
        </div>
        <div className="right">
          <button className="btn-post-job">Apply to find work</button>
          <button className="btn-find-consultant">Find consultant</button>
          <button className="btn-signup">
            <span className="material-symbols-outlined" width="20" height="20">
              logout
            </span>
          </button>
          <button class="btn-signin">
            <span className="material-symbols-outlined" width="20" height="20">
              Register
            </span>
          </button>
        </div>
      </nav>
      {/* navbar end  
     login   */}
      <div className="login-container">
        <div className="login-image">
          {/* <img src="../01basicreact\Resources\majorIcn.png" alt="Login Image">      */}
        </div>

        <div className="login-form">
          <h2>Login</h2>
          <form>
            <div className="form-group">
              <label for="email">Email</label>
              {/* <input type="email" id="email" name="email" required> */}
            </div>
            <div className="form-group">
              <label for="password">Password</label>
              {/* <input type="password" id="password" name="password" required> */}
            </div>
            <div className="forgot-password">
              <a href="#">Forgot Password?</a>
            </div>
            <button type="submit" className="login-button">
              Login
            </button>
            <div className="social-login">
              <p>Or continue with</p>
              <div className="social-icons">
                <a href="#" className="social-icon google">
                  <i className="fa fa-google"></i>
                </a>
                <a href="#" className="social-icon facebook">
                  <i className="fa fa-facebook-f"></i>
                </a>
              </div>
            </div>
            <p className="no-account">
              Don't have an account?{" "}
              <a href="#" className="register-here">
                Register here
              </a>
            </p>
          </form>
        </div>
      </div>

      {/*  login
     footer  */}
      <footer className="footer">
        <div className="container">
          <div className="footer-left">
            <p>&copy; 2024 YourCompany. All rights reserved.</p>
          </div>
          <div className="footer-center">
            <a href="#contact">Report a Bug</a>
            <a href="#terms">Terms and Conditions</a>
            <a href="#policy">Privacy Policy</a>
          </div>
          <div className="footer-right">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              className="social-icon"
            >
              <i class="fa fa-linkedin"></i>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              className="social-icon"
            >
              <i className="fa fa-github"></i>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              className="social-icon"
            >
              <i className="fa fa-instagram"></i>
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              className="social-icon"
            >
              <i className="fa fa-facebook"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Login;
