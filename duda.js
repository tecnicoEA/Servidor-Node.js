function check(v_user, v_password,callback){
  stmt = db.prepare("select count from my_table where user = ? and password = ? ");
  stmt.bind(v_user, v_password);

  stmt.get(function(error,row){
    if(error){
      throw err;
      console.log("Entra en error");
    }
    else{
      if(row){
        callback(count); //count is 10
      }
      else{
        callback(0);
      }
    }
  });
}



var server = net.createServer(function(socket) {
  var my_var;
  my_user="Pepe";
  my_password="1234";

  function check(my_user, my_password, function(resultado){
    console.log(result); //result=10 (ok)
    my_var=result;
  }
  console.log(my_var); //not correct result

}
