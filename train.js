// const list = [
//     "Yahshi talaba boling", // 0-20
//     "Togri boshliq tanlang va koproq hato qiling", // 20-30
//     "Uzingnizga ishlashni boshang", // 30-40
//     "Siz kuchli bolgan narsalarni qiling", // 40-50
//     "Yoshlarga investitsiya qiling", // 50-60
//     "Endi dam oling", // 60+
// ];

// function maslahatBerish(yosh, callback) {
//     if (typeof yosh !== "number") callback("raqam kiriting", null);
//     else if (yosh <= 20) callback(null, list[0]);
//     else if (yosh > 20 && yosh <= 30) callback(null, list[1]);
//     else if (yosh > 30 && yosh <= 40) callback(null, list[2]);
//     else if (yosh > 40 && yosh <= 50) callback(null, list[3]);
//     else if (yosh > 50 && yosh <= 60) callback(null, list[4]);
//     else {
//         setTimeout(function () {
//             callback(null, list[5]);
//         }, 5000);
//     }
// }

// console.log("passed here 1111");

// maslahatBerish(65, (err, data) => {
//     if (err) console.log("Error:", err);
//     else {
//         console.log("Javob:", data);
//     }
// });

// console.log("passed here 2222");

//-------------------------------------------------------------------------------------------------------------------------------------------------------


// const list = [
//     "Yahshi talaba boling", // 0-20
//     "Togri boshliq tanlang va koproq hato qiling", // 20-30
//     "Uzingnizga ishlashni boshang", // 30-40
//     "Siz kuchli bolgan narsalarni qiling", // 40-50
//     "Yoshlarga investitsiya qiling", // 50-60
//     "Endi dam oling", // 60+
// ];

// async function maslahatBerish(yosh) {
//     if (typeof yosh !== "number") throw new Error ("raqam kiriting");
//     else if (yosh <= 20) return list[0];
//     else if (yosh > 20 && yosh <= 30) return list[1];
//     else if (yosh > 30 && yosh <= 40) return list[2];
//     else if (yosh > 40 && yosh <= 50) return list[3];
//     else if (yosh > 50 && yosh <= 60) return list[4];
//     else {
//         return new Promise((resolve, reject) => {
//             setTimeout(function () {
//                 resolve(list[5]);
//             }, 5000);
//         });
//     }
// }

// console.log("passed here 1111");

// maslahatBerish(25)
// .then((data) => {
//     console.log("Javob:", data);
// })
// .catch((err) => {
//     console.log("Error:", err);
// });

// console.log("passed here 2222");


// async function run() {
//     let javob = await maslahatBerish(100);
//     console.log("Javob:", javob);
//     javob = await maslahatBerish(25);
//     console.log("Javob:", javob);   
//     javob = await maslahatBerish(10);
//     console.log("Javob:", javob);   
// }
// run();
// function countLetter(a, word) {
//   let count = 0;
//   for (let i = 0; i < word.length; i++) {
//     if (word[i] === a) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countLetter("e", "engineer"));
// console.log(countLetter("e", "education"));

//  ⭐️ Synchronous function vs Asynchronous function
// Asynchronous: CALLBACK

// DEFINE
// function qoldiqliBolish(a, b, callback) {
//   if (b === 0) {
//     callback("Mahraj nolga teng bolmaydi", null);
//   } else {
//     const c = a % b;
//     callback(null, c, true);
//   }
// }

// // CALL
// qoldiqliBolish(40, 3, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else {
//     console.log("data:", data);
//     console.log("MATIQLAR ...");
//   }
// });
























///////////////////////////task-B
function countDigits(str) {
  let count = 0;
  for (let a of str) {
    if (a >= "0" && a <= "9") {
      count++;
    }
  }
  return count;
}

console.log(countDigits("ad2a54y79wet0sfgb9")); 
