document.getElementById("showMasterPassword").addEventListener("change", function() {
    if (document.getElementById("showMasterPassword").checked) {
        document.getElementById("masterPassword").type = "text";
    } else {
        document.getElementById("masterPassword").type = "password";
    }
});