import React, { useEffect, useState } from "react";

const LocationInfo = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch(
          `http://api.ipstack.com/check?access_key=d87664a78fe68ddb8e809c4600bc0e16`
        );

        if (!response.ok) {
          throw new Error(`Erro HTTP: ${response.status}`);
        }

        const data = await response.json();
        setLocation(data);
      } catch (error) {
        setError(error.message);
        console.error("Erro ao obter localização:", error.message);
      }
    };

    fetchLocation();
  }, []);

  return (
    <div>
      <h2>Informações da Localização</h2>
      {error && <p style={{ color: "red" }}>Erro: {error}</p>}
      {location ? (
        <ul>
          <li><strong>IP:</strong> {location.ip}</li>
          <li><strong>País:</strong> {location.country_name}</li>
          <li><strong>Cidade:</strong> {location.city}</li>
          <li><strong>Latitude:</strong> {location.latitude}</li>
          <li><strong>Longitude:</strong> {location.longitude}</li>
        </ul>
      ) : (
        <p>Carregando localização...</p>
      )}
    </div>
  );
};

export default LocationInfo;
