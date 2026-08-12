window.addEventListener('load', () => {
    this.document.querySelectorAll('pre code').forEach((e) => {
        let pre = e.parentNode;
        pre.classList.add('bg-light', 'rounded');
        pre.style.backgroundColor = '';
        pre.style.color = '';
        pre.style.padding = '1em';
    })
});