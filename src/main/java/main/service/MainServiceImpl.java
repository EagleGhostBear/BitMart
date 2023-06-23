package main.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import main.bean.CartDTO;
import main.bean.CommentDTO;
import main.bean.DeliveryDTO;
import main.bean.FaqDTO;
import main.bean.HistoryDTO;
import main.bean.InquiryDTO;
import main.bean.MainDTO;
import main.bean.NoticeDTO;
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

	 @Override
    public List<NoticeDTO> getNoticeList() {
        // TODO: 공지사항 목록을 가져오는 로직을 구현해야 합니다.
        // mainDAO를 사용하여 데이터베이스에서 공지사항 목록을 조회하고 반환해야 합니다.
        return mainDAO.getNoticeList();
    }

    @Override
    public NoticeDTO getNoticeDetail(int id) {
        // TODO: 공지사항 상세 내용을 가져오는 로직을 구현해야 합니다.
        // mainDAO를 사용하여 데이터베이스에서 공지사항 상세 내용을 조회하고 반환해야 합니다.
        return mainDAO.getNoticeDetail(id);
    }

	@Override
	public List<FaqDTO> getFaqList() {
		// TODO Auto-generated method stub
		return mainDAO.getFaqList();
	}

	@Override
	public UserDTO findId(Map map) {
		// TODO Auto-generated method stub
		return mainDAO.findId(map);
	}
	
	@Override
	public UserDTO findPwd(Map map) {
		return mainDAO.findPwd(map);
	}

	@Override
	public UserDTO checkUserId(String id) {
		// TODO Auto-generated method stub
		return mainDAO.checkUserId(id);
	}

	@Override
	public UserDTO checkEmail(String email) {
		// TODO Auto-generated method stub
		return mainDAO.checkEmail(email);
	}
	
	@Override
	public UserDTO checkName(String name) {
		return mainDAO.checkName(name);
	}

	@Override
	public void signUp(Map<String, Object> map) {
		
		mainDAO.signUp(map);
	}

	@Override
	public List<CommentDTO> comment_list(Map map) {
		
		return mainDAO.comment_list(map);
	}
	
	@Override
	public String comment_count(Map map) {
		
		return mainDAO.comment_count(map);
	}

	@Override
	public List<InquiryDTO> getInquiryList() {
	    
		return mainDAO.getInquiryList();
	}

	
	@Override
	public void insertInquiry(InquiryDTO inquiry) {
	    // Set createdAt and replyStatus values
	    inquiry.setCreatedAt(LocalDateTime.now());
	    inquiry.setReplyStatus("Pending");
	    
	    mainDAO.insertInquiry(inquiry);
	}


	@Override
	public void updateInquiry(InquiryDTO inquiry) {
	     
		mainDAO.updateInquiry(inquiry);
	}

	@Override
	public void deleteInquiry(int id) {
	    
		mainDAO.deleteInquiry(id);
	}

	public List<CartDTO> order_list(Map map) {
		// TODO Auto-generated method stub
		return mainDAO.order_list(map);
	}
	
	@Override
	public void views_update(Map map) {
		
		mainDAO.views_update(map);
	}

	@Override
	public void order_success(Map map) {
		
		mainDAO.order_success(map);
	}

	@Override
	public List<CartDTO> mycartList(Map map) {
		
		return mainDAO.mycartList(map);
	}

	@Override
	public void cart_allDelete(Map map) {
		
		mainDAO.cart_allDelete(map);
	}

	@Override
	public List<HistoryDTO> order_history(Map map) {
		
		return mainDAO.order_history(map);
	}


	
	@Override
	public void delivery_insert(Map<String, String> map) {
		// TODO Auto-generated method stub
		mainDAO.delivery_insert(map);
	}
	
	@Override
	public UserDTO checkInfo(Map map) {
		// TODO Auto-generated method stub
		return mainDAO.checkInfo(map);
	}

	@Override
	public UserDTO userUpdate(Map map) {
		// TODO Auto-generated method stub
		return mainDAO.userUpdate(map);
	}

	@Override
	public List<DeliveryDTO> delivery_list(Map map) {
		// TODO Auto-generated method stub
		return mainDAO.delivery_list(map);
	}

	@Override
	public void delivery_delete(Map map) {
		mainDAO.delivery_delete(map);
	}


	
}
