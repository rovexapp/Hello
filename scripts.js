// scripts.js
document.addEventListener('DOMContentLoaded', function () {
    let clicks = 0;
    let username = "User"; // Fetch this from backend
    let helloBalance = 1000; // Fetch this from backend
    let usdtBalance = 500; // Fetch this from backend

    document.getElementById('username').innerText = username;
    document.getElementById('hello-balance').innerText = helloBalance;
    document.getElementById('usdt-balance').innerText = usdtBalance;
    document.getElementById('clicks').innerText = clicks;

    document.getElementById('click-button').addEventListener('click', function () {
        if (clicks < 1000) {
            clicks++;
            document.getElementById('clicks').innerText = clicks;
        }
    });

    document.getElementById('copy-link').addEventListener('click', function () {
        let inviteLink = "https://telegram.me/yourbot?start=" + username; // Generate actual link
        document.getElementById('invite-link').value = inviteLink;
        navigator.clipboard.writeText(inviteLink);
        alert("Invite link copied!");
    });

    document.getElementById('buy-button').addEventListener('click', function () {
        let amount = parseInt(document.getElementById('hello-amount').value);
        if (amount > 0 && usdtBalance >= amount) {
            helloBalance += amount;
            usdtBalance -= amount;
            document.getElementById('hello-balance').innerText = helloBalance;
            document.getElementById('usdt-balance').innerText = usdtBalance;
        }
    });

    document.getElementById('sell-button').addEventListener('click', function () {
        let amount = parseInt(document.getElementById('hello-amount').value);
        if (amount > 0 && helloBalance >= amount) {
            helloBalance -= amount;
            usdtBalance += amount;
            document.getElementById('hello-balance').innerText = helloBalance;
            document.getElementById('usdt-balance').innerText = usdtBalance;
        }
    });
});
