//this is the service that fetches the data from the API Admonitions
export async function fetchDocument() {
    try {
      const response = await fetch("http://localhost:3001/api/documents_storages");
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
    try {
      const response = await fetch(`http://localhost:3001/api/documents_storages/${id}`, {
        method: "DELETE",
      });
  
      if (!response.ok) {
        console.error('Failed to delete document Response:', response);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Failed to delete Document', error);
      throw error;
    }
  }

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
  export async function fetchDocumentsTypes() {
    try {
      const response = await fetch("http://localhost:3001/api/documents_types");
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