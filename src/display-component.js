import { readFromQuery } from './hash-query.js';

const artistSearch = document.getElementById('artist-search');
const currentPage = document.getElementById('current-page');
const previousButton = document.getElementById('previous-button');

export default function loadDisplay() {
    const existingQuery = window.location.hash.slice(1);
    const queryOptions = readFromQuery(existingQuery);
    artistSearch.value = queryOptions.search;
    currentPage.textContent = queryOptions.page;
    previousButton.disabled = queryOptions.page <= 1;
}

export function makeProfile(user) {
    const html = `
        <div id="profile">
            <img src="${user.photoURL}" alt="User Image">
            <p>${user.displayName}</p>
            <button>Sign Out</button>
        </div>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}