/**
 * Created by MaheN on 3/12/2017.
 */
var bookController = function(Book){

    var post = function(req,res){
        var book= new Book(req.body);
        if(!req.body.title){
            res.status(400);
            res.send('Title is required');
        }
        else
        {
            book.save();
            res.status(201);
            res.send(book);
        }

        // book.save(function(err){
        //     if(err){
        //         res.status(500).send(error);
        //     }
        //     else
        //     {
        //         res.json(book);
        //     }
        // });
    }
    var get = function(req,res) {
        var query={};
        if(req.query.genre){
            query.genre= req.query.genre;
        }
        Book.find(query,function(error,book){
            if(error){
                res.status(500).send(error);
            }
            else{
                res.json(book);
            }
        });
    }
    return{
        post:post,
        get:get
    }
}
module.exports = bookController;