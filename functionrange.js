function range(first,last){
if(first>last){
    var arr = new Array(first-last+1)
    for(var i=0;i<arr.length;i++,first--){
        arr[i] = first;
    }
    return arr;
}
else{
    var arro =new Array(last-first+1);
    for(var j=0;j<arro.length;j++,last--){
        arro[j] = last;
    }
    return arro;
}


}