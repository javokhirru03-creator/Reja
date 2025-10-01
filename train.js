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

// ///////////////////////////task-B
// function countDigits(str) {
//   let count = 0;
//   for (let a of str) {
//     if (a >= "0" && a <= "9") {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countDigits("ad2a54y79wet0sfgb9"));

////////////tack c

// function checkContent(str1, str2) {
//   if (str1.length !== str2.length) return false;

//   return str1.split("").sort().join("") === str2.split("").sort().join("");
// }

// console.log(checkContent("mitgroup", "gmtiprou")); // true
// console.log(checkContent("Nick", "cNki")); // true

//////////////////////////////////task D

class Shop {
  constructor(non, lagmon, cola) {
    this.products = {
      non,
      lagmon,
      cola,
    };
  }

  _getTime() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, "0");
    const m = String(now.getMinutes()).padStart(2, "0");
    return `${h}:${m}`;
  }

  qoldiq() {
    const { non, lagmon, cola } = this.products;
    const time = this._getTime();
    return `Hozir ${time} da ${non}ta non, ${lagmon}ta lagmon va ${cola}ta cola mavjud!`;
  }

  sotish(product, amount) {
    if (this.products[product] === undefined) {
      return `Bunday mahsulot yo'q!`;
    }
    if (this.products[product] < amount) {
      return `Yetarli ${product} yo'q!`;
    }
    this.products[product] -= amount;
    return `Hozir ${this._getTime()} da ${amount}ta ${product} sotildi!`;
  }

  qabul(product, amount) {
    if (this.products[product] === undefined) {
      return `Bunday mahsulot yo'q!`;
    }
    this.products[product] += amount;
    return `Hozir ${this._getTime()} da ${amount}ta ${product} qabul qilindi!`;
  }
}

const shop = new Shop(4, 5, 2);

console.log(shop.qoldiq());
console.log(shop.sotish("non", 3));
console.log(shop.qabul("cola", 4));
console.log(shop.qoldiq());
