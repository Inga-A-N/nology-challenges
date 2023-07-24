package generics;

import java.util.ArrayList;

public class TopThreeList<T> {
    
    ArrayList<T> favThings = new ArrayList<T>();
    
    public TopThreeList(T first, T second, T third) {
	favThings.add(first);
	favThings.add(second);
	favThings.add(third);
    }

}
