function osszesOszto(szam) {
    var osztok = [];
    for (var i = 1; i <= szam; i++) {
        if (szam % i === 0) {
            osztok.push(i);
        }
    }
    return osztok;
}
function parosDarab(szamTomb) {
    var parosokSzama = szamTomb.filter(function (szam) { return szam % 2 === 0; }).length;
    return parosokSzama;
}
function fuggvenyhivasPalindrom(fuggveny) {
    var eredmenySzoveg = fuggveny();
    var tisztitottSzoveg = eredmenySzoveg.replace(/\s/g, '').toLowerCase();
    var forditottSzoveg = tisztitottSzoveg.split('').reverse().join('');
    return tisztitottSzoveg === forditottSzoveg;
}
