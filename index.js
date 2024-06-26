let initPoints = 20;
let rand;
setRand();
console.log(rand);
$(".error-message").hide();

let flag = true; //for key press event
// key press event for enter key

$(document).on("keypress", function (e) {
  if (e.which == 13 && flag == true) {
    triggered();
  }
});

// onclick event

$(".chk").on("click", function () {
  triggered();
});

$(".again").on("click", () => {
  initPoints = 20;
  $(".error-message").hide();
  $(".crntScore").text(initPoints);
  $("body").removeClass("bgGreen");
  setRand();
  resultChng("Start guessing..");
  setInpValNull();
  console.log(rand);
  showBtn();
  $(".num").prop("disabled", false);
  $(".num").focus();
  $(".mysteryNum").text("?");
});

// function modules

function resultChng(txt) {
  $(".result").text(txt);
}

function reducePoint() {
  $(".crntScore").text(--initPoints);
}

function setRand() {
  rand = Math.floor(Math.random() * 20) + 1;
}

function setInpValNull() {
  $(".num").val(null);
}

function triggered() {
  let userVal = $(".num").val();
  if (userVal == rand) {
    resultChng("🎉 Correct Number");
    let hs = Number($(".highScore").text());
    let crntScore = Number($(".crntScore").text());
    $("body").addClass("bgGreen");
    hideBtn();
    $(".num").prop("disabled", true);
    if (hs < crntScore) {
      $(".highScore").text(crntScore);
    }
    $(".mysteryNum").text(rand);
  } else if (userVal > rand) {
    resultChng("📈 Too high!!");
    reducePoint();
  } else {
    resultChng("📉 Too low!!");
    reducePoint();
  }
  setInpValNull();
}

function hideBtn() {
  $(".chk").hide();
}

function showBtn() {
  $(".chk").show();
}

$(".num").on("input", function () {
  console.log("changed");
  let userVal = $(".num").val();
  if (userVal > 20 || userVal == 0) {
    hideBtn();
    $(".error-message").show();
    flag = false;
  } else {
    showBtn();
    $(".error-message").hide();
    flag = true;
  }
});
