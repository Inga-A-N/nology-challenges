package interfaces;

public class HealthPortion implements ApplyEffect{

    @Override
    public void apply(Player player) {
	
	player.setHealth(player.health+20);
	
    }

}
