const limit = 50;
const friends = 5;
const weight = [5,3,5,3,2];

const func = (limit, friends, weight) => {
    let ans = 0;
    for(let i =0; i<friends; i++){
        if(limit > weight[i]){
            limit = limit - weight[i];
            ans++
        }else{
            break;
        }
    }
    return ans;
}
a= func(limit,friends,weight)

console.log(a)