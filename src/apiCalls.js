import { displayMessage, displayScores } from './display';

const gameId = '3L4QvyqAZFTD6eSge8xk';

export async function submitScore(name, score) {
  const res = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: name,
      score,
    }),
  });

  const data = await res.json();
  displayMessage(data.result);
}

export const fetchScores = async function () {
  const res = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`);
  const data = await res.json();

  const scores = data.result;
  displayScores(scores);
};