package data;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import entities.Action;

@Transactional
@Repository
public class ActionDAOImpl implements ActionDAO{
	
	
	@PersistenceContext
	private EntityManager em;
	
	@Override
	public List<Action> index() {
		String query = "Select a from Action a";
		return em.createQuery(query, Action.class).getResultList();
	}

	
	@Override
	public Action show(int id) {
		return em.find(Action.class, id);
	}

	@Override
	public Action create(Action action) {
		em.persist(action);
		em.flush();
		return action;
	}

	@Override
	public Action update(int id, Action action) {
		Action a = em.find(Action.class, id);
		a.setActivity(action.getActivity());
		a.setMinutes(action.getMinutes());
		a.setDate(action.getDate());
		return a;
	}

	@Override
	public boolean destroy(int id) {
		Action a = em.find(Action.class, id);
		
		if(em.find(Action.class, id) == null) {
			return false;
		} else {
			em.remove(a);
			return true;
		}
	}

}
