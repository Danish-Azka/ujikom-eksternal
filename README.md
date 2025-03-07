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


## PROJECT UJIKOM

#### BAGIAN 1

- Tampilan awal ketika user masuk ke project ini yg menampilkan Login untuk Admin dari ReanCarKuu(project pertama) dengan route </br> (http://localhost:3000/uts-FrontEnd-Danish-Azka/). </br> jika data user belum memiliki data yang tersimpan seilahkan buat akun terlebih dahulu dengan mengklik teks yang berwarna biru<img src="./IMAGE/LOGIN1.png">

- Tampilan setelah user sudah masuk ke dalam aplikasi, silahkan langsung klik bagian partnership untuk menambahkan data toko yang akan berjualan di Aplikasi e commerce
<img src="./IMAGE/Screenshot 2025-02-26 095819.png">


#### BAGIAN 2

- Terdapat 2 login pada aplikasi e commerce yaitu login untuk </br> page Pemilik toko dan login untuk page client/pembeli dari </br>e-commerce 
untuk login pemilik toko menggunakan route berikut</br> (http://localhost:3000/uts-FrontEnd-Danish-Azka/logupgear).
<img src="./IMAGE/logadmshop.png">

- Tampilan ketika admin memasuki Page untuk menambahkan suatu product ke tokonya</br>
untuk page berikut menggunakan route
</br> (http://localhost:3000/uts-FrontEnd-Danish-Azka/product).
<img src="./IMAGE/tampilan untuk admin menambahkan sebuah product.png">

- ketika admin ingin menambahkan barang akan memunculkan modal berikut</br>
<img src="./IMAGE/modal untuk menambahkan product.png">


#### BAGIAN 3

- Login client/pembeli e-commerce </br>
untuk login client menggunakan route berikut</br> (http://localhost:3000/uts-FrontEnd-Danish-Azka/logApp). </br>
jika client belum memiliki akun silahkan login terlebih dahulu dengan mengklik tulisan yang berwarna biru
<img src="./IMAGE/logClient.png">

- Tampilan awal ketika client sudah selesai login 
dengan route (http://localhost:3000/uts-FrontEnd-Danish-Azka/cs). </br>
<img src="./IMAGE/tampilan awal untuk client ketika login.png">

- Tampilan ketika client sudah mengklik bagian dari kategori
dengan route (http://localhost:3000/uts-FrontEnd-Danish-Azka/{kategori yang dipilih}). </br>
<img src="./IMAGE/tampilan ketika telah mengklik 1 kategori.png">

- Tampilan ketika client sudah mengklik button View Details
dengan route </br>(http://localhost:3000/uts-FrontEnd-Danish-Azka/{id barang yang dipilih}). </br>
<img src="./IMAGE/tampilan view detail.png">


- Tampilan Modal untuk memasukan barang kedalam keranjang
dengan route </br>(http://localhost:3000/uts-FrontEnd-Danish-Azka/{idBarang}). </br>
<img src="./IMAGE/tampilan ketika memasukan barang ke keranjang.png">

- Tampilan dari keranjang yang berisi product product yang sudah dipilih
dengan route </br>(http://localhost:3000/uts-FrontEnd-Danish-Azka/{idBarang}). </br>
<img src="./IMAGE/tampilan keranjang.png">