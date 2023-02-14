import { useState } from "react";
import { AiFillWarning } from "react-icons/ai";
import { BiShow } from "react-icons/bi";

function App() {
  const [validation, setValidation] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isTrue, setIsTrue] = useState(true);
  const [isTrue2, setIsTrue2] = useState(true);
  const [isPassword, setIsPassword] = useState(true);
  const [isConfirmPassword, setIsConfirmPassword] = useState(true);
  const [isEmail, setIsEmail] = useState(true);

  const handleChange = (event) => {
    event.preventDefault();
    const { value, name } = event.target;
    setValidation((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const handleClick = () => {
    setIsPassword(() => {
      if (
        /[a-z]/.test(validation.password) &&
        /[A-Z]/.test(validation.password) &&
        /[0-9]/.test(validation.password) &&
        /[_]/.test(validation.password) &&
        validation.password.length > 8
      ) {
        return true;
      }
    });
    setIsConfirmPassword(() => {
      if (
        validation.password === validation.confirmPassword
        // && validation.confirmPassword.length > 0
      ) {
        return true;
      }
    });

    setIsEmail(() => {
      if (/^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(validation.email)) {
        return true;
      }
    });
  };

  return (
    <div className="container">
      <div className="container-stuff">
        <h1>Signup</h1>
        <div className="email-div">
          <input
            type="email"
            placeholder="Enter e-mail"
            className="email"
            onChange={handleChange}
            name="email"
          />
          <p className={isEmail ? "tag3" : "tag3 show-tag3"}>
            <i>
              <AiFillWarning />
            </i>
            Please enter a valid email
          </p>
        </div>
        <div className="password-div">
          <input
            placeholder="Enter password"
            className="password"
            onChange={handleChange}
            type={isTrue ? "password" : "text"}
            name="password"
          />
          <button onClick={() => setIsTrue(!isTrue)}>
            <BiShow />
          </button>

          <p className={isPassword ? "tag" : "tag show-tag"}>
            <i>
              <AiFillWarning />
            </i>
            Please enter at least 8 character with number, symbol, small and
            capital letter.
          </p>
        </div>
        <div className="password-div">
          <input
            type={isTrue2 ? "password" : "text"}
            placeholder="Confirm password"
            onChange={handleChange}
            name="confirmPassword"
          />
          <button onClick={() => setIsTrue2(!isTrue2)}>
            <BiShow />
          </button>

          <p className={isConfirmPassword ? "tag2" : "tag2 show-tag2"}>
            <i>
              <AiFillWarning />
            </i>
            Password don't match
          </p>
        </div>
        <div>
          <button className="login-button" onClick={handleClick}>
            Submit Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
