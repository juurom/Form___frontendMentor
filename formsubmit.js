$("#userform").on("keyup", function(key){
    if (key.key=="enter"){
        $("#submit").click();
    }
});

$("#submit").click(function(event){
    console.log("clicked");
    event.preventDefault();

    if(($(".firstname").val())==""){
        $(".firstname_error").text("이름을 입력해주세요.");
    }
    else if(($(".firstname").val())!=""){
        $(".firstname_error").text("");
    }

    if(($(".lastname").val())==""){
        $(".lastname_error").text("성을 입력해주세요.");
    }
    else if(($(".lastname").val())!=""){
        $(".lastname_error").text("");
    }

    var regExp= /^[-!#$%&'*+./0-9=?A-Z^_a-z{|}~]+@[-!#$%&'*+/0-9=?A-Z^_a-z{|}~]+.[-!#$%&'*+./0-9=?A-Z^_a-z{|}~]+$/;

    if(($(".email").val())==""){
        $(".email_error").text("이메일을 입력해주세요.");
    }
    else if(!regExp.test($(".email").val())){
        $(".email_error").text("이메일 형식을 확인해주세요."); 
    }
    else if(($(".email").val())!=""){
        $(".email_error").text("");
    }

    if(($(".password").val())==""){
        $(".password_error").text("비밀번호를 입력해주세요.");
    }
    else if(($(".password").val())!=""){
        $(".password_error").text("");
    }
})