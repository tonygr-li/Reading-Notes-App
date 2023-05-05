package dev.book.books;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookService {
    @Autowired
    private BookRepository bookRepository;
    public List<Book> allBooks() {
        return bookRepository.findAll();
    }

    public Optional<Book> singleBook(String isbnId) {
        return bookRepository.findBookByIsbnId(isbnId);
    }
}
