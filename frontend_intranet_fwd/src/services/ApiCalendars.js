//this is the service that fetches the data from the API Admonitions
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

//this is the service that deletes the data from the API Admonitions
export async function deleteCalenadar(id) {
    const url = `http://localhost:3001/api/calendar_events/${id}`;
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
      console.error('Failed to delete calendar', error);
      throw error;
    }
  }
//this is the service that updates the data from the API Admonitions
export async function updateCalendar(id, updatedCalendar) {
    const url = `http://localhost:3001/api/calendar_events/${id}`;
    try {
      const response = await fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedCalendar),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Failed to update calendar", error);
      throw error;
    }
  }
 