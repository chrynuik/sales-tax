var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

//take in company data
////loop over company data
//calculate total sales for a company
//calculate total tax for a company
//make an object of total sales and total tax and set to the return object

//function to get total taxes from sales
function taxTotal(taxRate, sales){
 // console.log(taxRate, "tax rate");
 // console.log(sales, "sales");
  return taxRate * sales;

}

function calculateSalesTax(salesData, taxRates) {
  // Implement your code here
  var salesTaxData = {};
    //console.log(salesData);

  salesData.forEach(function(company, ind) {
   // console.log(ind, "this is the ind");
    var totalSales = salesSum(company.sales);
    if (!salesTaxData[company.name]) {
      salesTaxData[company.name] = {
        "totalSales": totalSales,
        "totalTaxes": taxTotal(salesTaxRates[company.province], totalSales)};
    } else {
      salesTaxData[company.name].totalSales += totalSales;
      salesTaxData[company.name].totalTaxes += taxTotal(salesTaxRates[company.province], totalSales);
    }

   });

  console.log(salesTaxData);

}

function salesSum(salesArray) {
  var salesSum = 0;
  for (var j = 0; j < salesArray.length; j++) {
    salesSum += salesArray[j];
  }
  return salesSum;
}
//totalSales();

function calculateTax() {


  // for (var p = 0; p < taxProfit.length; p++) {
  //   taxProfit += p;

  // }
  // console.log(taxProfit.length);

}


// calculateTax();

var results = calculateSalesTax(companySalesData, salesTaxRates);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/