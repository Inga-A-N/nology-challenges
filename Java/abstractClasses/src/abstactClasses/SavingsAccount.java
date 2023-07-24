package abstactClasses;

public class SavingsAccount extends Account{
    
    public SavingsAccount(double balance) {
	this.balance = balance;
    }

    @Override
    double getInterestRate() {
	// TODO Auto-generated method stub
	return 0.05;
    }

}
