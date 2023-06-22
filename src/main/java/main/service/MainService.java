package main.service;

import java.util.List;
import java.util.Map;

import main.bean.CartDTO;
import main.bean.CommentDTO;
import main.bean.FaqDTO;
import main.bean.HistoryDTO;
import main.bean.InquiryDTO;
import main.bean.MainDTO;
import main.bean.NoticeDTO;
import main.bean.UserDTO;

public interface MainService {

    List<MainDTO> mainList();

    List<MainDTO> product_card();

    MainDTO product_detail(String seq);

    List<MainDTO> list(Map<Object, Object> map);

    List<MainDTO> oneday_product();

    List<NoticeDTO> getNoticeList(); // 수정된 부분

    NoticeDTO getNoticeDetail(int id); // 수정된 부분
    
	String product_number();

	UserDTO login(Map map);

	UserDTO check_login(Map map);

	List<CartDTO> cart_list(Map map);

	public void cart_delete(Map map);

	public void cart_num_edit(Map map);

	CartDTO check_cart(Map map);

	public void cart_insert(Map map);

	List<FaqDTO> getFaqList(); //수정된 부분

	UserDTO findId(Map map);

	UserDTO checkUserId(String id);

	UserDTO checkEmail(String email);

	void signUp(Map<String, Object> map);

	List<CommentDTO> comment_list(Map map);

	String comment_count(Map map);

	List<InquiryDTO> getInquiryList();

    public void insertInquiry(InquiryDTO inquiry);

    public void updateInquiry(InquiryDTO inquiry);

    public void deleteInquiry(int id);

    List<CartDTO> order_list(Map map);
	
	public void views_update(Map map);

	
	UserDTO findPwd(Map map);
	
	UserDTO checkName(String name);

	void order_success(Map map);

	List<CartDTO> mycartList(Map map);

	void cart_allDelete(Map map);

	List<HistoryDTO> order_history(Map map);
	

	public void delivery_insert(Map<String, String> map);
}

