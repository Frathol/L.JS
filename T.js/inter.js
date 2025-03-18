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
            
            let submitButton = document.createElement("button");
            submitButton.textContent = "OK";
            submitButton.type = "button";
            submitButton.id = "submitPilihan";
            submitButton.addEventListener("click", function() {
                let pilihanTerisi = [];
                for (let i = 1; i <= jumlah; i++) {
                    let nilai = document.getElementById("pilihan" + i).value;
                    if (!nilai) {
                        alert("Semua pilihan harus diisi!");
                        return;
                    }
                    pilihanTerisi.push(nilai);
                }
                submitButton.classList.add("hidden");
                let pilihanTampilan = document.createElement("div");
                let labelPilihan = document.createElement("p");
                labelPilihan.textContent = "Pilihan :";
                pilihanTampilan.appendChild(labelPilihan);
                
                let select = document.createElement("select");
                pilihanTerisi.forEach((text) => {
                    let option = document.createElement("option");
                    option.value = text;
                    option.textContent = text;
                    select.appendChild(option);
                });
                pilihanTampilan.appendChild(select);
                pilihanTampilan.appendChild(document.createElement("br"));
                

});
});