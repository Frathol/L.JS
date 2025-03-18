document.getElementById("OK").addEventListener("click", function() {
    let nama = document.getElementById("username").value;
    let jumlah = parseInt(document.getElementById("jPilihan").value);
    let tempatJ = document.getElementById("pilihanContainer");
    
    if (!nama || isNaN(jumlah) || jumlah <= 0) {
        alert("Masukkan nama dan jumlah pilihan yang benar!");
        return;
    }
    let formPilihan = document.createElement("form");
            formPilihan.id = "formPilihan";
            
            for (let i = 1; i <= jumlah; i++) {
                let label = document.createElement("label");
                label.textContent = "Pilihan " + i + " :";
                let input = document.createElement("input");
                input.type = "text";
                input.id = "pilihan" + i;
                formPilihan.appendChild(label);
                formPilihan.appendChild(input);
                formPilihan.appendChild(document.createElement("br"));
            }
            
            
});