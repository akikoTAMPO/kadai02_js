// alert(1111);

var random = 0; //partnerの手
const result = document.querySelector(".result");

//delayでテキスト出したかった、、、
// func = async () => {
//     await log(3);
//     await log(2);
//     await log(1);
// };

// log = (num) => {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log(num);
//             resolve();
//         }, 1000);
//     });
// }

// func();


// 結果出す処理 ここから▼ //
$(".btn_gu").on('click', function () {
    // ボタンクリック時の色　▼ //
    this.style.backgroundColor = "#333";
    result.style.backgroundColor = "#616161";
    $(".partner_speech").html("🐨最初はグー、じゃんけんぽん");
    $(".user_speech").html("🐼最初はグー、じゃんけんぽん");
    // 相手の手を表示する処理　ここから▼ //
    random = Math.floor(Math.random() * 3);
    console.log(random, "ランダムな数値");
   
    if (random === 0) {
        console.log("グー", "相手の手");
        $(".partner").html("✊");
    } else if (random === 1) {
        console.log("チョキ", "相手の手");
        $(".partner").html("✌");
    } else if (random === 2) {
        console.log("パー", "相手の手");
        $(".partner").html("✋");
    }
    // 相手の手を表示する処理　ここまで▲ //

    console.log("グー", "ユーザーの手");
    $(".user").html("✊");
    if (random === 0) { 
        console.log("あいこ", "結果");
        $(".result__text").html("あいこ");
    } else if (random === 1) {
        console.log("勝ち", "結果");
        $(".result__text").html("勝ち🎉");
    } else if (random === 2) {
        console.log("負け", "結果");
        $(".result__text").html("負け");
    }
})

$(".btn_choki").on('click', function () {
    // ボタンクリック時の色　▼ //
    this.style.backgroundColor = "#333";
    result.style.backgroundColor = "#616161";
    $(".partner_speech").html("🐨最初はグー、じゃんけんぽん");
    $(".user_speech").html("🐼最初はグー、じゃんけんぽん");

    // 相手の手を表示する処理　ここから▼ //
    random = Math.floor(Math.random() * 3);
    console.log(random, "ランダムな数値");
    if (random === 0) {
        console.log("グー", "相手の手");
        $(".partner").html("✊");
    } else if (random === 1) {
        console.log("チョキ", "相手の手");
        $(".partner").html("✌");
    } else if (random === 2) {
        console.log("パー", "相手の手");
        $(".partner").html("✋");
    }
    // 相手の手を表示する処理　ここまで▲ //

    console.log("チョキ", "ユーザーの手");
    $(".user").html("✌");
    if (random === 0) {
        console.log("負け", "結果");
        $(".result__text").html("負け");
    } else if (random === 1) {
        console.log("あいこ", "結果");
        $(".result__text").html("あいこ");
    } else if (random === 2) {
        console.log("勝ち", "結果");
        $(".result__text").html("勝ち🎉");
    }
})

$(".btn_pa").on('click', function () {
    // ボタンクリック時の色　▼ //
    this.style.backgroundColor = "#333";
    result.style.backgroundColor = "#616161";
    $(".partner_speech").html("🐨最初はグー、じゃんけんぽん");
    $(".user_speech").html("🐼最初はグー、じゃんけんぽん");

    // 相手の手を表示する処理　ここから▼ //
    random = Math.floor(Math.random() * 3);
    console.log(random, "ランダムな数値");
    if (random === 0) {
        console.log("グー", "相手の手");
        $(".partner").html("✊");
    } else if (random === 1) {
        console.log("チョキ", "相手の手");
        $(".partner").html("✌");
    } else if (random === 2) {
        console.log("パー", "相手の手");
        $(".partner").html("✋");
    }
    // 相手の手を表示する処理　ここまで▲ //

    console.log("パー", "ユーザーの手");
    $(".user").html("✋");
    if (random === 0) {
        console.log("勝ち", "結果");
        $(".result__text").html("勝ち🎉");
    } else if (random === 1) {
        console.log("負け", "結果");
        $(".result__text").html("負け");
    } else if (random === 2) {
        console.log("あいこ", "結果");
        $(".result__text").html("あいこ");
    }
})

// 結果出す処理 ここまで▲ //



