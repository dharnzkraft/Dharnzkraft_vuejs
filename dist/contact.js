$(document).ready(function(){
  

    // toggle Hamburger Menu

    $('.burger').click(function() {
        $('.nav-group').toggleClass('navgroup');
    })



    $(document).on('click', '#submitform', function(event){
    event.preventDefault();
    
    var fname = $('#fname').val();
    var lname = $('#lname').val();
    var email = $('#email').val();
    var phone = $('#phone').val();
    var message = $('#message').val();
    if (fname.length == 0 && lname.length == 0 && email.length == 0 && phone.length == 0 && message.length == 0) {
    $('#fname').css('border', '2px solid #d50000');
    $('#message').css('border', '2px solid #d50000');
    $('#phone').css('border', '2px solid #d50000');
    $('#email').css('border', '2px solid #d50000');
    $('#lname').css('border', '2px solid #d50000');
    $('#form-err').text('Please fill out all fields');
    $('#perr').text('');
    return false;
    }

    else if (fname.length == 0) {
    $('#fname').css('border', '2px solid #d50000');
    $('#ferr').text('First Name is required');
    $('#message').css('border', '2px solid #ced4da');
    $('#phone').css('border', '1px solid #ced4da');
    $('#email').css('border', '1px solid #ced4da');
    $('#lname').css('border', '1px solid #ced4da');
    $('#form-err').text('');
    return false;
    }

    else if (lname.length == 0) {
    $('#lerr').text('Last Name is required');
    $('#lname').css('border', '2px solid #d50000');
    $('#fname').css('border', '1px solid #ced4da');
    $('#ferr').text('');
    return false;
    }
    else if (email.length == 0) {
    $('#eerr').text('Email is required');
    $('#email').css('border', '2px solid #d50000');
    $('#lname').css('border', '1px solid #ced4da');
    $('#fname').css('border', '1px solid #ced4da');
    $('#lerr').text('');
    $('#ferr').text('');
    return false;
    }
    else if (!validateEmail(email)) {
    $('#eerr').text('Invalid email Address');
    $('#email').css('border', '2px solid #d50000');
    $('#lname').css('border', '1px solid #ced4da');
    $('#fname').css('border', '1px solid #ced4da');
    $('#lerr').text('');
    $('#ferr').text('');
    return false;
    }
    else if (phone.length == 0) {
    $('#perr').text('Phone number is required');
    $('#phone').css('border', '2px solid #d50000');
    $('#email').css('border', '1px solid #ced4da');
    $('#lname').css('border', '1px solid #ced4da');
    $('#fname').css('border', '1px solid #ced4da');
    $('#eerr').text('');
    $('#lerr').text('');
    $('#ferr').text('');
    return false;
    }
    else if (isNaN(phone)) {
    $('#perr').text('Invalid Phone Number');
    $('#phone').css('border', '2px solid #d50000');
    $('#email').css('border', '1px solid #ced4da');
    $('#lname').css('border', '1px solid #ced4da');
    $('#fname').css('border', '1px solid #ced4da');
    $('#eerr').text('');
    $('#lerr').text('');
    $('#ferr').text('');
    return false;
    }
    else if (phone.length < 11) {
    $('#perr').text('Phone Number Should be minimum 10 digits');
    $('#phone').css('border', '2px solid #d50000');
    $('#email').css('border', '1px solid #ced4da');
    $('#lname').css('border', '1px solid #ced4da');
    $('#fname').css('border', '1px solid #ced4da');
    $('#eerr').text('');
    $('#lerr').text('');
    $('#ferr').text('');
    return false;
    }
    else if (message.length == 0) {
    $('#merr').text('Please type your Message');
    $('#message').css('border', '2px solid #d50000');
    $('#phone').css('border', '1px solid #ced4da');
    $('#email').css('border', '1px solid #ced4da');
    $('#lname').css('border', '1px solid #ced4da');
    $('#fname').css('border', '1px solid #ced4da');
    $('#perr').text('');
    $('#eerr').text('');
    $('#lerr').text('');
    $('#ferr').text('');
    return false;
    }
    else {
    $('#form-success').text('Message sent successfully');
    $('#form-success').show();
    $('#fname').css('border', '2px solid #ced4da');
    $('#message').css('border', '2px solid #ced4da');
    $('#phone').css('border', '2px solid #ced4da');
    $('#email').css('border', '2px solid #ced4da');
    $('#lname').css('border', '2px solid #ced4da');
    $('#merr').text('');
    $('#perr').text('');
    $('#eerr').text('');
    $('#lerr').text('');
    $('#ferr').text('');
    $('#form-success').css('background', '#a5d6a7');
    $('#form-err').text('');
    var fname = $('#fname').val('');
    var lname = $('#lname').val('');
    var email = $('#email').val('');
    var phone = $('#phone').val('');
    var message = $('#message').val('');
    $('#form-success').delay(8000).fadeOut(1000);
    return true;
    
    }
    });
    });
    function validateEmail(email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test(email);
    }