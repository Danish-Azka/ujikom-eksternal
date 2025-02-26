# CARA MENGGUNAKAN PROJEK BERIKUT 
1. diawal ada sebuah form untuk pengisian login, jika belum memiliki akun yang terdaftar klik tulisan "no have account? sign up"
2.isi semua form yg ada dan isi bagian form photo dengan link dari sebuah gambar
3. jika sudah memiliki akun maka isi form login 
4. untuk alur pengisian data harap dilakukan secara berurutan sebagai berikut
        - karyawan
        - client
        - mobil
        - transaksi
        - pengembalian
5. terdapat tombol settings di pojok kanan atas sidebar, yg berfungsi untuk menampilkan tombol logOut dan profile dari admin

## FITUR UTAMA
1. Manajemen Klien: Tambah, perbarui, dan kelola daftar klien yang menyewa kendaraan.
2. Manajemen Karyawan: Kelola data karyawan yang bertanggung jawab atas proses transaksi sewa.
3. Manajemen Kendaraan: Simpan dan kelola informasi kendaraan dan client yang menyewanya.
4. Pelacakan Transaksi: Catat dan kelola transaksi antara klien dan perusahaan, serta mencatat status pembayaran client.
4. Manajemen Pengembalian: Mencatat pengembalian kendaraan.


### HUBUNGAN DATA
1. Klien & Kendaraan: Klien dapat menyewa satu atau lebih kendaraan, membentuk hubungan antara dua entitas ini.
2. Transaksi: Transaksi dihasilkan setiap kali klien menyewa kendaraan. Hal ini menghubungkan klien, kendaraan, dan karyawan (yang mengawasi prosesnya).
3. Pengembalian: Saat kendaraan dikembalikan, sistem mencatat pengembalian tersebut dan memperbarui status kendaraan serta transaksi terkait. Hal ini menghubungkan klien, kendaraan, karyawan, dan transaksi.
Runs the app in the development mode.\


### TEKNOLOGI YANG DIGUNAKAN

Backend: Node.js, Express.js, Sequelize ORM
Database: MySQL
Frontend: React.js, Axios, Tailwind CSS untuk styling
