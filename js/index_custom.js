$("#submit").click(function(){
    $("#loader").show();
    var nama = $("#nama").val();
    var kelas = $("#kelas").val();
    
    //menampilkan hasil
    $("#hasil").empty();
    $("#hasil").append(`<h2 style="color: royalblue;">Hasil</h2>`);
    $("#hasil").append(`<p>Nama : `+nama+`</p><p>Kelas : `+kelas+`</p>`).hide().show('slow');
    $("#loader").hide("slow");
  });