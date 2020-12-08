"use strict";

window.onload = function () {
  var valid = 0;
  var mail_check_number = 1;
  var mail_check_number_clicked = 0;
  var d = new Date();
  var current_day = d.getDate(); //console.log("day" + current_day);

  var current_month = d.getMonth();
  current_month += 1; //console.log ("month" + current_month);

  var current_year = d.getFullYear(); //console.log("year" + current_year);

  var current_hour = d.getHours(); // console.log ("hour: " + current_hour);
  //let current_hour = 12 ;
  // name behívása

  var name_set = document.getElementById("name_input"); //---------------mail check

  var email = document.getElementById("mail_input");
  email.addEventListener("invalid", check_mail);

  function check_mail() {
    console.log("invalid mail");
    mail_check_number = 0;
  }

  email.addEventListener("change", wrong_mail);

  function wrong_mail() {
    var wrong_email = document.getElementById("mail_error");

    if (emailIsValid(email.value)) {
      wrong_email.style.display = "none";
    } else {
      wrong_email.style.display = "block";
    }
  }
  /* const check_mail_button = document.getElementById("submit_testbutton");
  check_mail_button.addEventListener("click" , click_check_mail)
  	function click_check_mail () {
  mail_check_number_clicked = 1;
  } */
  //valid = 1 ;
  //--------------Month Menu manipulate


  var monthSet = document.getElementById("month");
  var yearSet = document.getElementById("year");
  yearSet.addEventListener("change", change_year);

  function change_year() {
    if (yearSet.value == current_year) {
      switch (current_month) {
        case 2:
          document.getElementById("jan").style.display = "none";
          break;

        case 3:
          document.getElementById("jan").style.display = "none";
          document.getElementById("febr").style.display = "none";
          break;

        case 4:
          document.getElementById("jan").style.display = "none";
          document.getElementById("febr").style.display = "none";
          document.getElementById("marc").style.display = "none";
          break;

        case 5:
          document.getElementById("jan").style.display = "none";
          document.getElementById("febr").style.display = "none";
          document.getElementById("marc").style.display = "none";
          document.getElementById("apr").style.display = "none";
          break;

        case 6:
          document.getElementById("jan").style.display = "none";
          document.getElementById("febr").style.display = "none";
          document.getElementById("marc").style.display = "none";
          document.getElementById("apr").style.display = "none";
          document.getElementById("may").style.display = "none";
          break;

        case 7:
          document.getElementById("jan").style.display = "none";
          document.getElementById("febr").style.display = "none";
          document.getElementById("marc").style.display = "none";
          document.getElementById("apr").style.display = "none";
          document.getElementById("may").style.display = "none";
          document.getElementById("jun").style.display = "none";
          break;

        case 8:
          document.getElementById("jan").style.display = "none";
          document.getElementById("febr").style.display = "none";
          document.getElementById("marc").style.display = "none";
          document.getElementById("apr").style.display = "none";
          document.getElementById("may").style.display = "none";
          document.getElementById("jun").style.display = "none";
          document.getElementById("jul").style.display = "none";
          break;

        case 9:
          document.getElementById("jan").style.display = "none";
          document.getElementById("febr").style.display = "none";
          document.getElementById("marc").style.display = "none";
          document.getElementById("apr").style.display = "none";
          document.getElementById("may").style.display = "none";
          document.getElementById("jun").style.display = "none";
          document.getElementById("jul").style.display = "none";
          document.getElementById("aug").style.display = "none";
          break;

        case 10:
          document.getElementById("jan").style.display = "none";
          document.getElementById("febr").style.display = "none";
          document.getElementById("marc").style.display = "none";
          document.getElementById("apr").style.display = "none";
          document.getElementById("may").style.display = "none";
          document.getElementById("jun").style.display = "none";
          document.getElementById("jul").style.display = "none";
          document.getElementById("aug").style.display = "none";
          document.getElementById("sep").style.display = "none";
          break;

        case 11:
          document.getElementById("jan").style.display = "none";
          document.getElementById("febr").style.display = "none";
          document.getElementById("marc").style.display = "none";
          document.getElementById("apr").style.display = "none";
          document.getElementById("may").style.display = "none";
          document.getElementById("jun").style.display = "none";
          document.getElementById("jul").style.display = "none";
          document.getElementById("aug").style.display = "none";
          document.getElementById("sep").style.display = "none";
          document.getElementById("oct").style.display = "none";
          break;

        case 12:
          document.getElementById("jan").style.display = "none";
          document.getElementById("febr").style.display = "none";
          document.getElementById("marc").style.display = "none";
          document.getElementById("apr").style.display = "none";
          document.getElementById("may").style.display = "none";
          document.getElementById("jun").style.display = "none";
          document.getElementById("jul").style.display = "none";
          document.getElementById("aug").style.display = "none";
          document.getElementById("sep").style.display = "none";
          document.getElementById("oct").style.display = "none";
          document.getElementById("nov").style.display = "none";
          break;
      }
    } else {
      document.getElementById("jan").style.display = "block";
      document.getElementById("febr").style.display = "block";
      document.getElementById("marc").style.display = "block";
      document.getElementById("apr").style.display = "block";
      document.getElementById("may").style.display = "block";
      document.getElementById("jun").style.display = "block";
      document.getElementById("jul").style.display = "block";
      document.getElementById("aug").style.display = "block";
      document.getElementById("sep").style.display = "block";
      document.getElementById("oct").style.display = "block";
      document.getElementById("nov").style.display = "block";
      document.getElementById("dec").style.display = "block";
    }
  } //-------------------month input


  monthSet.addEventListener("change", checkMonth);

  function checkMonth() {
    var plus1 = 1;
  } //-------------------day check


  var dayNumber = document.getElementById("day");
  dayNumber.addEventListener("change", checkfunction);

  function checkfunction() {
    if (dayNumber.value < current_day && monthSet.value <= current_month && yearSet.value == current_year) {
      valid = 0;
    } else {
      valid = 1;
    }
  } //--picture default
  //--------------------- time check


  var hourSet = document.getElementById("arrived");
  /* hourSet.addEventListener("change" , hour_check);
  
  function hour_check () {
  console.log(hourSet.value);
  	if (
  			dayNumber.value == current_day &&     // miért nem működik? 
  			monthSet.value == current_month &&			// ellenőrzést a submit-ra
  			yearSet.value == current_year	&&
  			hourSet.value <= current_hour ){
  		valid = 0;
  
  		
  	}
  	else {
  		valid = 1
  	} ;
  }	 */
  // hour check
  //sumbit gombokat mergelni !!!!
  //------Head Check

  var head_set = document.getElementById("customer_number");
  head_set.addEventListener("change", head_check);

  function head_check() {
    plus1 = 2;
  } //----------------sumbit function


  var picture_block = document.getElementById("picture");
  var picture_under = document.getElementById("under_picture");
  var sumbit_button = document.getElementById("submit");
  var picture_change = document.getElementById("pic_image");
  sumbit_button.addEventListener("click", sumbitFunction);
  var img_reserved = "./img/booking/reserved.jpg";
  var img_delorean = "./img/booking/delorean.jpg";
  var img_delorean2 = "./img/booking/delorean2.jpg";
  var img_ford = "./img/booking/ford.jpg";
  var img_fill = "./img/booking/fill.jpg";
  var img_yell = "./img/booking/yell.jpg"; //picture_change.setAttribute( "src" , img_delorean);

  function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function sumbitFunction() {
    //console.log(name_set.value);
    if (name_set.value == "Ford Fairlane") {
      picture_change.setAttribute("src", img_ford);
      picture_under.innerHTML = "<h3> Eszem f@sz.m megáll! </h3>";
    } else if (name_set.value === "" || email.value === "" || yearSet.value == 0 || monthSet.value == 0 || dayNumber.value === 0 || hourSet.value == 0 || head_set.value === 0) {
      picture_change.setAttribute("src", img_fill);
      picture_under.innerHTML = "<h3> Please fill that things </h3>";
    } else if (valid === 0) {
      picture_change.setAttribute("src", img_delorean2);
      picture_under.innerHTML = "<h3> Our Time Machine is Broken </h3>";
    } else if (
    /* 
    else if(mail_check_number == 0) {
    picture_block.innerHTML = "<h3> Give me right mail </h3>";
    } */
    dayNumber.value == current_day && // miért nem működik?
    monthSet.value == current_month && // ellenőrzést a submit-ra
    yearSet.value == current_year && hourSet.value <= current_hour + 1) {
      picture_change.setAttribute("src", img_delorean2);
      picture_under.innerHTML = "<h3> Our Time Machine is Broken </h3>";
    } else if (!emailIsValid(email.value)) {
      picture_change.setAttribute("src", img_yell);
      picture_under.innerHTML = "<h3> I said: MAIL!!! </h3>";
    } else if (dayNumber.value == current_day && monthSet.value == current_month && yearSet.value == current_year && hourSet.value <= current_hour) {
      picture_change.setAttribute("src", img_delorean2);
      picture_under.innerHTML = "<h3> Our Time Machine is Broken </h3>";
    } else {
      picture_change.setAttribute("src", "./img/booking/thanks.jpg");
      picture_under.innerHTML = "<h3> Thanks for Ur Cooperation </h3>";
      console.log("submit valid");
      console.log("name: " + name_set.value);
      console.log("mail: " + email.value);
      console.log("reserve date:");
      console.log("date: " + yearSet.value + " " + monthSet.value + " " + dayNumber.value);
      console.log("arrived in: " + hourSet.value);
      console.log("head: " + head_set.value);
      console.log("service info");
      console.log("current_hour: " + current_hour);
      console.log("dayNumber.value: " + dayNumber.value);
      console.log("current_day: " + current_day);
    }
  }
};