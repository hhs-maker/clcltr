function btnclick(a){
    var getInp=document.getElementById('inp')
    getInp.value +=a
}
function eqBtn(){
    var getInp=document.getElementById('inp')
    getInp.value=eval(getInp.value)
}
function clrbtn(){
    var getInp=document.getElementById('inp')
    getInp.value=''
}