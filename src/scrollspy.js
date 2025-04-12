window.addEventListener('alpine:init', () => {
    let section = document.querySelectorAll("section");

    let sections = {};
    let i = 0;

    Array.prototype.forEach.call(section, function (e) {
        sections[e.id] = e.offsetTop;
    });

    window.onscroll = function () {
        let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
        const activeClass = "relative actived before:content-['•'] before:text-slate-400 before:mr-2".split(' ');
        for (i in sections) {
            if (sections[i] <= scrollPosition) {
                document.querySelector('.actived')?.classList.remove(...activeClass);
                document.querySelector('a[href*=' + i + ']').classList.add(...activeClass)
            }
        }
    };
})
