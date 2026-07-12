document.querySelectorAll('.butterfly');
document.querySelectorAll('.butterfly').forEach(function (el) {
    el.addEventListener('mouseover', function () {
        t = Math.floor(Math.random() * (474 - 350 + 1)) + 350;
        l = Math.floor(Math.random() * (880));
        el.style.left = l + 'px';
        el.style.top  = t + 'px';
    });
});
document.querySelectorAll('.foo');
document.querySelectorAll('.foo').forEach(function (el) {
    el.addEventListener('mouseover', function () {
        style = window.getComputedStyle(el);
        foo_l = parseInt(style.left, 10);
        foo_t = parseInt(style.top, 10);
        
        t = Math.floor(Math.random() * 220) - 110;
        l = Math.floor(Math.random() * 220) - 110;
        
        if ((foo_l + l >= 365 && foo_l + l <= 815) && (foo_t + t >= 190 && foo_t + t <= 300)){
            el.style.left = foo_l + l + 'px';
            el.style.top  = foo_t + t + 'px';
        } else if (foo_l + l >= 365 && foo_l + l <= 815){
            el.style.left = foo_l + l + 'px';
        } else if (foo_t + t >= 190 && foo_t + t <= 300){
            el.style.top  = foo_t + t + 'px';
        }
    });
});
