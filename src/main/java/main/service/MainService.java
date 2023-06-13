package main.service;

import java.util.List;
import java.util.Map;

import main.bean.MainDTO;

public interface MainService {

	List<MainDTO> mainList();

	List<MainDTO> product_card();
	
	MainDTO product_detail(String seq);

	List<MainDTO> list(Map<Object, Object> map);

	List<MainDTO> oneday_product();

	String product_number();
}
