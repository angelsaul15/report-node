const { createInvoice } = require("./createInvoice.js");

const invoice = {
  shipping: {
    name: "Angel Saul Jimenez",
    address: "28 de Abril",
    city: "San Miguel de Allende",
    state: "GTO",
    country: "MEX",
    postal_code: 37750
  },
  items: [
    {
      item: "Playera",
      description: "Barcelona 2019-2020",
      quantity: 2,
      amount: 200000
    },
    {
      item: "Tennis",
      description: "Tennis Mercurial #10",
      quantity: 1,
      amount: 300000
    },
    {
      item: "Chamara Nike",
      description: "Nike Sport",
      quantity: 1,
      amount: 500000
    },
    {
      item: "Pants",
      description: "Nike Sport",
      quantity: 4,
      amount: 80000
    }
  ],
  subtotal: 1500000,
  paid: 0,
  invoice_nr: 1234
};

createInvoice(invoice, "Store.pdf");
