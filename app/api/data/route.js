export default async function FetchData() {
    const response = await fetch ('http://localhost:3000/data')
  
    if (!response.ok) {
      throw new Error("Error in fetching data")
    }
  
    return response.json();
}