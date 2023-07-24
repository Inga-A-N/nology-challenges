package absractClasses_challenge;

abstract class Container {
    
    
    abstract double getVolume();
    
    public double teaspoonCount(){
	return (Math.round((getVolume()/150)*100.0))/100.0;
    }

}
