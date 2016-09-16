window.onload = function() {
    var $p = document.getElementsByTagName('p')[0];
    $p.className = 'tmpFrameworkLoaded';
    if ($p.innerText) {
        $p.innerText = 'jQuery successfully loaded and running!';
    } else {
        $p.textContent = 'jQuery successfully loaded and running!';
    }
};
