
function osszesOszto(szam: number): number[] {
    
    let osztok: number[] = [];

    
    for (let i = 1; i <= szam; i++) {
        if (szam % i === 0) {
            osztok.push(i);
        }
    }

    return osztok;
}

function parosDarab(szamTomb: number[]): number {
    
    const parosokSzama = szamTomb.filter(szam => szam % 2 === 0).length;

    return parosokSzama;
}

function fuggvenyhivasPalindrom(fuggveny: () => string): boolean {
    
    const eredmenySzoveg = fuggveny();

    
    const tisztitottSzoveg = eredmenySzoveg.replace(/\s/g, '').toLowerCase();

    
    const forditottSzoveg = tisztitottSzoveg.split('').reverse().join('');
    return tisztitottSzoveg === forditottSzoveg;
}