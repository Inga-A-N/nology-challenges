package interfaces;

public class Main {

    public static void main(String[] args) {
	// TODO Auto-generated method stub

//	Cat cat = new Cat();
//	Dog dog = new Dog();
//	System.out.println(cat.sound());
//	System.out.println(dog.sound());
//	
//	AnimalUtils.printAnimalInfo(dog);
//	AnimalUtils.printAnimalInfo(cat);
//	
//	MakeSound[] animals = {cat, dog};// using as a type
//	for(int j= 0; j<animals.length; j++) {
//	    System.out.println(animals[j].sound());
//	}
//	
//	String[] bookCharacters = {"Raskolnikov", "Sonechka", "Marmeladov"};
//	
//	Book book = new Book(12, 534, "Crime and Punishment", bookCharacters);
//	
//	System.out.println(book.getInfo());
//	book.getCharacters();
//	String[] hpCharacters = {"Ron", "Harry"};
//	
//	Film film = new Film("Prisoner of Azkaban", (short)2004, hpCharacters);
//	System.out.println(film.getInfo());
//	film.getCharacters();
//	
//	IMedia[] booksAndFilms = {book, film};
//	
//	for(int i = 0; i<booksAndFilms.length; i++) {
//	    System.out.println(booksAndFilms[i].getInfo());
//	}
	
	Car car = new Car(15, "m/s");
	System.out.printf("Initial car speed is: %d %s\n",car.getSpeed(), car.units);
	car.setSpeed(25);
	System.out.printf("New car speed is: %d %s\n", car.getSpeed(), car.units);
	System.out.printf("Decreased car speed is: %d %s\n",car.decreaseSpeed(), car.units);
	
	Bike bike = new Bike(20);
	System.out.printf("Initial bike speed is: %d %s\n", bike.getSpeed(), bike.units);
	bike.setSpeed(25);
	System.out.printf("New bike speed: %d %s.\n",bike.getSpeed(), bike.units);
	System.out.printf("Decreased bike speed is: %d %s\n",bike.decreaseSpeed(), bike.units);
	
	Player newPlayer = new Player();
	System.out.println(newPlayer.health);
	Arrow arrow = new Arrow();
	arrow.apply(newPlayer);
	System.out.println(newPlayer.health);
	HealthPortion healthPortion = new HealthPortion();
	healthPortion.apply(newPlayer);
	System.out.println(newPlayer.health);
    }

}
