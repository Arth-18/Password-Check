var check = function() {
    var password = document.getElementById('password').value;
    var checkPassword = document.getElementById('checkPassword').value;
    var alertPassword = document.getElementById('alertPassword');

    if (password === checkPassword && password !== "" && checkPassword !== "") {
        alertPassword.style.color = '#8CC63E';
        alertPassword.innerHTML = '<span><i class="fas fa-check-circle"></i> Match </span>';
    } else {
        alertPassword.style.color = '#EE2B39';
        alertPassword.innerHTML = '<span><i class="fas fa-exclamation-triangle"></i> Not matching</span>';
    }
}
