package main.dao;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import main.bean.CartDTO;
import main.bean.CommentDTO;
import main.bean.FaqDTO;
import main.bean.HistoryDTO;
import main.bean.InquiryDTO;
import main.bean.MainDTO;
import main.bean.NoticeDTO;
import main.bean.UserDTO;
import main.bean.ViewsDTO;

@Repository
@Transactional
public class MainDAOMyBatis implements MainDAO {
	@Autowired
	private SqlSession sqlSession;
	
	@Override
	public List<MainDTO> mainList() {
		
		return sqlSession.selectList("mainSQL.mainList");
	}
	
	@Override
	public List<MainDTO> product_card() {
		
		return sqlSession.selectList("mainSQL.product_card");
	}
	
	@Override
	public MainDTO product_detail(String seq) {
		
		return sqlSession.selectOne("mainSQL.product_detail", seq);
	}
	
	@Override
	public List<MainDTO> list(Map<Object, Object> map) {
		
		List<MainDTO> list = sqlSession.selectList("mainSQL.product_list", map);
		System.out.println("list_data:" + list);
		return list;
	}
	
	@Override
	public List<MainDTO> oneday_product() {
		
		return sqlSession.selectList("mainSQL.oneday_product");
	}
	
	@Override
	public String product_number() {
		
		return sqlSession.selectOne("mainSQL.product_number");
	}

	@Override
	public List<NoticeDTO> getNoticeList() {
	    return sqlSession.selectList("mainSQL.getNoticeList");
	}

	@Override
	public NoticeDTO getNoticeDetail(int id) {
	    return sqlSession.selectOne("mainSQL.getNoticeDetail", id);
	}

	
	@Override
	public UserDTO login(Map map) {
		
		return sqlSession.selectOne("mainSQL.login", map);
	}
	
	@Override
	public UserDTO check_login(Map map) {
		
		return sqlSession.selectOne("mainSQL.check_login", map);
	}
	
	@Override
	public List<CartDTO> cart_list(Map map) {
		
		List<CartDTO> list = sqlSession.selectList("mainSQL.cart_list", map);
		System.out.println("cart_data:" + list);
		return list;
	}
	
	@Override
	public void cart_delete(Map map) {
		
		sqlSession.delete("mainSQL.cart_delete", map);
	}
	
	@Override
	public void cart_num_edit(Map map) {
		
		sqlSession.update("mainSQL.cart_num_edit", map);
	}
	
	@Override
	public CartDTO check_cart(Map map) {
		System.out.println(map);
		return sqlSession.selectOne("mainSQL.check_cart", map);
	}
	
	@Override
	public void cart_insert(Map map) {
		
		sqlSession.insert("mainSQL.cart_insert", map);
	}

	@Override
	public List<FaqDTO> getFaqList() {
	    return sqlSession.selectList("mainSQL.getFaqList");
	}

	@Override
	public UserDTO findId(Map map) {
		
		return sqlSession.selectOne("mainSQL.findId", map);
	}
	
	@Override
	public UserDTO findPwd(Map map) {
		return sqlSession.selectOne("mainSQL.findPwd", map);
	}

	@Override
	public UserDTO checkUserId(String id) {
		// TODO Auto-generated method stub
		return sqlSession.selectOne("mainSQL.checkUserId", id);
	}

	@Override
	public UserDTO checkEmail(String email) {
		String[] parts = email.split("@"); // "@"를 기준으로 email을 나눔
	    String email1 = parts[0]; // "@" 앞 부분
	    String email2 = parts[1]; // "@" 뒷 부분
	    Map<String, Object> map = new HashMap<>();
		map.put("email1", email1);
		map.put("email2", email2);
		return sqlSession.selectOne("mainSQL.checkEmail", map);
	}
	
	@Override
	public UserDTO checkName(String name) {
		return sqlSession.selectOne("mainSQL.checkUserName", name);
	}

	@Override
	public void signUp(Map<String, Object> map) {
		
		sqlSession.insert("mainSQL.signUp", map);
	}


	
	@Override
	public List<CommentDTO> comment_list(Map map) {
		
		return sqlSession.selectList("mainSQL.comment_list", map);
	}
	
	@Override
	public String comment_count(Map map) {
		
		return sqlSession.selectOne("mainSQL.comment_count", map);
	}

	@Override
	public List<InquiryDTO> getInquiryList() {
	    return sqlSession.selectList("mainSQL.getInquiryList");
	}

	@Override
	public void insertInquiry(InquiryDTO inquiry) {
	    sqlSession.insert("mainSQL.insertInquiry", inquiry);
	}

	@Override
	public void updateInquiry(InquiryDTO inquiry) {
	    sqlSession.update("mainSQL.updateInquiry", inquiry);
	}

	@Override
	public void deleteInquiry(int id) {
	    sqlSession.delete("mainSQL.deleteInquiry", id);
	}

	public List<CartDTO> order_list(Map map) {

		List<CartDTO> list = sqlSession.selectList("mainSQL.order_list", map);
		System.out.println("order_data:" + list);
		
		return list;
	}
	
	@Override
	public void views_update(Map map) {
		
		ViewsDTO viewsDTO = sqlSession.selectOne("mainSQL.views_check", map);
		if(viewsDTO == null) {sqlSession.insert("mainSQL.views_insert", map);}
		else {sqlSession.update("mainSQL.views_increase", map);}
	}

	@Override
	public void order_success(Map map) {
	    ArrayList<Integer> products = (ArrayList) map.get("products");
	    ArrayList<Integer> numbers = (ArrayList) map.get("numbers");
	    
	    for (int i = 0; i < products.size(); i++) {
	        int product = products.get(i);
	        int number = numbers.get(i);
	        
	        map.put("product", product);
	        map.put("number", number);
	        
	        Random random = new Random();
	        int order_num = random.nextInt(900000000) + 100000000;
	        map.put("order_num", order_num);
	        
	        LocalDateTime currentTime = LocalDateTime.now();
	        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
	        String formattedTime = currentTime.format(formatter);
	        System.out.println(formattedTime);
	        map.put("logtime", formattedTime);
	        
	        sqlSession.insert("mainSQL.order_success", map);
	    }
	}



	@Override
	public List<CartDTO> mycartList(Map map) {

		return sqlSession.selectList("mainSQL.mycartList", map);
	}

	@Override
	public void cart_allDelete(Map map) {
		
		sqlSession.delete("mainSQL.cart_allDelete", map);
	}

	@Override
	public List<HistoryDTO> order_history(Map map) {
		
		return sqlSession.selectList("mainSQL.order_history", map);
	}

	
	public void delivery_insert(Map<String, String> map) {
		sqlSession.insert("mainSQL.delivery_insert", map);
	}
}
