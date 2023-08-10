// problem number 3
function findAddress(obj) {
    let frist1 = 2;
    let second2 = 3;
    console.log([frist1, second2]);
    const temp = frist1;
    frist1 = second2;
    second2 = temp;
    console.log([frist1, second2])
    let frist3 = 4;
    let second4 = 2;
    console.log([frist3, second4]);
    frist3, second4 = second4, frist3;
    console.log([frist3, second4]);
    let quantity = [4, 4];
    console.log(quantity, 'equal');
    let frist5 = 1;
    let second6 = 2;
    console.log([frist5, second6]);
    const temp1 = frist5;
    frist5 = second6;
    second6 = temp1;
    console.log([frist5, second6])
    let number = [4, -2];
    console.log(number, 'Invalid Input');
}
findAddress();