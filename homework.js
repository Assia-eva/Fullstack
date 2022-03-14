//remove ellement from the array 
var ass=[3,5,6,0,2,6,7],i=0,val=0,l,a=[],k=0;
    
l=ass.length;
while(i<l){
    if (ass[i] != val){ 
         a[k] = ass[i];
         i++;
         k++;
    }else {i++;}
}

console.log("l array apres la supprission d une valeur est :"+a);

//remove dublicates from storted array 
var line=[3,3,4,2,3,1,9,1],e=[];

var l=line.length;  

for (var i = 0; i < l; i++) {

    for (var j = i + 1; j < l;j++) {

       if (line[i] == line[j]) {

           for(var k=j;k<l;k++){
               line[k]=line[k+1];
               
            }  
           l--;   
       }
    }
}

console.log("l array apres la supprission des elements doubles est:");
for( var i=0;i<l;i++)
{
    console.log(line[i]);
}


