//this is the service that fetches the data from the API Admonitions
export async function fetchDocument() {
    try {
      const response = await fetch("http://localhost:3001/api/documents_storages  ");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Failed to fetch documents_storages", error);
      throw error;
    }
  }

  export async function deleteDocuments(id) {
    const url = `http://localhost:3001/api/documents_storages/${id}`;
    try {
      const response = await fetch(url, {
        method: "DELETE",
      });
  
      if (!response.ok) {
        console.error('Failed to delete admonition. Response:', response);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error in deleteDocuments:', error);
      throw error;
    }
  }
  
//this is the service that updates the data from the API Admonitions
export async function updateDocument(id, updatedData) {
    try {
      const response = await fetch(`http://localhost:3001/api/documents_storages/${id}`, {
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
      console.error("Failed to update document", error);
      throw error;
    }
  }
