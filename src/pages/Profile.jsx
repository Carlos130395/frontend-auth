import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const { token, logout } = useContext(AuthContext);
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
      return;
    }

    axios
      .get("http://localhost:3001/profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setProfile(res.data))
      .catch(() => {
        logout();
        navigate("/");
      });
  }, [token, logout, navigate]);

  return (
    <div>
      {profile ? (
        <>
          <h1>Bienvenido, {profile.username}</h1>
          <button onClick={logout}>Cerrar sesión</button>
        </>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default Profile;
