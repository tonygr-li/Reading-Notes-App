package dev.book.books;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

@Service
public class ReviewService {
    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private MongoTemplate mongoTemplate;

    public Review createReview(String reviewBody, String isbnId) {
        Review review = reviewRepository.insert(new Review(reviewBody));
        mongoTemplate.update(Book.class)
                .matching(Criteria.where("isbnId").is(isbnId))
                .apply(new Update().push("reviewIds").value(review))
                .first();
        return review;
    }
}
