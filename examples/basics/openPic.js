window.onload = function() {
    var $nodes = document.getElementsByTagName('a');
    for (var $i = 0; $i < $nodes.length; $i++) {
        $nodes[$i].onclick = function($e) {
            window.open(
                this.href, "picture", "scrollbars = no, width = 300, height = 280, resizable = yes"
            );
            $e ? $e.preventDefault() : (window.event.returnValue = false);
            //return false;
        };
    }
};
