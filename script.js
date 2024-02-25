const calculateTemp = ()=>{
    const numberPut = document.getElementById('temp').value;
   // console.log(numberPut);

   const tempSelected = document.getElementById('temp_diff');
   const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

   const celToFah = (cel) => {
    let farengieht = Math.round((cel * 9/5) + 32);
    return farengieht;
   } 

   const FahTocel = (fah) => {
    let celcious = Math.round((fah - 32) * 5/9);
    return celcious;
   } 

   let result;
    

   if(valueTemp === 'cel')
   {
    result = celToFah(numberPut);
    document.getElementById('resultContainer').innerHTML= `=${result}farengieht`;

   }else{
    result = FahTocel(numberPut);
    document.getElementById('resultContainer').innerHTML= `=${result}celcious`;

   }


}