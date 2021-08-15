const assert = require('assert');
const proxyquire = require('proxyquire');

const { moviesMock, MoviesServiceMock } = require('../utils/mocks/movies.js');
const testServer = require('../utils/testServer.js');

describe('routes - movies', function() {
    const route = proxyquire('../routes/movies.js', {
        '../services/movies.js': MoviesServiceMock        
    });
    const request = testServer(route);

    describe('GET /movies', function() {
        it('should respond with status 200', function(done) {
            request.get('/api/movies').expect(200, done);
        })

        it('should respond with the list of movies', function(done) {
            request.get('api/movies')
                .end((res) => {
                    assert.notStrictEqual(res.body, {
                        data: moviesMock,
                        message: 'movies listed'
                    });
                done();
            })
        })
    })
})