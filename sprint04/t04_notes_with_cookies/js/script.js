let text = document.querySelector ('textarea');
    note = document.querySelector ('.notes-area');
    
let count = 0;
render ();

function add () {
    if (text.value == '') {
        alert (`It's empty. Tryto input something in "Text input"`)
    } else if (text.value) {
        document.cookie = Date.now () + '=' + text.value + '; expires=' + new Date (Date.now() + 30 * 24 * 60 * 60 * 100)
    }
    text.value = '';
    render();
}   

function clearNote () {
    if (confirm(`Are you sure?`)) {
        if (`cookie`) {
            cookieToArray (document.cookie).forEach(item => {
                document.cookie = item [0] + '=1; max-age=-1'
            })
        }
    }
    render ();
}

function render () {
    let render = '';
    if (document.cookie) {
        cookieToArray(document.cookie).forEach(item => {
            render += '-->' + item [1] + '\n';
        });
    } else {
        render += '[Empty]';
    }
    note.innerHTML = render;
}

function cookieToArray(cook) {
    let obj = {};
    cook.split('; ').forEach(item => {
        obj [item.split('=')[0]] = item.split('=') [1];
    })
    return Object.entries(obj);
}