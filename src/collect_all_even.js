
function collect_same_elements(collection_a, object_b) {
 //在此处写代码
 var d = [];
    var c = [];

    var ci=0;
    var ni=0;

    for(var j=0;j<collection_a.length;j++){
        for(var key in collection_a[j]){
            var m = collection_a[j][key];
            c.push(m);
        }
    }

    for(var i in object_b){
        var n =object_b[i];
    }
    for(var k = 0; k < c.length; k++){
        for(var g = 0; g < n.length; g++){
            if(c[k] == n[g] ){
                d.push( n[g]);
                break;
            }
        }
    }

    return d;
}

module.exports = collect_same_elements;
