(function () {
    var options = {
    whatsapp: "219999-9999",
    call_to_action: "Podemos ajudar?",
    position: "right",
    };
    var proto = document.location.protocol, host = "getbutton.io", url = proto + "//static." + host;
    var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
    s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
    var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
})(
    observer = new MutationObserver(function (mutations, me) {
    var waterMark = document.getElementsByClassName("sc-7dvmpp-1 dfBDQI");
    if (waterMark) {
        waterMark[0].remove();
        me.disconnect();
        return;
    }
}),
observer.observe(document, {
childList: true,
subtree: true
}));