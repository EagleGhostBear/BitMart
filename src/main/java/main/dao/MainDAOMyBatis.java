package main.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import main.bean.MainDTO;
import main.bean.NoticeDTO;

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

}
