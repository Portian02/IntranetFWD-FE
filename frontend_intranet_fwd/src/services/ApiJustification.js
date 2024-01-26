//this is a service to fetch the justifications from the API
export async function fetchJustifications() {
    try {
      const response = await fetch("http://localhost:3001/api/justifications");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Failed to fetch justifications", error);
      throw error;
    }
  }
//this is the service that deletes the data from the API Admonitions
export async function deleteJustification(id) {
    const urld = `http://localhost:3001/api/justifications/${id}`;
    try {
      const response = await fetch(urld, {
        method: "DELETE",
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
//this is the service that updates the data from the API Admonitions
export async function updateJustification(id, updatedJustification) {
    const url = `http://localhost:3001/api/justifications/${id}`;
    try {
      const response = await fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedJustification),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Failed to update justification", error);
      throw error;
    }
  }





















