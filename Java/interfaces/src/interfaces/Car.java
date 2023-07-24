package interfaces;

public class Car implements Vehicle{
//    Create a Car class
//  Class must store it’s speed in m/s
//  Implement the Vehicle interface
    int speed;
    String units;
    
    
    public Car(int speed, String units) {
	this.speed = speed;
	this.units = units;
	
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
	
	return this.speed = speed-1;
	
    }


}
