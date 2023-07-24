package testing_challenge;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.stream.Collectors;

public class Main {

    public static void main(String[] args) {
	// TODO Auto-generated method stub
//	Create a class Book
//	each book should have a title, pages, author, yearPublished
//	a constructor that will take in all those properties
//	In Main create 5 books and store in an ArrayList
//	using streams, create:
//	a list of titles converted to uppercase
//	a list of books that were published after year 2000
//	int that will store the value of all pages of the books combined
//	find the book with the highest amount of pages (try and use reduce or look for other methods)

	Book book1 = new Book("The Greate Alone", 557, "Kristin Hanna", 2020);
	Book book2 = new Book("The Four Winds", 600, "Kristin Hanna", 2020);
	Book book3 = new Book("The Nightingale", 458, "Kristin Hanna", 2020);
	Book book4 = new Book("Where The Crowdads Sing", 450, "Delia Owens", 2018);
	Book book5 = new Book("Madam Bovary", 770, "Flober", 1908);
	
	ArrayList<Book> allBooks = new ArrayList<>(Arrays.asList(book1, book2, book3, book4, book5));
	
	ArrayList<String> upperCaseTitles = allBooks.stream()
		.map((book)-> book.getTitle().toUpperCase()).collect(Collectors.toCollection(ArrayList::new));
	
	ArrayList<Book> after2000 = allBooks.stream()
		.filter((book)-> book.getYearPublished() > 2000).collect(Collectors.toCollection(ArrayList::new));
	
	int allPages = allBooks.stream().reduce(0,(prev, curr)-> prev + curr.getPages(), (Integer::sum));
	
	Book maxPages = allBooks.stream().max((b1,b2)-> Integer.compare(b1.getPages(), b2.getPages())).orElse(book1)
;
	maxPages.printBookDetails();
	
	
	
    }
    
    
    
    

}
