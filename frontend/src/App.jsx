import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("/api/v1/auth/me", { withCredentials: true }).then((res) => {
      setUser(res.data.user);
    });
  }, []);

  return (
    <div>
      <h1>MERN App</h1>
      {user ? <p>Welcome, {user.name}</p> : <p>Please log in.</p>}
    </div>
  );
}

export default App;
