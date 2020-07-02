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
        updatePage('Tigress', '"That was pretty hardcore!"');
    } else if (name == 'mantis' || name == 'master mantis') {
        // Update page to Mantis
        updatePage('Mantis', '"Fear the bug!"');
    } else if (name == 'monkey' || name == 'master monkey') {
        // Update page to Monkey
        updatePage('Monkey', '"We should hang out."');
    } else if (name == 'crane' || name == 'master crane') {
        // update pg to crane
        updatePage('Crane','"You can chain my body, but you will never chain my warrior spirit!"');
    } else if (name == 'po' || name == 'master po') {
        // update pg to po
        updatePage('Po','"Buddy, I am the Dragon Warrior."');
    } else if (name == 'viper' || name == 'master viper') {
        // update pg to viper
        updatePage('Viper','"I don'+"'t need to bite to fight"+'!"');
    }
    else {
        // Update page to Question Mark
        questionMark();
    }
}

function updatePage(name, quote) {
    document.getElementById('main-img').src = 'images/' + name.toLowerCase() + '.png';
    document.getElementById('character-name').innerHTML = name;
    document.getElementById('quote').innerHTML = quote;
    document.getElementById('wiki-link').innerHTML = name + ' Wiki';
    document.getElementById('wiki-link').href = 'https://kungfupanda.fandom.com/wiki/' + name;
}

function questionMark() {
    document.getElementById('main-img').src = 'images/question-mark.png';
    document.getElementById('character-name').innerHTML = '?????';
    document.getElementById('quote').innerHTML = '"Character Not Found"';
    document.getElementById('wiki-link').innerHTML = 'Wiki Home';
    document.getElementById('wiki-link').href = 'https://kungfupanda.fandom.com/wiki/Kung_Fu_Panda_Wiki';
}