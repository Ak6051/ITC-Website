const API_URL = "http://localhost:5000/api/candidate";

export const saveCandidateData = async (data) => {
  const response = await fetch(`${API_URL}/save`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};
