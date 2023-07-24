package interfaces;

public class Cat implements MakeSound, DoesEat {
    @Override
    public String sound() {
	return "Meow";
    }

    @Override
    public String eat() {
	// TODO Auto-generated method stub
	return "Fish";
    }

}
