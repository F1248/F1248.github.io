document.getElementById("showMasterPassword").addEventListener(
    "change", function() {
        if (document.getElementById("showMasterPassword").checked) {
            document.getElementById("masterPassword").type = "text";
        } else {
            document.getElementById("masterPassword").type = "password";
        }
    }
)
function calculatePassword() {
    let masterPassword = document.getElementById("masterPassword").value;
    let websiteName = document.getElementById("websiteName").value;
    let string = masterPassword + websiteName;
    let hash = CryptoJS.SHA256(string).toString();
    let websitePassword = "";
    if (document.getElementById("generateNumber").checked) {
        let dezimal = BigInt("0x" + hash).toString();
        console.log(hash)
        console.log(dezimal)
        let dezimalLength = dezimal.length;
        dezimal = dezimal.slice(dezimalLength - 16, dezimalLength);
        console.log(dezimal)
        websitePassword = dezimal;
    } else {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (let characterIndex = 0; characterIndex < 16; characterIndex++) {
            let hex1Index = characterIndex * 2;
            let hex2Index = hex1Index + 1;
            let hex1 = hash[hex1Index];
            let hex2 = hash[hex2Index];
            let hex = hex1 + hex2;
            let binary = parseInt(hex, 16).toString(2);
            let binaryLength = binary.length;
            if (binaryLength > 6) {
                binary = binary.slice(binaryLength - 6, binaryLength);
            }
            let dezimal = parseInt(binary, 2);
            if (dezimal < 62) {
                let character = characters[dezimal];
                websitePassword = websitePassword + character;
            }
        }
    }
    document.getElementById("websitePassword").value = websitePassword;
}