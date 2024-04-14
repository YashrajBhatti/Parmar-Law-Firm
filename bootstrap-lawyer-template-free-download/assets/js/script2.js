// Function to show the dialog
function showDialog(dialogId) {
    document.getElementById(dialogId).style.display = 'block';
}

// Function to hide the dialog
function hideDialog(dialogId) {
    document.getElementById(dialogId).style.display = 'none';
}

// Add click event listeners to 'Learn More' buttons
document.querySelectorAll('.learn-more-btn').forEach(function(button) {
    button.addEventListener('click', function() {
        var dialogId = button.getAttribute('data-dialog-id');
        showDialog(dialogId);
    });
});

// Add click event listeners to 'Close' buttons inside dialogues
document.querySelectorAll('.dialog-content .close-btn').forEach(function(closeBtn) {
    closeBtn.addEventListener('click', function() {
        // The close button is inside the dialog, so find the dialog's ID to hide it
        var dialog = this.closest('.dialog-box');
        if (dialog) {
            dialog.style.display = 'none';
        }
    });
});
