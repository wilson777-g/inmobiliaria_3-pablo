import { API_BASE } from "../api";

export const getPropiedades = async () => {
  try {
    const response = await fetch(`${API_BASE}/propiedades`);
    if (!response.ok) throw new Error("Error al obtener propiedades");
    return await response.json();
  } catch (err) {
    console.error(err);
    return [];
  }
};
