export function merge (collection_1: number[] , collection_2: number[] ) :number[] {
    var merged: number[] = new Array(collection_1.length + collection_2.length);
    var i = 0 ; var j = 0; var k = 0;
    while( i < collection_1.length || j < collection_2.length ){
        if(collection_1.length == 0){
            return collection_2;
        }
        if(collection_2.length == 0){
            return collection_1;
        }
        if(i == collection_1.length){
            merged[k] = collection_2[j];
            j++;k++;
        }
        else if(j == collection_2.length){
            merged[k] = collection_1[i];
            i++;k++;
        }
        if( i < collection_1.length && collection_1[i] < collection_2[j] ){
            merged[k] = collection_1[i];
            i++;k++;
        }
        else if(j < collection_2.length && collection_1[i] >= collection_2[j]){
            merged[k] = collection_2[j];
            j++;k++;
        }
        // console.log(merged);
    }
    return merged;
};
