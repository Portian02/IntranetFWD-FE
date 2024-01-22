//this is the service that fetches the data from the API Admonitions
export async function fetchAdmonitions() {
    try {
      const response = await fetch("http://localhost:3001/api/admonitions");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Failed to fetch admonitions", error);
      throw error;
    }
  }
//this is the service that deletes the data from the API Admonitions
export async function deleteAdmonition(id) {
    const url = `http://localhost:3001/api/admonitions/${id}`;
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
      console.error('Failed to delete admonition', error);
      throw error;
    }
  }
//this is the service that updates the data from the API Admonitions
export async function updateAdmonition(id, updatedData) {
    const url = `http://localhost:3001/api/admonitions/${id}`;
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
      console.error("Failed to update admonition", error);
      throw error;
    }
  }
