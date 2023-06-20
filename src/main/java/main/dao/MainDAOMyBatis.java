package main.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import main.bean.CartDTO;
import main.bean.CommentDTO;
import main.bean.FaqDTO;
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
	public List<CommentDTO> comment_list(Map map) {
		
		return sqlSession.selectList("mainSQL.comment_list", map);
	}
	
	@Override
	public String comment_count(Map map) {
		
		return sqlSession.selectOne("mainSQL.comment_count", map);
	}

	@Override
	public List<CartDTO> order_list(Map map) {

		List<CartDTO> list = sqlSession.selectList("mainSQL.order_list", map);
		System.out.println("order_data:" + list);
		
		return list;
	
	@Override
	public void views_update(Map map) {
		
		ViewsDTO viewsDTO = sqlSession.selectOne("mainSQL.views_check", map);
		if(viewsDTO == null) {sqlSession.insert("mainSQL.views_insert", map);}
		else {sqlSession.update("mainSQL.views_increase", map);}
	}
}
