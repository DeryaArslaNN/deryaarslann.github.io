document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const isim = params.get("isim");
    const cevap = params.get("cevap");
    if (isim && cevap) {
        document.getElementById("sonuclar").innerHTML = `<p><strong>${isim}</strong> şöyle dedi: ${cevap}</p>`;
    }
});