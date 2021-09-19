
'use strict';





document.addEventListener('DOMContentLoaded', () => {


    let    beikaLength = document.querySelector('.beika_length'),
           beikaWidth = document.querySelector('.beika_width'),
           clothWidth = document.querySelector('.cloth_width'),
           clothLength = document.querySelector('.cloth_length'),
           beikaLength1 = document.querySelector('.beika_length1'),
           beikaWidth1 = document.querySelector('.beika_width1'),
           clothWidth1 = document.querySelector('.cloth_width1'),
           clothLength1 = document.querySelector('.cloth_length1'),
           count,
           count1,
           button = document.querySelector ('.btn'),
           button1 = document.querySelector ('.btn1');

          
          
          button.addEventListener('click',() => {

              beikaWidth= document.querySelector('.beika_width').value;
              clothWidth = document.querySelector('.cloth_width').value;
              clothLength = document.querySelector('.cloth_length').value;
              count = ((clothLength*(clothWidth/beikaWidth))*1.41)/1000;
              beikaLength.textContent=count.toFixed(3);

              if ( clothWidth===null||clothWidth===''||clothWidth==isNaN &&beikaWidth===null||beikaWidth===''||beikaWidth===isNaN )
              {  beikaLength.textContent ='нет данных';}
              else{ 
                beikaLength.textContent=count.toFixed(3);
               }
              
          });

          
              
              button1.addEventListener('click',() => {

                beikaWidth1= document.querySelector('.beika_width1').value;
                clothWidth1 = document.querySelector('.cloth_width1').value;
                beikaLength1 = document.querySelector('.beika_length1').value;
                count1 =  ((beikaLength1/(clothWidth1/beikaWidth1))/1.41)*1;
               clothLength1.textContent=count1.toFixed(1);

                if(beikaWidth1===null||beikaWidth1===''||beikaWidth1===isNaN &&clothWidth1===null||clothWidth1===''||clothWidth1===isNaN )
                {  clothLength1.textContent ='нет данных';} else {
                    clothLength1.textContent=count1.toFixed(1);
                }
        
                

              });

             

              



    });
              
             
          
          
          
       







