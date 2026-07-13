document.querySelectorAll('.butterfly');
document.querySelectorAll('.butterfly').forEach(function (el) {
    el.addEventListener('mouseover', function () {
        bt_l = el.offsetLeft;
        bt_t = el.offsetTop;
        // t = Math.floor(Math.random() * (474 - 350 + 1)) + 350;
        // l = Math.floor(Math.random() * (880));
        // el.style.left = l + 'px';
        // el.style.top  = t + 'px';
        t = Math.floor(Math.random() * 248) - 124;
        l = Math.floor(Math.random() * 880) - 440;
        
        if ((bt_l + l >= 0 && bt_l + l <= 880) && (bt_t + t >= 350 && bt_t + t <= 474)){
            el.style.left = bt_l + l + 'px';
            el.style.top  = bt_t + t + 'px';
        } else if (bt_l + l >= 0 && bt_l + l <= 880){
            if (bt_t + t < 350){
                el.style.left = bt_l + l + 'px';
                el.style.top  = 350 + (350 - bt_t - t) + 'px';
            } else{
                el.style.left = bt_l + l + 'px';
                el.style.top  = 474 - (bt_t + t - 474) + 'px';
            }
        } else if (bt_t + t >= 350 && bt_t + t <= 474){
            if (bt_l + l < 0){
                el.style.left = 0 + (0 - bt_l - l) + 'px';
                el.style.top  = bt_t + t + 'px';
            } else{
                el.style.left = 880 - (bt_l + l - 880) + 'px';
                el.style.top  = bt_t + t + 'px';
            }
        }
    });
});
document.querySelectorAll('.foo');
document.querySelectorAll('.foo').forEach(function (el) {
    el.addEventListener('mouseover', function () {
        style = window.getComputedStyle(el);
        foo_l = parseInt(style.left, 10);
        foo_t = parseInt(style.top, 10);
        
        t = Math.floor(Math.random() * 220) - 110;
        l = Math.floor(Math.random() * 450) - 225;
        
        if ((foo_l + l >= 365 && foo_l + l <= 815) && (foo_t + t >= 190 && foo_t + t <= 300)){
            el.style.left = foo_l + l + 'px';
            el.style.top  = foo_t + t + 'px';
        } else if (foo_l + l >= 365 && foo_l + l <= 815){
            if (foo_t + t < 190){
                el.style.left = foo_l + l + 'px';
                el.style.top  = 190 + (190 - foo_t - t) + 'px';
            } else{
                el.style.left = foo_l + l + 'px';
                el.style.top  = 300 - (foo_t + t - 300) + 'px';
            }
        } else if (foo_t + t >= 190 && foo_t + t <= 300){
            if (foo_l + l < 365){
                el.style.left = 365 + (365 - foo_l - l) + 'px';
                el.style.top  = foo_t + t + 'px';
            } else{
                el.style.left = 815 - (foo_l + l - 815) + 'px';
                el.style.top  = foo_t + t + 'px';
            }
        }
    });
});
