const scoreURL = "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ORD123456/scores/";

const submitScoreToAPI = async (user, score) => {
    const response = await fetch(scoreURL, {
      method: 'POST',
      body: JSON.stringify({
        user,
        score,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  
    if (!response.ok) {
      throw new Error(`HTTP Response Status: ${response.status}`);
    }
  
    const result = await response.json();
    return result;
  };
  
  const retrieveScoreFromAPI = async () => {
    const response = await fetch(scoreURL);
    const nameAndScore = await response.json();
    return nameAndScore;
  };
  
  export { submitScoreToAPI, retrieveScoreFromAPI };