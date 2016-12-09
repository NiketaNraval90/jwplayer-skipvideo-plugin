(function (jwplayer) {
    // The initialization function, called on player setup.
    var template = function (player, config, div) {
        // When the player is ready, let's add some text.        
        player.onReady(setup);
        function setup(evt) {
            div.style.color = 'red';
            div.style.position = 'absolute';
            div.style.width = '100px';
            div.style.height = '30px';
            div.style.right = '5px';
            div.style.border = '1px solid gray';
            div.style.display = 'block';
            div.style.backgroundColor = 'rgba(33,33,33,.8)';
            div.style.margin = '5px';
            div.style.textAlign = 'center';
            div.style.display = 'none';

            var link = document.createElement('a');
            link.setAttribute('href', 'javascript:void(0);');
            link.setAttribute('id', '_skip_');
            link.setAttribute('style', 'text-decoration:none;vertical-align:middle;font-weight: bold;color: white;display: block;margin-top: 5px;');
            var text = document.createTextNode('Skip Video');
            link.appendChild(text);
            link.addEventListener('click', function () {
                if (typeof config.click === 'function')                     
                    config.click();
                else
                    console.info('Function Not Found');
            });
            div.innerHTML = '';
            div.appendChild(link);
        }

        player.on('time', function (evn) {
            if (evn.position > config.time && div.style.display == 'none') {
                div.style.display = 'block';
            }
        })
        // This function is required. Let's use it to center the text.
        this.resize = function (width, height) {

        };
    };
    jwplayer().registerPlugin('skipvideo',jwplayer.version , template);
})(jwplayer);