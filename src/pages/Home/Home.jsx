import { useContext } from "react";
import { AuthContext } from "../../context/Context";


const Home = () => {
  const authInfo = useContext(AuthContext)
  console.log(authInfo);
  return (
    <div>
      <h1>{authInfo.name}</h1>
    </div>
  );
};

export default Home;