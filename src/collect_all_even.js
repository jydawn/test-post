
function collect_same_elements(collection_a, object_b) {
 //在此处写代码
  var result=[],temp1=[],temp2=[];
    for(var i=0;i<collection_a.length;i++){
        for(var key in collection_a[i]){
            temp1.push(collection_a[i][key]);
        }
    }

    for(var j in object_b){
        temp2.push(object_b[j]);
    }
    for(var k = 0; k < temp1.length; k++){
        for(var t = 0; t < temp2.length; t++){
            if(temp1[k] == temp2[t] ){
                result.push( temp2[t]);
                break;
            }
        }
    }
    return result;
}

module.exports = collect_same_elements;
