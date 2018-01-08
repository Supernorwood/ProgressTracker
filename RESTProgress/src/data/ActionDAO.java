package data;

import java.util.List;

import entities.Action;

public interface ActionDAO {
	
	public List<Action> index();
	public Action show(int id);
	public Action create(Action action);
	public Action update(int id, Action action);
	public Boolean destroy(int id);
	

}
