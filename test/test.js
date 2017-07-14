var request = require("request"), //mocha test library for test cases - tasted all endpoint of test.
    assert = require('assert'),
    helloWorld = require("../server.js"),
    base_url = "http://localhost:8080/";

  describe("Hello World Server", function() {
  describe("GET /", function() {
    it("returns status code 200", function(done) {
      request.get(base_url, function(error, response, body) {
        //expect(response.statusCode).toBe(200);
        assert.equal(200, response.statusCode);
        done();
      });
    });
  });
});