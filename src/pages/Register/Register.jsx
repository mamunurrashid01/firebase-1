import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/Context";


const Register = () => {

  const {createUser} = useContext(AuthContext);
  

    const handleRegister = (event) =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password); 
        createUser(email, password)
        .then(userCridetial =>{
          console.log(userCridetial.user);
        })
        .catch(error =>{
          console.log(error);
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
      <div className="hero-content">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold">Register now!</h1>
          
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text" name="name" required
                  placeholder="Your"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email" name="email" required
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password" name="password" required
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <p>
              All ready have an account ? Login 
              <Link to="/login">
                <button className="btn  btn-link">Login</button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Register;