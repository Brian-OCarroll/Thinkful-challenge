const youtube_search_url = 
'https://www.googleapis.com/youtube/v3/search';

function getDataFromApi(searchTerm, callback) {
    const query = {
        part:'snippit',
        key:AIzaSyD_wDVgxVvy12tK2DDDhCsFXhHiMhv6ihM,
        q:`${searchTerm} in:name`,
        maxResults: '5',
    }
    $.getJSON(youtube_search_url, query, callback);
}

function renderResult(result) {
    let videoID = `https://www.youtube.com/watch?v=${result.id.videoId}`
    return `
        <div><a class="js-result-insert" target='_blank' href="videoID">
        <div class="js-result-title">${result.snippet.title}</div>
        <div class="js-result-thumbnail"${result.snippet.thumbnails.medium.url}</div>
        </a>
        </div>
    `;
        //how would I test to see if I was retrieving the right information?
}

function displayYoutubeSearchData(data) {
    const results = data.items.map((item, index) => renderResult(item));
    $('.js-results').html(results);
}

//function for submitting
function watchSubmit() {
$('.js-search-form').submit(function() {
    event.preventDefault;
    const queryTarget = $(this).find('.js-query');
    const query = queryTarget.val();
    queryTarget.val("");
    // setting query as argument says searchTerm will be
    // set to whatever value the user inputs
    getDataFromApi(query, displayYoutubeSearchData);
});
}
$(watchSubmit);