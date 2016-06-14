
function collect_same_elements(collection_a, object_b) {
 //在此处写代码
  var result = [], temp= [];
    for(var i=0;i<collection_a.length;i++){
        for(var key in collection_a[i]){
            temp.push(collection_a[i][key]);
        }
    }

    for(var j in object_b){
        var n =object_b[j];
    }
    for(var k = 0; k < temp.length; k++){
        for(var t = 0; t < n.length; t++){
            if(temp[k] == n[t] ){
                result.push( n[t]);
                break;
            }
        }
    }
    return temp;
}

module.exports = collect_same_elements;
