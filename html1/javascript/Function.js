function show(){
    var myButton=document.getElementById('eventContent2');
    var button=document.getElementById('eventContent1');
    button.style.display='none';
    myButton.style.display='block';
    
}
function show1(){
    var myButton1=document.getElementById('eventContent2');
    var button=document.getElementById('eventContent1');
        myButton1.style.display='none';
        button.style.display='block';
}
while(true){
    Repeat();
}
   
const myTimeout = setInterval(myTime,1000);
function myTime(){
        
    var myButton1=document.getElementById('eventContent2');
    var button=document.getElementById('eventContent1');
            if(myButton1.style.display=='block'){
                show();            
            }
            else if(myButton1.style.display=='none')
            {
                    show1();
            }
} 
    

