/**
 * Created by vidit on 5/6/17.
 */
myApp.service('IdGenerator',function(){
    var id = 1;
    this.generateId = function(){
        return id++;
    }
    
});
