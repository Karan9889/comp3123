module.exports = {
    
    multiplyTwoNumbers : function() {
        try{

        
        if(Number.isInteger(this.x)||(Number.isInteger(this.y))){
            return this.x * this.y;
        }
        else
           {
             throw console.error();
             
         
          }
        
        }catch (ex) {
           
          }
        
    
       
    },

    evenDoubler : function(x) {

        try{

        
            if(Number.isInteger(this.x)){
                if(this.x%2===0)
                {
                    return this.x * this.x;
                }
                else
                {
                    return 0;
                }
            }
            else
               {
                 throw console.error();
                 
             
              }
            
            }catch (ex) {
               
              }
      
    },


    
};

