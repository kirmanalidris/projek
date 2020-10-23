  <!-- Lisensi page -->
  <?php eval(base64_decode(get_option("ambil_verifikasi_lisensi"))); ?>
  <?php if ($_SERVER['SERVER_NAME'] == $verifikasi_domain): ?>
  <?php else: ?>
  <div id="license_page">
  <i class="svg material-icons">error</i>
  <h1>Oops Kesalahan lisensi</h1>
  <p>License belum dimasukkan atau license tidak Valid dalam database</p>
  <ol>
    <li>Hubungi kirmanalidris</li>
    <li>Dapatkan license</li>
    <li>Masukan license</li>
    <li>Template siap digunakan</li>
  </ol>
  <div style="margin-top:40px;"></div>
  <a href="https://kirmanalidris.com/contact">Hubungi developer</a>
 </div>
 <style>body{position:fixed;overflow:hidden;}#license_page{line-height:1.2em;position:fixed;top:0;bottom:0;left:0;right:0;color:#fff;background:black;padding:40px;z-index:999999999;font-family:"inherit", sans-serif;font-size:14px;}#license_page i{color: #fff;font-size: 30px;}#license_page h1{line-height: 1.6em;}#license_page a{color:#000;background: #fff;padding:10px;border-radius:5px;}</style>
 <?php endif; ?>
 <!-- lisensi page -->
