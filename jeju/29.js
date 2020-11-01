// * 대문자만 지나가세요

const upper = 'A';
const lower = 'b'

const func = (ipt) => {
    if(ipt === ipt.toUpperCase()){
        console.log('yes')
    }else{
        console.log('no')
    }
}

func(lower);