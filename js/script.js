
function hitungLuas(sisiPersegi) {
    return sisiPersegi * sisiPersegi;
}

function hitungKeliling(sisiPersegi) {
    return sisiPersegi * 4;
}

function Hitung() {
    let sisi1 = document.getElementById("sisiPersegi");
    let sisiPersegi = parseInt(sisi1.value);
    if (isNaN(sisiPersegi)) {
        alert("hanya bisa input angka");
        sisi1.value = "";
        return;
    }

    let luasPersegi = hitungLuas(sisiPersegi);
    let kelilingPersegi = hitungKeliling(sisiPersegi)
    document.getElementById("hasilLuasPersegi").innerHTML = "Luas Persegi: " + luasPersegi
    document.getElementById("hasilKelilingPersegi").innerHTML = "Keliling Persegi: " + kelilingPersegi

}
function Reset() {
    document.getElementById("sisiPersegi").value = "";
    document.getElementById("hasilLuasPersegi").value = "";
    document.getElementById("hasilKelilingPersegi").value = "";
}

function validasiInput(input) {
    input.value = input.value.replace(/[^0-9]/g, "");
}