console.log("Fungsi Pertama");

const add = (a, b) => a + b;
console.log(add(1, 2));

const subtract = (a, b) => a - b;
console.log(subtract(5, 2));

const multiply = (a, b) => a * b;
console.log(multiply(3, 2));

// ! SYNTAX PENTING UNTUK DIGUNAKAN DI TERMINAL :
// Node (nama file)
// git diff = digunakan untuk mencari perbedaan dari versi sebelumnya
// git status = untuk melihat status git saat ini itu seperti apa
// git add . (jika tidak menggunakan titik (.), bisa langsung menyertakan nama file)
// git commit -m ("") = digunakan untuk meng--commit file yg sudah ada di staged changes
// git log = untuk melihat perjalanan history
// git restore = untuk membatalkan perubahan

// git restore -S (nama file) = untuk mengembalikan file dari staged changes ke working directory
// git reset = untuk mengembalikan file dari staged changes ke working directory secara keselirihan
// git reset --hard (nomer commit) = untuk kembali ke commit sebelumnya

// git checkout -b (nama branch), terus untuk kembali ke branch master, bisa ketikkan "git checkout master "
// git checkout (nama branch)
// git merge (nama branch) = untuk menggabungkan branch
// git revert (nomer commit) = digunakan untuk me-revisi commit sebelumnya tanpa merusak commit setelahnya
// git push origin master = digunakan untuk kembali ke branch master (branch yang utama)
// ? Belajar GIT

console.log(add(5, 5));

const mathsin = (Number) => math.sin(number);
console.log(mathsin(10));
