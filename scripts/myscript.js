document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const isim = params.get("isim");
    const sehir = params.get("sehir");
    const neden = params.get("neden");
    if (isim && sehir && neden) {
        document.getElementById("sonuclar").innerHTML = `<p><strong>${isim}</strong> adlı ziyaretçimiz en çok <strong>${sehir}</strong> şehrini etkileyici buldu. Nedeni: ${neden}</p>`;
    }
});