import {
    clearPushListener,
    clearSearchText,
    setSearchFocus,
    showClearTextButton
} from './searchBar.js';
import {
    deleteSearchResults,
    buildSearchResults,
    clearStatsLine,
    setStatsLine
} from './searchResults.js';
import {
    getSearchTerm,
    retrieveSearchResult
} from './dataFunctions.js';

document.addEventListener("readystatechange", (event) => {
    const search = document.getElementById("search");
    search.addEventListener("input", showClearTextButton);
    const clear = document.getElementById("clear");
    clear.addEventListener("click", clearSearchText);
    clear.addEventListener("keydown", clearPushListener);
    if (event.target.readyState === "complete") {
        initApp();
    }
});

const initApp = () => {
    // set
    setSearchFocus();
    // listeners
    const form = document.getElementById("searchBar");
    form.addEventListener("submit", searchForSubmit);
};

// workflow
const searchForSubmit = (e) => {
    e.preventDefault();
    // delete res
    deleteSearchResults();
    // search process
    processTheSearch();
    // set focus
    setSearchFocus();
};

// search process
const processTheSearch = async () => {
    // clear form
    clearStatsLine();

    const searchTerm = getSearchTerm();
    if (searchTerm === "") return;
    const resultArray = await retrieveSearchResult(searchTerm);

    // build ele as response data
    if (resultArray.length) buildSearchResults(resultArray);

    // TODO: set stats ele
    setStatsLine(resultArray.length);
};