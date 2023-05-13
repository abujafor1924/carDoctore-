import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const SocialLogin = () => {
  const { loginWithGoogle } = useContext(AuthContext);
  const handleGoogleSingin = () => {
    loginWithGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div>oR</div>
      <button onClick={handleGoogleSingin} className="btn btn-circle">
        G
      </button>
    </div>
  );
};

export default SocialLogin;
