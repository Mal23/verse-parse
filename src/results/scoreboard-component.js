export function makeScoreboard(user) {
    const html = `
        <tr>
            <td><div><img src="${user.photoURL}">${user.displayName}</div></td>
            <td>${user.topScore} points</td>
        </tr>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const playerTopScores = document.getElementById('player-top-scores');

export default function loadScoreboard(users) {
    users.forEach(user => {
        const userScoreDom = makeScoreboard(user);
        playerTopScores.appendChild(userScoreDom);
    });
}