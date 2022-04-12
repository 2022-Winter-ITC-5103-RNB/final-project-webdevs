//current date
  function showDate()
   {
    var todayDate = new Date();
    var curr_date = todayDate.getDate();
    var curr_month = todayDate.getMonth() + 1; 
    var curr_year = todayDate.getFullYear();
    document.write( "Date: " + curr_date + "-" + curr_month + "-" + curr_year);
  }
