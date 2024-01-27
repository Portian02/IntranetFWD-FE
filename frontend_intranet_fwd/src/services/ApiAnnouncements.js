//this is the service that fetches the data from the API Announcements
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
//this is the service that deletes the data from the API Announcements
export async function deleteAnnouncement(id) {
    const url = `http://localhost:3001/api/announcements/${id}`;
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
      console.error('Failed to delete announcement', error);
      throw error;
    }
  }
//this is the service that updates the data from the API Announcements
export async function updatedAnnouncement(id, updatedAnnouncement) {
    const url = `http://localhost:3001/api/announcements/${id}`;
    try {
      const response = await fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedAnnouncement),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Failed to update admonition", error);
      throw error;
    }
  }
  