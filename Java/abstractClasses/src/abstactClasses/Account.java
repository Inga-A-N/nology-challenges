package abstactClasses;

abstract class Account {
    double balance;
    
    //the interest rate will be different for every type of account
    //that's why we add an abstract method, so each class can implement it differently

    abstract double getInterestRate();
    
//    In an abstract class we can have methods with implementation
    
    
 //This method below uses abstract method in its calculations   
    public double getBalanceAfterYears(int years) {
	for(int i=0; i<years; i++) {
	    balance+= balance*this.getInterestRate();
	}
	return this.balance;
    }
    
    public void printBalance() {
	System.out.println("The balance is "+this.balance + "dollars");
    }
}
