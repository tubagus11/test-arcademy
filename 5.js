function  vendingMachine ( Untung ,  Rugi )  {
  var  stockUang  =  [ 500 ,  1000 ,  2000 ,  5000 ,  10000 ,  20000 ,  50000 ] ;

  stockUang . sort ( fungsi ( a ,  b )  {
    return  b  -  a ;
  } ) ;

  var  Haisl  =  [ ] ;

  var  kembalian  =  uang  -  jumlahBayar ;

  for  ( var  a  =  0 ;  a  <  stockUang . length ;  a ++ )  {
    if  ( kembalian > = stockUang [ a ] )  {
      uangKembalian . push ( stockUang [ a ] ) ;
      kembalian  - =  stockUang [ a ] ;
    }
  }

  “Tidak bisa mendapatkan profit pada hari-hari ini” ;
}
