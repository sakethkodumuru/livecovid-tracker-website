var parser =(data,type)=>{
    let i;
    let str="";
    for(i=1;i<=38;i++){
        if(type="display"|| data['statewise'][i-1]['state'].includes(type) ){
            
            str+=`<tr class="table-primary">
            <td>${data["statewise"][i-1]["state"]}</td>
            <td>${data["statewise"][i-1]["active"]}</td> 
            <td>${data["statewise"][i-1]["confirmed"]}</td> 
            <td>${data["statewise"][i-1]["deaths"]}</td>
            <td>${data["statewise"][i-1]["recovered"]}</td>
            </tr>`
            

        }


    }
    return  str;
}

var dispState= async()=>{
    let apidata= await fetch("https://api.covid19india.org/data.json");
    let data=await apidata.json();
    console.log(data);
    let htmlElements=parser(data,"display");
    document.getElementById("FillTable").innerHTML=htmlElements;

}

var searchState= async ()=>{
    let searchValue=document.getElementById("search").value;
    console.log(searchValue);
    let apidata= await fetch("https://api.covid19india.org/data.json");
    let data=await apidata.json();
    
    let htmlElements=dummy(data,searchValue);
    document.getElementById("FillTable").innerHTML=htmlElements;


}
var dummy =(data,type)=>{
  let i;
    let str="";
    for(i=1;i<=38;i++){
        if(data['statewise'][i-1]['state'].toLowerCase().includes(type.toLowerCase()) ){
           
            console.log(type);
            str+=`<tr class="table-primary">
            <td>${data["statewise"][i-1].state}</td>
            <td>${data["statewise"][i-1].active}</td> 
            <td>${data["statewise"][i-1].confirmed}</td> 
            <td>${data["statewise"][i-1].deaths}</td>
            <td>${data["statewise"][i-1].recovered}</td>
            </tr>`
            

        }


    }
    return  str;
}
