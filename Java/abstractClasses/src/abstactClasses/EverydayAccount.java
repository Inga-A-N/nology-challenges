package abstactClasses;

public class EverydayAccount extends Account{
    
    public EverydayAccount(double balance) {
	this.balance = balance;
    }

    @Override
    double getInterestRate() {
	// TODO Auto-generated method stub
	return 0.01;
    }

}
