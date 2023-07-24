package interfaces;

public class Dog implements MakeSound, DoesEat{

    @Override
    public String sound() {
	// TODO Auto-generated method stub
	return "Woof";
    }

    @Override
    public String eat() {
	// TODO Auto-generated method stub
	return "Meat";
    }

}
