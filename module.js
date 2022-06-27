let DivGnb=(
    function(){
        function DivGnb(super_id){
            console.log(super_id)
            this.init(super_id)
        }
        DivGnb.prototype.init = function(super_id){
            console.log(super_id)
            let id = super_id
            console.log(id)
            if(id ==="" || id === null){return}
            let temp = document.createElement('div')
            console.log(temp)
            id.appendChild(temp);
         }
         return DivGnb
    }
)();