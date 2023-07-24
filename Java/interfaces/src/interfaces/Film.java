package interfaces;

public class Film implements IMedia{
    
    String title;
    short yearReleased;
    String[] characters;
    
    public Film(String title, short yearReleased, String[] characters) {
	this.title = title;
	this.yearReleased = yearReleased;
	this.characters = characters;
    }
    

    @Override
    public String getInfo() {
	// TODO Auto-generated method stub
	return String.format("The movie title %s, it was released in %d", this.title, this.yearReleased);
    }

    @Override
    public void getCharacters() {
	// TODO Auto-generated method stub
	System.out.println("The characters in the movie are: ");
	for(int i = 0; i< characters.length; i++) {
	    System.out.println(characters[i]+ ", ");
	}
	
    }

}
