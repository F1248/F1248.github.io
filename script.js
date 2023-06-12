document.getElementById("showMasterPassword").addEventListener("change", function() {
    if (document.getElementById("showMasterPassword").checked) {
        document.getElementById("masterPassword").type = "text";
    } else {
        document.getElementById("masterPassword").type = "password";
    }
});
function calculatePassword() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-#";
    let masterPassword = document.getElementById("masterPassword").value;
    let websiteName = document.getElementById("websiteName").value;
    let string = masterPassword + websiteName;
    let hash = CryptoJS.SHA256(string).toString();
    let websitePassword = "";
    for (let character_index = 0; character_index < 16; character_index++) {
        let hex1_index = character_index * 2;
        let hex2_index = hex1_index + 1;
        let hex1 = hash[hex1_index];
        let hex2 = hash[hex2_index];
        let hex = hex1 + hex2;
        let binary = parseInt(hex, 16).toString(2);
        let binary_length = binary.length
        if (binary_length > 6) {
            binary = binary.slice(binary_length - 6, binary_length);
        }
        let dezimal = parseInt(binary, 2);
        let character = characters[dezimal];
        websitePassword = websitePassword + character;
    }
    document.getElementById("websitePassword").value = websitePassword;
}