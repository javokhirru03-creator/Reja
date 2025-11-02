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

// class Shop {
//   constructor(non, lagmon, cola) {
//     this.products = {
//       non,
//       lagmon,
//       cola,
//     };
//   }

//   _getTime() {
//     const now = new Date();
//     const h = String(now.getHours()).padStart(2, "0");
//     const m = String(now.getMinutes()).padStart(2, "0");
//     return `${h}:${m}`;
//   }

//   qoldiq() {
//     const { non, lagmon, cola } = this.products;
//     const time = this._getTime();
//     return `Hozir ${time} da ${non}ta non, ${lagmon}ta lagmon va ${cola}ta cola mavjud!`;
//   }

//   sotish(product, amount) {
//     if (this.products[product] === undefined) {
//       return `Bunday mahsulot yo'q!`;
//     }
//     if (this.products[product] < amount) {
//       return `Yetarli ${product} yo'q!`;
//     }
//     this.products[product] -= amount;
//     return `Hozir ${this._getTime()} da ${amount}ta ${product} sotildi!`;
//   }

//   qabul(product, amount) {
//     if (this.products[product] === undefined) {
//       return `Bunday mahsulot yo'q!`;
//     }
//     this.products[product] += amount;
//     return `Hozir ${this._getTime()} da ${amount}ta ${product} qabul qilindi!`;
//   }
// }

// const shop = new Shop(4, 5, 2);

// console.log(shop.qoldiq());
// console.log(shop.sotish("non", 3));
// console.log(shop.qabul("cola", 4));
// console.log(shop.qoldiq());

////////////////////////////////////tack E
// function getReverse(string) {
//   return string.split("").reverse().join("");
// }

// console.log(getReverse("hello"));
// console.log(getReverse("world"));

// ...existing code...
// ...existing code...
// --- add these definitions before using `chars` ---
// ===== BRUTE FORCE LABORATORIYA (Node.js) =====
// 0 xan boshlab qadamma-qadam tushuntirish

// ===== BRUTE FORCE LABORATORIYA (Node.js) =====
// 0 xan boshlab qadamma-qadam tushuntirish

// ===== BRUTE FORCE LABORATORIYA (Node.js) =====
// 0 xan boshlab qadamma-qadam tushuntirish

console.log("╔════════════════════════════════════════════╗");
console.log("║   BRUTE FORCE PAROL QIDIRISH LABORATORIYA  ║");
console.log("║         Node.js - Qadam bo'yicha          ║");
console.log("╚════════════════════════════════════════════╝\n");

// ===== QADAM 0: O'ZGARUVCHILARNI E'LON QILISH =====
console.log("📍 QADAM 0: O'ZGARUVCHILARNI E'LON QILISH");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");

const targetPassword = "gs2y8y6k"; // Topishimiz kerak bo'lgan parol
const passwordLength = 8; // Parol uzunligi
let attempts = 0; // Qachon urinish soni

console.log("✓ targetPassword =", targetPassword);
console.log("✓ passwordLength =", passwordLength);
console.log("✓ attempts = 0 (boshlanish)\n");

// ===== QADAM 1: MASALANI TUZISH =====
console.log("📍 QADAM 1: MASALANI TUZISH");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");

console.log("Masala: 8 honali parol topish");
console.log("Shartlar:");
console.log("  - Raqamlar: 1, 2, 3, 4, 5, 6, 7, 8, 9 (9 ta)");
console.log("  - Harflar: a, b, c, ..., z (26 ta)");
console.log("  - Jami: 35 ta mumkin bo'lgan karakter\n");

// ===== QADAM 2: KARAKTERLAR MASSIVINI YARATISH =====
console.log("📍 QADAM 2: KARAKTERLAR MASSIVINI YARATISH");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");

const chars = [];

// Raqamlar
console.log("1️⃣  Raqamlar qo'shish (1-9):");
for (let i = 1; i <= 9; i++) {
  chars.push(i.toString());
}
console.log("   chars =", chars.join(", "), "\n");

// Harflar
console.log("2️⃣  Harflar qo'shish (a-z):");
const startLen = chars.length;
for (let i = 97; i <= 122; i++) {
  chars.push(String.fromCharCode(i));
}
console.log("   Qo'shilgan harflar:", chars.slice(startLen).join(", "), "\n");

console.log("✓ Yakuniy chars massiv:");
console.log("   ", chars.join(""), "\n");
console.log("✓ chars.length =", chars.length, "\n");

// ===== QADAM 3: KOMBINATSIYA SONI HISOBLASH =====
console.log("📍 QADAM 3: KOMBINATSIYA SONI HISOBLASH");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");

const totalCombinations = Math.pow(chars.length, passwordLength);
console.log("Formula: karakter_soni ^ parol_uzunligi");
console.log(
  `Hisob: ${
    chars.length
  } ^ ${passwordLength} = ${totalCombinations.toLocaleString()}\n`
);

// ===== QADAM 4: INDEKS → PAROL KONVERSIYA =====
console.log("📍 QADAM 4: INDEKS → PAROL KONVERSIYA FUNKSIYASI");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");

function indexToPassword(index, verbose = true) {
  let password = "";
  let tempIndex = index;

  if (verbose) {
    console.log(`\n  indexToPassword(${index}) çalışması:`);
    console.log(`  tempIndex = ${index}`);
  }

  for (let pos = 0; pos < passwordLength; pos++) {
    const charIndex = tempIndex % chars.length;
    const selectedChar = chars[charIndex];
    password = selectedChar + password;

    if (verbose) {
      console.log(
        `    Pozitsiya ${pos}: ${tempIndex} % ${chars.length} = ${charIndex} → chars[${charIndex}] = '${selectedChar}' → password = "${password}"`
      );
    }

    tempIndex = Math.floor(tempIndex / chars.length);

    if (verbose) {
      console.log(`    Keyingi tempIndex = ${tempIndex}`);
    }
  }

  if (verbose) {
    console.log(`  ✓ Natija: "${password}"\n`);
  }
  return password;
}

// ===== QADAM 5: MISOLLAR BILAN TUSHUNTIRISH =====
console.log("📍 QADAM 5: INDEKS → PAROL MISOLLARI");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");

const examples = [0, 1, 2, 34, 35, 1225];
for (let idx of examples) {
  const pwd = indexToPassword(idx);
}

// ===== QADAM 6: BRUTE FORCE LOOP MANTIGI =====
console.log("\n📍 QADAM 6: BRUTE FORCE LOOP MANTIGI");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");

console.log("Pseudo kod:");
console.log(`
for (let i = 0; i < ${totalCombinations.toLocaleString()}; i++) {
  const password = indexToPassword(i);
  attempts++;
  
  if (password === "${targetPassword}") {
    // TOPILDI!
    break;
  }
}
`);

// ===== QADAM 7: HAQIQIY BRUTE FORCE ISHGA TUSHIRISH =====
console.log("\n📍 QADAM 7: HAQIQIY BRUTE FORCE (OGOHLANTIRISH: JUDA SEKIN!)");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");

console.log(
  `⚠️  DIQQAT: ${totalCombinations.toLocaleString()} ta kombinatsiya tekshiriladi!`
);
console.log("⚠️  Bu JUDA uzoq vaqt oladi!\n");

const startTime = Date.now();
let found = false;

// Ogohlantirish: Bu juda uzoq davom etadi!
// Faqat birinchi 100,000 ta tekshiramiz (demo uchun)
const maxAttempts = 100000; // To'liq brute force uchun: totalCombinations

console.log(
  `🔍 Qidiruv boshlandi... (Maksimal ${maxAttempts.toLocaleString()} ta urinish)\n`
);

for (let i = 0; i < Math.min(maxAttempts, totalCombinations); i++) {
  const password = indexToPassword(i);
  attempts++;

  // Har 10,000 ta urinishda progress ko'rsatish
  if (attempts % 10000 === 0) {
    const elapsed = ((Date.now() - startTime) / 1000).toFixed(2);
    console.log(
      `⏳ ${attempts.toLocaleString()} ta tekshirildi... (${elapsed}s)`
    );
  }

  if (password === targetPassword) {
    found = true;
    const totalTime = ((Date.now() - startTime) / 1000).toFixed(2);

    console.log("\n" + "═".repeat(50));
    console.log("🎉 PAROL TOPILDI! 🎉");
    console.log("═".repeat(50));
    console.log(`✓ Parol: "${password}"`);
    console.log(`✓ Urinishlar soni: ${attempts.toLocaleString()}`);
    console.log(`✓ Vaqt: ${totalTime} sekund`);
    console.log(`✓ Tezlik: ${(attempts / totalTime).toFixed(0)} parol/sekund`);
    console.log("═".repeat(50) + "\n");
    break;
  }
}

if (!found) {
  console.log(
    `\n❌ Parol topilmadi (${attempts.toLocaleString()} ta urinishdan keyin)`
  );
  console.log(
    `💡 To'liq qidiruv uchun maxAttempts = totalCombinations qiling\n`
  );
}
