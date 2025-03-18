document.getElementById("OK").addEventListener("click", function() {
    let nama = document.getElementById("username").value;
    let jumlah = parseInt(document.getElementById("jPilihan").value);
    let container = document.getElementById("pilihanJumlah");
    
    if (!nama || isNaN(jumlah) || jumlah <= 0) {
        alert("Masukkan nama dan jumlah pilihan yang benar!");
        return;
    }
});