/* 
Kung Fu Panda Lookup
*/

// Event Listener
document.getElementById('search').addEventListener('click', main);

// Functions
function main() {
    // INPUT
    // str.toLowerCase() --> lowercases all letters
    let name = document.getElementById('search-this').value.toLowerCase();

    // IF / ELSE IF STATEMENTS
    if (name == 'crane') {
        document.getElementById('main-img').src = 'images/crane.png';
        document.getElementById('charac').innerHTML = 'Crane';
        document.getElementById('quote').innerHTML = '“Hey, uh, maybe you can\'t watch me be killed?”';
        document.getElementById('link').href = 'https://kungfupanda.fandom.com/wiki/Crane';
        document.getElementById('wiki-btn').innerHTML = 'Crane Wiki';

    } else if (name == 'mantis') {
        document.getElementById('main-img').src = 'images/mantis.png';
        document.getElementById('charac').innerHTML = 'Mantis';
        document.getElementById('quote').innerHTML = '“Fear the bug!”';
        document.getElementById('link').href = 'https://kungfupanda.fandom.com/wiki/Mantis';
        document.getElementById('wiki-btn').innerHTML = 'Mantis Wiki';

    } else if (name == 'monkey') {
        document.getElementById('main-img').src = 'images/monkey.png';
        document.getElementById('charac').innerHTML = 'Monkey';
        document.getElementById('quote').innerHTML = 'We should hang out.';
        document.getElementById('link').href = 'https://kungfupanda.fandom.com/wiki/Monkey';
        document.getElementById('wiki-btn').innerHTML = 'Monkey Wiki';

    } else if (name == 'tigress') {
        document.getElementById('main-img').src = 'images/tigress.png';
        document.getElementById('charac').innerHTML = 'Tigress';
        document.getElementById('quote').innerHTML = 'That was pretty hardcore.';
        document.getElementById('link').href = 'https://kungfupanda.fandom.com/wiki/Tigress';
        document.getElementById('wiki-btn').innerHTML = 'Tigress Wiki';

    } else if (name == 'viper') {
        document.getElementById('main-img').src = 'images/viper.png';
        document.getElementById('charac').innerHTML = 'Viper';
        document.getElementById('quote').innerHTML = 'I don\'t need to bite to fight!';
        document.getElementById('link').href = 'https://kungfupanda.fandom.com/wiki/Viper';
        document.getElementById('wiki-btn').innerHTML = 'Viper Wiki';

    } else if (name == 'po'){
        document.getElementById('main-img').src = 'images/po.png';
        document.getElementById('charac').innerHTML = 'Po';
        document.getElementById('quote').innerHTML = '"Buddy, I am the Dragon Warrior."';
        document.getElementById('link').href = 'https://kungfupanda.fandom.com/wiki/Po';
        document.getElementById('wiki-btn').innerHTML = 'Po Wiki';
    }
}