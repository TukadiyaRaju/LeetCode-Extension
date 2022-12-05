// console.log("You are in");

var submitBtn = document.getElementsByClassName("submit__2ISl css-ieo3pr")[0];

submitBtn.onclick = () => {
  console.log("submitting");

  let interval = setInterval(() => {
    const result = document.getElementsByClassName("result__23wN")[0];
    if (result != undefined) {
      const err_result = document.getElementsByClassName("error__2Ft1")[0];
      const succ_result = document.getElementsByClassName("success__3Ai7")[0];
      const comp_err_result = document.getElementsByClassName("error__10k9")[0];
      if (err_result) {
        var failedMusic = new Audio(
          "https://mobcup.net/va/99fc3715843c701adf56609e8bd2a76fc"
        );
        failedMusic.play();
        console.log("try again");
      }
      if (succ_result) {
        console.log("jiyo re Bahubali");
        var winMusic = new Audio(
          "https://mobcup.net/va/6655616cf4cb0b6739c1da09dda78b03f"
        );
        winMusic.play();
      }
      clearInterval(interval);
    } else if (document.getElementsByClassName("result__3g2i")[0]) {
      clearInterval(interval);
      var tryAgainMuisc = new Audio("https://mobcup.net/va/SSUSt25EvGz");
      tryAgainMuisc.play();
      console.log("Check the code");
    } else {
      console.log("Please wait...");
    }
  }, 500);
};
