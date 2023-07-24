package interfaces;

public class Book implements IMedia{
    
    int chapters;
    int pages;
    String name;
    String[] characters;
    
    public Book(int chapters, int pages, String name, String[] characters) {
	this.chapters = chapters;
	this.pages = pages;
	this.name = name;
	this.characters = characters;
    }

    @Override
    public String getInfo() {
	// TODO Auto-generated method stub
	return String.format("The name of the book is %s, it has %d", this.name, this.pages);
    }

    @Override
    public void getCharacters() {
	// TODO Auto-generated method stub
	System.out.println("The characters in the book are: ");
	for(int i = 0; i< characters.length; i++) {
	    System.out.println(characters[i]+ ", ");
	}
    }

}
