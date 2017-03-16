/**
 * Created by MaheN on 3/12/2017.
 */
var should= require('should'),
    sinon = require('sinon');
	describe('Book controller test' , function(){
    describe('post',function(){
        it('it should not allow empty on post',function(){
            var Book= function(book){
                this.save= function(){}
            };
            var req= {
                body:{
                    author:'mahen'
                }
            };
            var res={
                status:sinon.spy(),
                send:sinon.spy()
            }
            var bookController = require('../Controllers/bookController')(Book);
            bookController.post(req,res);
            res.status.calledWith(400).should.equal(true,'Bad status' + res.status.args[0]);
            res.send.calledWith('title is require').should.equal(true);
        })

    })
})