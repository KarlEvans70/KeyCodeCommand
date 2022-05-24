const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
    console.log(e);
    const { key, keyCode, code } = e;

    insert.innerHTML = `
        <div class="key">
            ${e.key === ' ' ? 'space' : e.key}
            <small>Event Key</small>
        </div>
        <div class="key">
            ${e.keyCode}
            <small>Event Key Code</small>
        </div>
        <div class="key">
            ${e.code}
            <small>Event Code</small>
        </div>
        <div class="key1">
            ${e.keyCode}
        </div>
    `
});