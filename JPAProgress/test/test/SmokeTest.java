package test;

import static org.junit.Assert.*;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import entities.Action;


public class SmokeTest {
    
    private EntityManagerFactory emf;
    private EntityManager em;
    private Action progress;

    @Before
    public void set_up() {
        this.emf = Persistence.createEntityManagerFactory("progress");
        this.em = emf.createEntityManager();
        progress = em.find(Action.class, 1);
    }
    
    @After
    public void tear_down() { 
        this.em.close();
        this.emf.close();
    }
    
    @Test
    public void smoke_test() {
        boolean test = true;
        assertEquals(true, test);
    }
    

    @Test
    public void test_progress_mapping() {
        assertEquals("code", progress.getActivity());
    }
}