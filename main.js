// Kung Fu Panda Look Up

// Event Listener
document.getElementById('search').addEventListener('click', characterSearch);

// Event Function
function characterSearch() {
    // Get Input Value (what character to look for?)
    let name = document.getElementById('input-name').value;
    name = name.toLowerCase();

    // Test Input Variable and update the page
    if (name == 'tigress' || name == 'master tigress') {
        // Update page to Tigress
        document.getElementById('main-img').src = 'images/tigress.png';
        document.getElementById('character-name').innerHTML = 'Tigress';
        document.getElementById('quote').innerHTML = '"That was pretty hardcore!"';
        document.getElementById('wiki-link').innerHTML = 'Tigress Wiki';
        document.getElementById('wiki-link').href = 'https://kungfupanda.fandom.com/wiki/Tigress';
    } else if (name == 'mantis' || name == 'master mantis') {
        // Update page to Mantis
        document.getElementById('main-img').src = 'images/mantis.png';
        document.getElementById('character-name').innerHTML = 'Mantis';
        document.getElementById('quote').innerHTML = '"Fear the bug!"';
        document.getElementById('wiki-link').innerHTML = 'Mantis Wiki';
        document.getElementById('wiki-link').href = 'https://kungfupanda.fandom.com/wiki/Mantis';
    } else if (name == 'monkey' || name == 'master monkey') {
        // Update page to Monkey
        document.getElementById('main-img').src = 'images/monkey.png';
        document.getElementById('character-name').innerHTML = 'Monkey';
        document.getElementById('quote').innerHTML = '"We should hang out."';
        document.getElementById('wiki-link').innerHTML = 'Monkey Wiki';
        document.getElementById('wiki-link').href = 'https://kungfupanda.fandom.com/wiki/Monkey';
    } else {
        // Update page to Question Mark
        document.getElementById('main-img').src = 'images/question-mark.png';
        document.getElementById('character-name').innerHTML = '?????';
        document.getElementById('quote').innerHTML = '"Character Not Found"';
        document.getElementById('wiki-link').innerHTML = 'Wiki Home';
        document.getElementById('wiki-link').href = 'https://kungfupanda.fandom.com/wiki/Kung_Fu_Panda_Wiki';
    }
}