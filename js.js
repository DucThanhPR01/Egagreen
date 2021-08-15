 $(function(){
  //click vao nut nao thi cho no doi class
  $('.bonnut li').click(function(){
    $('.bonnut li').removeClass('active');
    $(this).addClass('active');

  var x= $(this).index();
      x=x+1;
  
    // console.log("Vi tri cua phan tu duoc click la: " + x)
    $('.bonnd ul li').removeClass('hienlen');
    $('.bonnd ul li:nth-child('+x+')').addClass('hienlen');

  })
})  


