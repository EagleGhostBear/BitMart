package main.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import main.bean.CartDTO;
import main.bean.MainDTO;
import main.bean.UserDTO;
import main.dao.MainDAO;

@Service
public class MainServiceImpl implements MainService {
	@Autowired
	private MainDAO mainDAO;
	
	@Override
	public List<MainDTO> mainList() {
		
		return mainDAO.mainList();
	}
	
	@Override
	public List<MainDTO> product_card() {
		
		return mainDAO.product_card();
	}
	
	@Override
	public MainDTO product_detail(String seq) {
		
		return mainDAO.product_detail(seq);
	}
	
	@Override
	public List<MainDTO> list(Map<Object, Object> map) {
		
		return mainDAO.list(map);
	}
	
	@Override
	public List<MainDTO> oneday_product() {
		
		return mainDAO.oneday_product();
	}
	
	@Override
	public String product_number() {
		
		return mainDAO.product_number();
	}
	
	@Override
	public UserDTO login(Map map) {
		
		return mainDAO.login(map);
	}
	
	@Override
	public UserDTO check_login(Map map) {
		
		return mainDAO.check_login(map);
	}
	
	@Override
	public List<CartDTO> cart_list(Map map) {
		
		return mainDAO.cart_list(map);
	}
	
	@Override
	public void cart_delete(Map map) {
		
		mainDAO.cart_delete(map);
	}
	
	@Override
	public void cart_num_edit(Map map) {
		
		mainDAO.cart_num_edit(map);
	}
	
	@Override
	public CartDTO check_cart(Map map) {
		
		return mainDAO.check_cart(map);
	}
	
	@Override
	public void cart_insert(Map map) {
		
		mainDAO.cart_insert(map);
	}
}
