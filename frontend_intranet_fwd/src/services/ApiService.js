// Este archivo contiene la lógica 
// para realizar las llamadas a la API. 

// En este caso, solo tenemos una llamada para obtener los eventos del calendario.
export async function fetchCalendars() {
  try {
    const response = await fetch("http://localhost:3001/api/calendar_events");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch calendars", error);
    throw error;
  }
}

// En este caso, solo tenemos una llamada para obtener los eventos del internal commmunications.
export async function fetchCommunicationInternals() {
  try {
    const response = await fetch("http://localhost:3001/api/internal_communications");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch internal commmunications", error);
    throw error;
  }
}