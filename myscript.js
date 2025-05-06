// JS Uygulama: Rastgele Yemek Önerisi
function rastgeleYemek() {
  const yemekler = ['Mercimek Çorbası', 'Karnıyarık', 'Tavuk Sote', 'Fırın Makarna', 'Revani'];
  const secilen = yemekler[Math.floor(Math.random() * yemekler.length)];
  document.getElementById('yemekSonuc').innerText = "Bugün: " + secilen + " yiyin!";
}