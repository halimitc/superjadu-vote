// Simple demo logic (local in-memory). Later bisa dikoneksikan ke smart contract.
const polls = [];

document.getElementById('createPollForm').addEventListener('submit', e => {
  e.preventDefault();
  const question = document.getElementById('question').value.trim();
  const optionA = document.getElementById('optionA').value.trim();
  const optionB = document.getElementById('optionB').value.trim();
  if (!question || !optionA || !optionB) return;
  polls.push({ question, optionA, optionB, voteA: 0, voteB: 0 });
  renderPolls();
  e.target.reset();
});

function renderPolls() {
  const container = document.getElementById('poll-container');
  container.innerHTML = '';
  if (polls.length === 0) {
    container.innerHTML = '<p>Tidak ada poll. Buat poll baru di bawah.</p>';
    return;
  }
  polls.forEach((poll, i) => {
    const pollDiv = document.createElement('div');
    pollDiv.className = 'poll';
    pollDiv.innerHTML = `
      <h3>${escapeHtml(poll.question)}</h3>
      <div class="options">
        <button onclick="vote(${i}, 'A')">${escapeHtml(poll.optionA)}</button>
        <button onclick="vote(${i}, 'B')">${escapeHtml(poll.optionB)}</button>
      </div>
      <p class="result">Hasil: ${poll.voteA} vs ${poll.voteB}</p>
    `;
    container.appendChild(pollDiv);
  });
}

function vote(i, option) {
  if (!polls[i]) return;
  if (option === 'A') polls[i].voteA++;
  else polls[i].voteB++;
  renderPolls();
}

// very small helper to avoid basic XSS in demo
function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

renderPolls();
