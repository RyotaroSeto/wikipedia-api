let input = '';
const serchUrl = 'https://ja.wikipedia.org/w/api.php?action=query&format=json&list=backlinks&bllimit=50&bltitle='

function setup() {
    noCanvas();
    input = select('#input');
    input.changed(search);
}

function search() {
    let url = serchUrl + input.value();
    loadJSON(url, show, 'jsonp');
}

function show(data) {
    let links = data.query.backlinks;
    console.log(data);
    links.forEach(link => {
        createDiv(link.title);
    });

}
