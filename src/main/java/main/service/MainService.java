package main.service;

import java.util.List;
import java.util.Map;

import main.bean.CartDTO;
import main.bean.MainDTO;
import main.bean.UserDTO;

public interface MainService {

	List<MainDTO> mainList();

	List<MainDTO> product_card();
	
	MainDTO product_detail(String seq);

	List<MainDTO> list(Map<Object, Object> map);

	List<MainDTO> oneday_product();

	String product_number();

	UserDTO login(Map map);

	UserDTO check_login(Map map);

	List<CartDTO> cart_list(Map map);

	public void cart_delete(Map map);

	public void cart_num_edit(Map map);

	CartDTO check_cart(Map map);

	public void cart_insert(Map map);
}
