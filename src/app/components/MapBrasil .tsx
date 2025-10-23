"use client";
import React, { useEffect, useState } from "react";
import ZoomableMap from "./ZoomableMap";

const MapBrasil = () => {
  const [geoData, setGeoData] = useState<any>(null);

  useEffect(() => {
    fetch("/br_states.json")
      .then((res) => res.json())
      .then((data) => setGeoData(data))
      .catch((err) => console.error("Erro ao carregar GeoJSON:", err));
  }, []);

  if (!geoData) return <p>Carregando mapa...</p>;

  return <ZoomableMap data={geoData} />;
};

export default MapBrasil;