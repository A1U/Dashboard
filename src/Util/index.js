

export const  checkObject=(data)=>{
    if(data)
    return Object.keys(data)?.length>0
  return false

}
const formatExpirationDate = (expirationDate) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(expirationDate).toLocaleDateString('en-US', options);
  };
export const calculateExpirationDate = (inputDate,subscriptionMonths) => {
    console.log('inputDate',inputDate,subscriptionMonths)
    const dateObject = new Date(inputDate);
  console.log(dateObject)
   
    dateObject.setMonth(dateObject.getMonth() + subscriptionMonths);
    console.log(dateObject)
    console.log(Math.floor(subscriptionMonths / 12))
    console.log('dateObject.getFullYear()',dateObject.getFullYear())
  
   
    dateObject.setFullYear(dateObject.getFullYear() + Math.floor(Number(subscriptionMonths) / 12));
  
    console.log(dateObject)
   
    const formattedDate = dateObject.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });

  return formattedDate;
  };