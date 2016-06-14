
function collect_same_elements(collection_a, object_b) {
 //在此处写代码
  var result = [], temp= [];
	 var i,j,k,t,key;
    for( i=0;j<collection_a.length;j++){
        for( key in collection_a[i]){
            temp.push(collection_a[i][key]);
        }
    }

    for(j in object_b){
        var n =object_b[j];
    }
    for( k = 0; k < temp.length; k++){
        for( t = 0; t < n.length; t++){
            if(temp[k] == n[t] ){
                result.push( n[t]);
                break;
            }
        }
    }
}

module.exports = collect_same_elements;
