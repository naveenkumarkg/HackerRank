var n =5;
var arr = [1,1,2,3,3];
var numberOfPairs = 0;

function pairOfSocks(arr,n){

    if(!arr || arr.length !== n) return 0;
    let newpair = new Map();

    for(let i=0;i<arr.length;i++){
        let sock = arr[i];

        if(newpair.has(sock)){
            let count = newpair.get(sock) +1;
            newpair.set(sock,count);

        }else{
            newpair.set(sock, 1);
        }

    }
    console.log(newpair)

    for(let type of newpair.keys()){
        let pair = newpair.get(type);
        numberOfPairs += Math.floor(pair/2);
    }

    return numberOfPairs;
}

console.log(pairOfSocks(arr,n));