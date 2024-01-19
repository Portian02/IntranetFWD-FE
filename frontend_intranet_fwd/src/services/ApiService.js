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


export async function fetchAnnouncements() {
  try {
    const response = await fetch("http://localhost:3001/api/announcements");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch annoucements", error);
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


export async function updateCommunication(id, updatedData) {
  const url = `http://localhost:3001/api/internal_communications/${id}`;
  try {
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to update communication", error);
    throw error;
  }
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



