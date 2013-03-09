function Button(type, $parent) {

    var _class;
    var _text;
    var _icon;
    var _hoverIcon;
    
    switch(type) {
        case "post":
            _class = "Post";
            _text = "POST";
            _icon = "&#xe03b;";
            _hoverIcon = "&#xe03b;";
            break;
        case "help":
            _class = "Help";
            _text = "HELP";
            _icon = "&#xe02a;";
            _hoverIcon = "&#xe02a;";
            break;
        case "follow":
            _class = "Follow";
            _text = "FOLLOW";
            _icon = "&#xe00a;";
            _hoverIcon = "&#xe00a;";
            break;
        case "following":
            _class = "Following";
            _text = "FOLLOW";
            _icon = "&#xe006;";
            _hoverIcon = "&#xe002;";
            break;
        case "facebook":
            _class = "Facebook";
            _text = "LOGIN";
            _icon = "&#xe000;";
            _hoverIcon = "&#xe000;";
            break;
        case "cancel":
            _class = "Cancel";
            _text = "CANCEL";
            _icon = "&#xe002;";
            _hoverIcon = "&#xe002;";
            break;
        case "submit":
            _class = "Submit";
            _text = "SUBMIT";
            _icon = "&#xe006;";
            _hoverIcon = "&#xe006;";
            break;
        case "twitter":
            _class = "Twitter";
            _text = "LOGIN";
            _icon = "&#xe007;";
            _hoverIcon = "&#xe007;";
            break;
    }

    var $_button = $(document.createElement('div'));
    $_button.attr("class", "Button " + _class);
    $_button.text(_text);
        var $_icon = $(document.createElement('span'));
        $_icon.attr("class", "Icon");
        $_icon.html(_icon);
        $_button.mouseover( function() {
            $_icon.html(_hoverIcon);
        });
        $_button.mouseout( function() {
            $_icon.html(_icon);
        });
    
    $($parent).append($_button);
    $($_button).append($_icon);

}