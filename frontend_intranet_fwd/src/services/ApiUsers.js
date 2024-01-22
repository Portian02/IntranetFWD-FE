//this is the service that fetches the data from the API users
export async function fetchUsers() {
    try {
      const response = await fetch("http://localhost:3001/api/users");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Failed to fetch users", error);
      throw error;
    }
  }
//this is the service that deletes the data from the API users
export async function DeleteUser(id) {
    const url = `http://localhost:3001/api/users/${id}`;
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
      console.error('Failed to delete User', error);
      throw error;
    }
  }
//this is the service that updates the data from the API users
export async function updateUser(id, updatedUser) {
    const url = `http://localhost:3001/api/users/${id}`;
    try {
      const response = await fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUser),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Failed to update user", error);
      throw error;
    }
  }
