const loaderEl = document.createElement('div');
loaderEl.id = 'loader';

const isDark = localStorage.getItem('theme') === 'dark';

loaderEl.innerHTML = `
    <div class="loader-animals">
        <img src="/loadphotos/${isDark ? 'whitelamb1' : 'blacklamb1'}.png" class="loader-animal" alt="">
        <img src="/loadphotos/${isDark ? 'whitelamb2' : 'blacklamb2'}.png" class="loader-animal" alt="">
        <img src="/loadphotos/${isDark ? 'whitelamb3' : 'blacklamb3'}.png" class="loader-animal" alt="">
    </div>
`;
document.body.prepend(loaderEl);

const content = document.getElementById('content');

function revealPage() {
    loaderEl.classList.add('hidden');
    content.classList.add('visible');
}

Promise.all([
    new Promise(res => window.addEventListener('load', res)),
    new Promise(res => setTimeout(res, 1400))
]).then(revealPage);