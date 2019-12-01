const expect = require("chai").expect;
const request = require("request");

it("It should connect to the products api", function(done) {
  request("http://localhost:3000/api/products", function(err, response, body) {
    let newData = JSON.parse(body);
    expect(newData).to.be.an("array");
    done();
  });
});

it("It should connect to the users api", function(done) {
  request("http://localhost:3000/api/users", function(err, response, body) {
    let newData = JSON.parse(body);
    expect(newData).to.be.an("array");
    done();
  });
});

it("It should connect to the product filter api", function(done) {
  request(
    "http://localhost:3000/api/productfilter/select * from products where id_products=9",
    function(err, response, body) {
      let newData = JSON.parse(body);
      expect(newData).to.be.an("object");
      done();
    }
  );
});

it("it should redirect to the index HTML", function(done) {
  request("http://localhost:3000/", function(err, response, body) {
    expect(response.statusCode).to.equal(200);
    done();
  });
});
