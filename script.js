// Function to open the modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}

// Function to close the modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Automatically open the modal when the page loads
window.onload = function () {
    openModal('registerModal2');
};
