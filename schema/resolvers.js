const { PersonList, BookList } = require("../FakeData");
const _ = require("lodash");

const resolvers = {
    Query: {
        persons: ()=>{
            //make API call to DB here 
            return PersonList;
        },
        person: (parent, args)=>{
            const id = args.id;
            const user = _.find(PersonList,{id: Number(id)})
            return user;
        },
        books: ()=>{
            return BookList;
        },
        book: (parent, args)=>{
            const name = args.name;
            const book = _.find(BookList,{name: name});
            return book; 
        }
    },
    Person: {
        favouriteBooks: ()=>{
            return _.filter(BookList, (book)=>{
                return book.id>2 && book.id<5})
        }
    },

    Mutation: {
        createBook: (parent, args)=>{
            const book = args.input;
            const lastId = BookList[BookList.length-1].id;
            book.id = lastId+1;
            BookList.push(book);
            return book;
        },
        updateBook: (parent, args)=>{
            const {id, updatedBook} = args.input;
            let bookUpdated;
            BookList.forEach((book)=>{
                if(Number(book.id) === Number(id)){
                    book.name = updatedBook;
                    bookUpdated = book;
                }
            });
            return bookUpdated;
        },
        deleteBook: (parent, args)=>{
            const id = args.id;
            _.remove(BookList, (book)=> Number(book.id) === Number(id));
            return null;
        }
    }
}

module.exports = {resolvers};