// problem 4 (basic )
function findAddress(obj) {
    let assinment = { street: 10, house: '15A', society: "Earth Perfect" }
    let parina = Object.values(assinment);
    console.log(parina);
    let khan = { street: 10, lal: '__', society: 'Earth Perfect' }
    let mama = Object.values(khan);
    console.log(mama);
    let last = { street: 10, pseed: "__", jongkarmama: '__' }
    let fainal = Object.values(last);
    console.log(fainal);
}
findAddress();