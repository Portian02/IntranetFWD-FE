// This file contains the logic
// to make API calls.

// In this case, we only have a call to fetch calendar events.
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

// In this case, we only have a call to fetch internal communications.
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

// In this case, we have the method to delete a communication.
export async function deleteCommunication(id) {
  const url = `http://localhost:3001/api/internal_communications/${id}`;
  try {
    const response = await fetch(url, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to delete communication', error);
    throw error;
  }
}



export async function fetchCurrentUser(sessionId) {
  const response = await fetch(`http://localhost:3000/api/users/${sessionId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      // Suponiendo que tu API usa el sessionId para autenticar al usuario
      'Authorization': `Bearer ${sessionId}`
    }
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const user = await response.json();
  return user;
}

















// const authToken = localStorage.getItem('authToken');

// fetch('http://localhost:3001/login', {
//   method: 'GET',
//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization': `Bearer ${authToken}`,
//   },
// })
//   .then(response => response.json())
//   .then(data => {
//     // Handle server response
//   })
//   .catch(error => {
//     // Handle network errors or other errors
//   });



