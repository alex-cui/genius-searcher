function search() {
    if (document.getElementById("input").value) {
        window.open('http://www.genius.com/search?q='   + document.getElementById("input").value, '_newtab');
    }
}


document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#input').addEventListener('keypress', function (e) {
        if (e.key == 'Enter') {
          search();
        };
    })
    document.querySelector('#search').addEventListener('click', search);
});
