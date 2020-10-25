function solution(clothes) {
    let ans = 0;
    let clothesKind = [];
    let len;
    let kind;
    let clothCombination = {}
    
    for(let i=0; i < clothes.length; i++){
        len = clothes[i].length -1;
        kind = clothes[i][len];
        if(kind in clothCombination){
            clothCombination[kind] += len;
        }else{
            clothCombination[kind] = len;            
        }
    }
    const combiArr = Object.values(clothCombination);
    console.log(combiArr)
    let mul =  combiArr.reduce(function(product, value) { return product * value; });
    let plus =  combiArr.reduce(function(product, value) { return product + value; });
    console.log(plus)
    // console.log(mul)
    if(combiArr.length !== 1){
        return mul + plus
    }else{
        return plus
    }
}