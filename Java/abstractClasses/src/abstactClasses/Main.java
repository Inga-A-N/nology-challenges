package abstactClasses;

public class Main {

    public static void main(String[] args) {
	// TODO Auto-generated method stub

	EverydayAccount everydayAccount = new EverydayAccount(1000);
	SavingsAccount savingsAccount = new SavingsAccount(2000);
	
	everydayAccount.printBalance();
	savingsAccount.printBalance();
	
	System.out.println(everydayAccount.getBalanceAfterYears(2));
	System.out.println(savingsAccount.getBalanceAfterYears(2));
    }

}
