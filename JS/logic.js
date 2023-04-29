
$(document).ready(function () {
    console.log("ready")
    $("#start").on(startgame)
})
function startgame()
{
    console.log("I am on");
    $(".btn").prop('disabled', false);
    $(".btn").html("");
    document.getElementById("gamestarted").textContent="Game Started"
}
let turn=true;
let flag=0;
let count=0;

function func0(num)
{
    if(turn===true)
    {
        $("#zeroth").html("O");
        turn=false;
    }
    else
    {
        $("#zeroth").html("X");
        turn=true;
    }
    let zero=$("#zeroth").text();
    let one=$("#first").text();
    let two=$("#second").text();
    let three=$("#third").text();
    let four=$("#fourth").text();
    let six=$("#sixth").text();
    let eigth=$("#eigth").text();
    count++;
    if(count==9)
    {
        (document).getElementById("gamestarted").textContent="Match Draw!!";
        count=0;
    }
    if(zero===one && one===two)
    {
        flag=1;
        $(".btn").prop('disabled', true);
        if(one==="X") (document).getElementById("gamestarted").textContent="Player X won";
        else (document).getElementById("gamestrated").textContent="Player O won";
        count=0;
    }
    if(zero===three && three===six)
    {
        flag=1;
        $(".btn").prop('disabled', true);
        if(three==="X") (document).getElementById("gamestarted").textContent="Player X won";
        else (document).getElementById("gamestarted").textContent="Player O won";
        count=0;
    }
    if(zero===four && four===eigth)
    {
        flag=1;
        $(".btn").prop('disabled', true);
        if(zero==="X") (document).getElementById("gamestarted").textContent="Player X won";
        else (document).getElementById("gamestarted").textContent="Player O won";
        count=0;
    }
    $("#zeroth").prop('disabled', true);
}

function func1(num)
{
    if(turn===true)
    {
        $("#first").html("O");
        turn=false;
    }
    else
    {
        $("#first").html("X");
        turn=true;
    }
    let zero=$("#zeroth").text();
    let one=$("#first").text();
    let two=$("#second").text();
    let four=$("#fourth").text();
    let seven=$("#seventh").text();
    count++;
    if(count==9)
    {
        (document).getElementById("gamestarted").textContent="Match Draw!!";
        count=0;
    }
    if(zero===one && one===two)
    {
        flag=1;
        $(".btn").prop('disabled', true);
        if(zero==="X") (document).getElementById("gamestarted").textContent="Player X won";
        else (document).getElementById("gamestarted").textContent="Player O won";
        count=0;
    }
    if(one===four && four===seven)
    {
        flag=1;
        $(".btn").prop('disabled', true);
        if(one==="X") (document).getElementById("gamestarted").textContent="Player X won";
        else (document).getElementById("gamestarted").textContent="Player O won";
        count=0;
    }
    $("#first").prop('disabled', true);
}

function func2(num)
{
    if(turn===true)
    {
        $("#second").html("O");
        turn=false;
    }
    else
    {
        $("#second").html("X");
        turn=true;
    }
    let zero=$("#zeroth").text();
    let one=$("#first").text();
    let two=$("#second").text();
    let four=$("#fourth").text();
    let five=$("#fifth").text();
    let six=$("#sixth").text();
    let eigth=$("#eigth").text();
    count++;
    if(count==9)
    {
        (document).getElementById("gamestarted").textContent="Match Draw!!";
        count=0;
    }
    if(zero===one && one===two)
    {
        $(".btn").prop('disabled', true);
        if(two==="X") (document).getElementById("gamestarted").textContent="Player X won";
        else (document).getElementById("gamestarted").textContent="Player O won";
        count=0;
    }
    if(two===five && five===eigth)
    {
        $(".btn").prop('disabled', true);
        if(two==="X") (document).getElementById("gamestarted").textContent="Player X won";
        else (document).getElementById("gamestarted").textContent="Player O won";
        count=0;
    }
    if(two===four && four===six)
    {
        $(".btn").prop('disabled', true);
        if(two==="X") (document).getElementById("gamestarted").textContent="Player X won";
        else (document).getElementById("gamestarted").textContent="Player O won";
        count=0;
    }
    $("#second").prop('disabled', true);
}

function func3(num)
{
    if(turn===true)
    {
        $("#third").html("O");
        turn=false;
    }
    else
    {
        $("#third").html("X");
        turn=true;
    }
    let zero=$("#zeroth").text();
    let three=$("#third").text();
    let six=$("#sixth").text();
    let four=$("#fourth").text();
    let five=$("#fifth").text();
    count++;
    if(count==9)
    {
        (document).getElementById("gamestarted").textContent="Match Draw!!";
        count=0;
    }
    if(zero===three && three===six)
    {
        flag=1;
        $(".btn").prop('disabled', true);
        if(five==="X") (document).getElementById("gamestarted").textContent="Player X won";
        else (document).getElementById("gamestarted").textContent="Player O won";
        count=0;
    }
    if(three===four && four===five)
    {
        flag=1;
        $(".btn").prop('disabled', true);
        if(five==="X") (document).getElementById("gamestarted").textContent="Player X won";
        else (document).getElementById("gamestarted").textContent="Player O won";
        count=0;
    }
    $("#third").prop('disabled', true);
}

function func4(num)
{
    if(turn===true)
    {
        $("#fourth").html("O");
        turn=false;
    }
    else
    {
        $("#fourth").html("X");
        turn=true;
    }
    let one=$("#first").text();
    let three=$("#third").text();
    let four=$("#fourth").text();
    let five=$("#fifth").text();
    let six=$("#sixth").text();
    let two=$("#second").text();
    let seven=$("#seventh").text();
    count++;
    if(count==9)
    {
        (document).getElementById("gamestarted").textContent="Match Draw!!";
        count=0;
    }
    if(one===four && four===seven)
    {
        flag=1;
        $(".btn").prop('disabled', true);
        if(four==="X") (document).getElementById("gamestarted").textContent="Player X won";
        else (document).getElementById("gamestarted").textContent="Player O won";
        count=0;
    }
    if(two===four && four===six)
    {
        flag=1;
        $(".btn").prop('disabled', true);
        if(four==="X") (document).getElementById("gamestarted").textContent="Player X won";
        else (document).getElementById("gamestarted").textContent="Player O won";
        count=0;
    }
    if(three===four && four===five)
    {
        flag=1;
        $(".btn").prop('disabled', true);
        if(four==="X") (document).getElementById("gamestarted").textContent="Player X won";
        else (document).getElementById("gamestarted").textContent="Player O won";
        count=0;
    }
    $("#fourth").prop('disabled', true);
}

function func5(num)
{
    if(turn===true)
    {
        $("#fifth").html("O");
        turn=false;
    }
    else
    {
        $("#fifth").html("X");
        turn=true;
    }
    let two=$("#second").text();
    let three=$("#third").text();
    let four=$("#fourth").text();
    let five=$("#fifth").text();
    let eigth=$("#eigth").text();
    count++;
    if(count==9)
    {
        (document).getElementById("gamestarted").textContent="Match Draw!!";
        count=0;
    }
    if(two===five && five===eigth)
    {
        flag=1;
        $(".btn").prop('disabled', true);
        if(five==="X") (document).getElementById("gamestarted").textContent="Player X won";
        else (document).getElementById("gamestarted").textContent="Player O won";
        count=0;
    }
    if(three===four && four===five)
    {
        flag=1;
        $(".btn").prop('disabled', true);
        if(five==="X") (document).getElementById("gamestarted").textContent="Player X won";
        else (document).getElementById("gamestarted").textContent="Player O won";
        count=0;
    }
    $("#fifth").prop('disabled', true);
}

function func6(num)
{
    if(turn===true)
    {
        $("#sixth").html("O");
        turn=false;
    }
    else
    {
        $("#sixth").html("X");
        turn=true;
    }
    let zero=$("#zeroth").text();
    let two=$("#second").text();
    let three=$("#third").text();
    let four=$("#fourth").text();
    let six=$("#sixth").text();
    let eigth=$("#eigth").text();
    let seven=$("#seventh").text();
    count++;
    if(count==9)
    {
        (document).getElementById("gamestarted").textContent="Match Draw!!";
        count=0;
    }
    if(two===four && four===six)
    {
        flag=1;
        $(".btn").prop('disabled', true);
        if(six==="X") (document).getElementById("gamestarted").textContent="Player X won";
        else (document).getElementById("gamestarted").textContent="Player O won";
        count=0;
    }
    if(zero===three && three===six)
    {
        flag=1;
        $(".btn").prop('disabled', true);
        if(six==="X") (document).getElementById("gamestarted").textContent="Player X won";
        else (document).getElementById("gamestarted").textContent="Player O won";
        count=0;
    }
    if(six===seven && seven===eigth)
    {
        flag=1;
        $(".btn").prop('disabled', true);
        if(six==="X") (document).getElementById("gamestarted").textContent="Player X won";
        else (document).getElementById("gamestarted").textContent="Player O won";
        count=0;
    }
    $("#sixth").prop('disabled', true);
}

function func7(num)
{
    if(turn===true)
    {
        $("#seventh").html("O");
        turn=false;
    }
    else
    {
        $("#seventh").html("X");
        turn=true;
    }
    let one=$("#first").text();
    let four=$("#fourth").text();
    let six=$("#sixth").text();
    let eigth=$("#eigth").text();
    let seven=$("#seventh").text();
    count++;
    if(count==9)
    {
        (document).getElementById("gamestarted").textContent="Match Draw!!";
        count=0;
    }
    if(one===four && four===seven)
    {
        flag=1;
        $(".btn").prop('disabled', true);
        if(seven==="X") (document).getElementById("gamestarted").textContent="Player X won";
        else (document).getElementById("gamestarted").textContent="Player O won";
        count=0;
    }
    if(six===seven && seven===eigth)
    {
        flag=1;
        $(".btn").prop('disabled', true);
        if(seven==="X") (document).getElementById("gamestarted").textContent="Player X won";
        else (document).getElementById("gamestarted").textContent="Player O won";
        count=0;
    }
    $("#seventh").prop('disabled', true);
}

function func8(num)
{
    if(turn===true)
    {
        $("#eigth").html("O");
        turn=false;
    }
    else
    {
        $("#eigth").html("X");
        turn=true;
    }
    let zero=$("#zeroth").text();
    let six=$("#sixth").text();
    let eigth=$("#eigth").text();
    let seven=$("#seventh").text();
    let two=$("#second").text();
    let four=$("#fourth").text();
    let five=$("#fifth").text();
    count++;
    if(count==9)
    {
        (document).getElementById("gamestarted").textContent="Match Draw!!";
        count=0;
    }
    if(two===five && five===eigth)
    {
        flag=1;
        $(".btn").prop('disabled', true);
        if(two==="X") (document).getElementById("gamestarted").textContent="Player X won";
        else (document).getElementById("gamestarted").textContent="Player O won";
        count=0;
    }
    if(zero===four && four===eigth)
    {
        flag=1;
        $(".btn").prop('disabled', true);
        if(four==="X") (document).getElementById("gamestarted").textContent="Player X won";
        else (document).getElementById("gamestarted").textContent="Player O won";
        count=0;
    }
    if(six===seven && seven===eigth)
    {
        flag=1;
        $(".btn").prop('disabled', true);
        if(six==="X")(document).getElementById("gamestarted").textContent="Player X won";
        else (document).getElementById("gamestarted").textContent="Player O won";
        count=0;
    }
    $("#eigth").prop('disabled', true);
}

