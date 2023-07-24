package interfaces;

public class Bike implements Vehicle {
//    Create a Bike class
//  Class must store it’s speed in km/h
//  Implement the Vehicle interface
    
    int speed;
    String units;
    
    public Bike(int speed) {
	units = "k/h";
	this.speed = speed;
    }
    public void setSpeed(int newSpeed) {
        this.speed = newSpeed;
    }

@Override
public int getSpeed() {
    // TODO Auto-generated method stub
    return speed;
}

@Override
public int decreaseSpeed() {
    // TODO Auto-generated method stub
    return this.speed = speed-5;
    
}
    

}
