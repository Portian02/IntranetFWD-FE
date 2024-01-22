//this is the service that fetches the data from the API Admonitions
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

//this is the service that deletes the data from the API Admonitions
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

//this is the service that updates the data from the API Admonitions
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