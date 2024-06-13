
let login = document.querySelector('.login');
let logout = document.querySelector('.logout');
let email = document.getElementById('email');
let password = document.getElementById('password');
let note = document.getElementById('note');
let subject = document.getElementById('subject');

function show() {
    let email = localStorage.getItem('email');
    if (email) {
        login.style.display = 'none';
        logout.style.display = 'block';
        display();
    } else {
        login.style.display = 'block';
        logout.style.display = 'none';
    }
}
show();

function btn1() {
    if (!email.value || !password.value) return alert('Please enter information');
    localStorage.setItem('email', email.value);
    localStorage.setItem('password', password.value);
    show();
    email.value = '';
    password.value = '';
}

function btn2() {
    localStorage.removeItem('email');
    show();
}

function btn3() {
    let email = localStorage.getItem('email');
    let obj = {
        email: email,
        subject: subject.value,
        note: note.value
    };
    savevalue(obj);
    note.value = '';
    subject.value = '';
}

function savevalue(obj) {
    let notes = localStorage.getItem('notes');
    if (notes) {
        notes = JSON.parse(notes);
        notes.push(obj);
        localStorage.setItem('notes', JSON.stringify(notes));
    } else {
        notes = [obj];
        localStorage.setItem('notes', JSON.stringify(notes));
    }
    display();
}

function removeNote(index) {
    let notes = JSON.parse(localStorage.getItem('notes'));
    notes.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notes));
    display();
}

function display() {
    let notes = localStorage.getItem('notes');
    let list = document.getElementById('list');
    let email = localStorage.getItem('email');
    if (notes) {
        list.innerHTML = '';
        notes = JSON.parse(notes);
        notes.forEach(function (d, i) {
            if (d.email === email) {
                let li = document.createElement('li');
                li.innerHTML = `${d.subject}: ${d.note} <button id='mybtn' onclick="removeNote(${i})">Remove</button>`;
                list.appendChild(li);
            }
        });
    }
}

display();














