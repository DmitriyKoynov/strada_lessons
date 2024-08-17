let a = 3;

for (; a < 5; a++) {
    console.log(a);
    if (true) continue;
    console.log('Сообщение, которое мы не заслужили');
}
