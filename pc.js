function showPopup(title, description) {
    document.getElementById('popupTitle').textContent = title;
    document.getElementById('popupDesc').textContent = description;
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}