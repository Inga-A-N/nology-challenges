package inheritance;

	public class Track {
	    String title;
	    float length;
	    String extension;
	    public Track(String title, float length, String extension) {
		this.title = title;
		this.length = length;
		this.extension = extension;
    
	    }
	    public String getFileName(){
		return this.title + "." + this.extension;
	    }
	    public void printTrackInfo() {
		System.out.printf("%s.%s - %f\n", this.title, this.extension, this.length);
}

}
