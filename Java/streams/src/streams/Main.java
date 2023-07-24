package streams;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import java.util.Arrays;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class Main {

    public static void main(String[] args) {
	// TODO Auto-generated method stub
	
	Integer[] numbers = {1, 2, 3, 4, 5};
	
	//Want to double the numbers
	Integer[]doubled = new Integer[numbers.length];
	
	for (int i = 0; i < numbers.length; i++) {
	    doubled[i] = numbers[i] * 2;
	}
	
	Stream<Integer> numberStream = Stream.of(numbers);//converting array of numbers to a stream of numbers
	
	// we can pass a function by reference like this:
	//(ClassName::MethodName)
	Stream<Integer> doubledNumberStream = numberStream.map(MathHelper::doubleNumber);
	//.map method does not terminate the stream, it returns a stream
	
	//to convert a stream back to an array
	Integer[] doubledWithStream = doubledNumberStream.toArray(Integer[]::new);
	
	System.out.println(Arrays.toString(doubledWithStream));
	//Stream doesn't modify original array
	System.out.println(Arrays.toString(numbers));
	
	//lambda function (num -> num*2) similar to arrow function in js
	Integer[] dNums = Stream.of(numbers).map(num -> num*2).toArray(Integer[]::new);
	
	//filter
	Integer[] moreThanThree = Stream.of(numbers).filter(num -> num > 3).toArray(Integer[]::new); 
	System.out.println(Arrays.toString(moreThanThree));
	
	//store doubled numbers that are greater than 5
	Integer[] doubledAndMoreThanFive = Stream.of(numbers).map(MathHelper::doubleNumber).filter(num -> num > 5).toArray(Integer[]::new);
	System.out.println(Arrays.toString(doubledAndMoreThanFive));
	
	//ArrayLists to a stream convert
	
	ArrayList<String> names = new ArrayList<String>(Arrays
		.asList("Alex", "andy", "John", "Betty", "Anna","Mona", "Ross"));
	
	System.out.println(names);
	
	//With loop
	ArrayList<String> startsWithA = new ArrayList<>();
	for(String name:names) {
	    if(name.toLowerCase().charAt(0)=='a') {
		startsWithA.add(name);
	    }
	    
	}
	System.out.println(startsWithA);
	
	//With stream
	
	Stream<String> fromArrayList = names.stream();
	
	ArrayList<String> startsWithAWithStream = fromArrayList.filter(num -> num.toLowerCase().charAt(0)=='a').collect(Collectors.toCollection(ArrayList::new));
	
	System.out.println(startsWithAWithStream);
	
	//first name that starts with a
	
	startsWithA.stream().filter(n -> n.toLowerCase().charAt(0)== 'a').findFirst();    

    Optional<String> firstAName = startsWithA.stream().filter(n -> n.toLowerCase().charAt(0)== 'w').findFirst();
    
    if (firstAName.isPresent()) {
	System.out.println(firstAName.get());
    }else {
	System.out.println("Guest");
    }
    
    
    
    Consultant kate = new Consultant("Kate", "Melbourne");
    Consultant john = new Consultant("John", "Sydney");
    Consultant alice = new Consultant("Alice", "Brisbain");
    
    Optional<Consultant> maybeConsultant =  Consultant.findById(26);
   
    if(maybeConsultant.isPresent()) {
	System.out.println(maybeConsultant.get().getName() + " found consultant");
} else {
	System.out.println("Consultant not found");
}

kate.increaseSalary(5000.00);
alice.increaseSalary(2000.00);

System.out.println(Consultant.totalSalaryCost());

System.out.println(Consultant.calculateAverage());

Consultant.getConsultants().stream().forEach(Consultant::increaseBy5k);

Consultant.getConsultants().stream()
.forEach(c -> System.out.println(c.toString()));

//reduce
// reduce with two parameters

ArrayList<Integer> numbers2 = new ArrayList<>(Arrays.asList(2, 3, 4));

int sumOfNumbers2 =numbers2.stream().reduce(0, (prev, curr)->prev+curr);
System.out.println(sumOfNumbers2);

ArrayList<String> greetings = new ArrayList<>(Arrays.asList("Hello", "Hi", "Good morning"));
String allGreetings = greetings.stream().reduce("", (prev, curr)-> {
	if(prev.equals("")) {
	    return curr;
	}
	return prev + ", " + curr;
	});
System.out.println(allGreetings);

// Sum the length of all the greetings will need a third parameter because of parallel operations
//(1. When we want a different data type back from the one that is used in the function
//ex in this case we need an integer back, but using array of strings in the function
//Combiner function as the third parameter
int lengthOfGreetings = greetings.stream().reduce(0, (prev, curr) -> prev + curr.length(), Integer::sum);
int lengthOfGreetings2 = greetings.stream().reduce(0, (prev, curr) -> prev + curr.length(), (a,b) -> a+b);
int lengthOfGreetings3 = greetings.stream().reduce(0, (prev, curr) -> prev + curr.length(), (a, b)-> Integer.sum(a,b));

System.out.println(lengthOfGreetings);
System.out.println(lengthOfGreetings2);
System.out.println(lengthOfGreetings3);


//with map
int lengthWithMap = greetings.stream().map((g)-> g.length()).reduce(0, (prev, curr)-> prev+curr);
System.out.println(lengthWithMap);

Optional<Integer> maybeSum = numbers2.stream().reduce((prev, curr) -> prev + curr);

ArrayList<Integer> nums3 = new ArrayList<>();

Optional<Integer> maybeSum2 = nums3.stream().reduce(Integer::sum);

System.out.println(maybeSum.get());
System.out.println(maybeSum.isPresent());
System.out.println(maybeSum2.isPresent());
//reduce with 1 argument -> returns an empty Optional for an empty stream
}   
}
