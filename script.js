
function handleKey(event) {
    if (event.key === 'Enter') {
        let input = document.getElementById('user-input').value;
        let chatBox = document.getElementById('chat-box');
        chatBox.innerHTML += '<p><strong>You:</strong> ' + input + '</p>';
        document.getElementById('user-input').value = '';

        // Fake AI reply (for now)
        let reply = 'Esthera: I heard you say "' + input + '"';
        if (input.toLowerCase().includes("private mode on")) {
            reply = "Esthera: 💖 Romantic mode activated.";
        }
        chatBox.innerHTML += '<p>' + reply + '</p>';
    }
}

function togglePrivateMode() {
    let chatBox = document.getElementById('chat-box');
    chatBox.innerHTML += '<p>Esthera: 💖 Romantic mode activated.</p>';
}
