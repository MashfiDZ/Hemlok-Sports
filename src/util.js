export default{
  formatCurrency: function(num){
    return '৳' + Number(num.toFixed(0)).toLocaleString() + ' ';
  }
}