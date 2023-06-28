package main.controller;

import java.io.File;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import jakarta.servlet.http.HttpSession;
import main.bean.CartDTO;
import main.bean.CommentDTO;
import main.bean.DeliveryDTO;
import main.bean.FaqDTO;
import main.bean.HistoryDTO;
import main.bean.InquiryDTO;
import main.bean.MainDTO;
import main.bean.NoticeDTO;
import main.bean.UserDTO;
import main.service.MailService;
import main.service.MainService;

@Controller
public class MainController {
	@Autowired
	private MainService mainService;
	
//	@GetMapping("/")
//	public String index() {
//		return "/index";
//	}
	
	@GetMapping("/main/mainList")
	@ResponseBody
	public List<MainDTO> mainList(){
		//return personService.getPersonList();
		
		List<MainDTO> list = mainService.mainList();
		System.out.println("list = " + list);
		return list;
	}
	
	@PostMapping("/product_card")
	@ResponseBody
	public List<MainDTO> product_card(){
		//return personService.getPersonList();
		
		List<MainDTO> list = mainService.product_card();
		System.out.println("list = " + list);
		return list;
	}
	
	@GetMapping("/product_detail")
	@ResponseBody
	public MainDTO product_detail(@RequestParam("seq") String seq){
		
		return mainService.product_detail(seq);
	}
	
	@PostMapping(value = "list1")
	@ResponseBody
	public List<MainDTO> list1(@RequestBody Map map) {
		
		System.out.println("list1_tag:" + map);

//		session.setAttribute("startNum", "0");
//		session.setAttribute("endNum", "9");

		return mainService.list(map);
	}
	
	@PostMapping(value = "list2")
	@ResponseBody // DispatcherServlet로 반환하는걸 막아준다 //알아서 JSON으로 변환시켜준다
	public List<MainDTO> list2(@RequestBody Map map) {
		
		System.out.println("list2:" + map);

		// UserDTO를 JSON형태로 list에 넣어준 형태가 된다.
		return mainService.list(map);
	}
	
	@PostMapping("/oneday_product")
	@ResponseBody
	public List<MainDTO> oneday_product(){
		
		return mainService.oneday_product();
	}
	
	@PostMapping("/product_number")
	@ResponseBody
	public String product_number(){
		
		return mainService.product_number();
	}
	  
	 
	@GetMapping("/api/notices")
	@CrossOrigin(origins = "http://localhost:3000")
	@ResponseBody
	public List<NoticeDTO> getNotices() {
	    List<NoticeDTO> notices = mainService.getNoticeList();
	    System.out.println("list = " + notices);
	    return notices;
	}

	@GetMapping("/api/notices/{id}")
	@CrossOrigin(origins = "http://localhost:3000")
	@ResponseBody
	public NoticeDTO getNoticeDetail(@PathVariable("id") int id) {
	    NoticeDTO notice = mainService.getNoticeDetail(id);
	    System.out.println("notice = " + notice);
	    return notice;
	}

	@PostMapping(value="/find_id")
	@ResponseBody
	public UserDTO findId(@RequestBody Map map) {
		System.out.println(map);
		return mainService.findId(map);
	}
	
	@PostMapping(value="/find_pwd")
	@ResponseBody
	public UserDTO findPwd(@RequestBody Map map) {
		System.out.println(map);
		return mainService.findPwd(map);
	}

	@PostMapping(value = "login")
	@ResponseBody
	public UserDTO login(@RequestBody Map map) {
		
		System.out.println("로그인 요청됨");
		UserDTO userDTO = mainService.login(map);
		return userDTO;
	}
	
	@PostMapping(value = "check_login")
	@ResponseBody
	public UserDTO check_login(@RequestBody Map map) {
		
		UserDTO userDTO = mainService.check_login(map);
		return userDTO;
	}
	
	@PostMapping(value = "cart_list")
	@ResponseBody
	public List<CartDTO> cart_list(@RequestBody Map map) {
		
		return mainService.cart_list(map);
	}
	
	@PostMapping(value = "cart_delete")
	@ResponseBody
	public void cart_delete(@RequestBody Map map) {
		
		mainService.cart_delete(map);
	}
	
	@PostMapping(value = "cart_num_edit")
	@ResponseBody
	public void cart_num_edit(@RequestBody Map map) {
		
		mainService.cart_num_edit(map);
	}
	
	@PostMapping(value = "check_cart")
	@ResponseBody
	public String check_cart(@RequestBody Map map) {
		
		CartDTO cartDTO = mainService.check_cart(map);
		
		if(cartDTO == null) {return "true";}
		else {return "false";}
	}
	
	@PostMapping(value = "cart_insert")
	@ResponseBody
	public void cart_insert(@RequestBody Map map) {
		
		mainService.cart_insert(map);
	}
	
	@GetMapping("/api/faqs")
	@CrossOrigin(origins = "http://localhost:3000")
	@ResponseBody
    public List<FaqDTO> getFaqs() {
	   List<FaqDTO> faqs = mainService.getFaqList();
	   System.out.println("list = " + faqs);
	   return faqs;
	    }
	
	@PostMapping(value="/checkUserId")
	@ResponseBody
	public UserDTO checkUserId(@RequestBody Map<String, String> requestData) {
	    String id = requestData.get("id");
	    System.out.println("아이디는 " + id);
	    return mainService.checkUserId(id);
	}
	
	@PostMapping(value="/checkEmail")
	@ResponseBody
	public UserDTO checkEmail(@RequestBody Map<String, String> requestData) {
		String email = requestData.get("email");
		System.out.println("이메일은 " + email);
		
		return mainService.checkEmail(email);
	}
	
	@PostMapping(value="/checkName")
	@ResponseBody
	public UserDTO checkName(@RequestBody Map<String, String> requestData) {
		String name = requestData.get("name");
		System.out.println("이름은 " + name);
		
		return mainService.checkName(name);
	}
	
	@PostMapping(value="signUp")
	@ResponseBody
	public void signUp(@RequestBody Map<String, Object> requestData) {
		
		String id = (String) requestData.get("id");
		String pwd = (String)requestData.get("pwd");
		String name = (String)requestData.get("name");
		String email = (String)requestData.get("email");
		
		System.out.println("아이디는 " + id);
		System.out.println("비밀번호 : " + pwd);
		System.out.println("이름 : " + name);
		System.out.println("이메일 : " + email);
		
		Map<String, Object> map = new HashMap<>();
		map.put("id", id);
		map.put("pwd", pwd);
		map.put("name", name);
		String[] parts = email.split("@"); // "@"를 기준으로 email을 나눔
	    String email1 = parts[0]; // "@" 앞 부분
	    String email2 = parts[1]; // "@" 뒷 부분
	    System.out.println("email1 : " + email1);
	    System.out.println("email2 : " + email2);
	    map.put("email1", email1);
	    map.put("email2", email2);
	    
	    mainService.signUp(map);
	}
	

	
	@PostMapping(value = "comment_list")
	@ResponseBody
	public List<CommentDTO> comment_list(@RequestBody Map map) {
		
		List<CommentDTO> list = mainService.comment_list(map);
		System.out.println("코멘트: " + list);
		return list;
	}
	
	@PostMapping(value = "comment_detail")
	@ResponseBody
	public CommentDTO comment_detail(@RequestBody Map map) {
		System.out.println("comment:" + map);
		CommentDTO commentDTO = mainService.comment_detail(map);
		System.out.println("comment detail:"  + commentDTO);
		return commentDTO;
	}
	
	@PostMapping(value = "comment_count")
	@ResponseBody
	public String comment_count(@RequestBody Map map) {
		
		return mainService.comment_count(map);
	}
	
	@GetMapping("/api/inquiries")
	@CrossOrigin(origins = "http://localhost:3000")
	@ResponseBody
	public List<InquiryDTO> getInquiries() {
	    List<InquiryDTO> inquiries = mainService.getInquiryList();
	    for (InquiryDTO inquiry : inquiries) {
	     String selectedType = inquiry.getType();
       if (selectedType.equals("주문/결제/반품/교환문의") || selectedType.equals("상품문의")) {
	        String selectedSubType = inquiry.getSubType();
	        inquiry.setSubType(selectedSubType);
	        }
	    }
	    return inquiries;
	}

	@PostMapping("/api/inquiries")
	@CrossOrigin(origins = "http://localhost:3000")
	@ResponseBody
	public void insertInquiry(@RequestBody InquiryDTO inquiry) {
	    String selectedType = inquiry.getType();
	    String selectedSubType = inquiry.getSubType();

	   
	    if (selectedType.equals("주문/결제/반품/교환문의")) {
	    	if (selectedSubType == null || selectedSubType.isEmpty()) {
	            throw new IllegalArgumentException("상세 유형은 필수 입력입니다.");
	        }
	    } else if (selectedType.equals("상품문의")) {
	       
	        if (selectedSubType == null || selectedSubType.isEmpty()) {
	            throw new IllegalArgumentException("상세 유형은 필수 입력입니다.");
	        }
	    } else if (selectedType.equals("기타문의")) {
	        
	        if (selectedSubType == null || selectedSubType.isEmpty()) {
	            inquiry.setSubType(null);
	        }
	    } else {
	        inquiry.setSubType(null);
	    }
	    if (selectedType == null && inquiry.getSubType() == null) {
	        throw new IllegalArgumentException("유형은 필수 입력입니다.");
	    }
	    mainService.insertInquiry(inquiry);
	}

	@PutMapping("/api/inquiries/{id}")
	@CrossOrigin(origins = "http://localhost:3000")
	@ResponseBody
	public void updateInquiry(@PathVariable("id") int id, @RequestBody InquiryDTO inquiry) {
	    inquiry.setId(id);
	    mainService.updateInquiry(inquiry);
	}

	@DeleteMapping("/api/inquiries/{id}")
	@CrossOrigin(origins = "http://localhost:3000")
	@ResponseBody
	public void deleteInquiry(@PathVariable("id") int id) {
	    mainService.deleteInquiry(id);
	}


	@PostMapping(value="order_list")
	@ResponseBody
	public List<CartDTO> order_list(@RequestBody Map map) {
		
		return mainService.order_list(map);
	}
	
	@PostMapping(value = "views_update")
	@ResponseBody
	public void views_update(@RequestBody Map map) {
		
		mainService.views_update(map);
	}
	
	@PostMapping(value="/Order_success")
	@ResponseBody
	public void order_success(@RequestBody Map map) {
		
		String user = (String) map.get("user");
		ArrayList product = (ArrayList) map.get("products");
		ArrayList number = (ArrayList) map.get("numbers");
		
		System.out.println("user = " + user);
		System.out.println("product = " + product);
		System.out.println("number = " + number);
		map.put("product", product);
		
		
		mainService.order_success(map);
	}
	
	@PostMapping(value="mycartList")
	@ResponseBody
	public List<CartDTO>  mycartList(@RequestBody Map map) {
		String user = (String) map.get("user");
		System.out.println("user = " + user);
		
		return mainService.mycartList(map);
	}
	
	@PostMapping(value="/cart_allDelete")
	@ResponseBody
	public void cart_allDelete(@RequestBody Map map) {
		String user = (String) map.get("user");
		System.out.println("user : " + user);
		mainService.cart_allDelete(map);
	}
	
	@PostMapping(value="order_history")
	@ResponseBody
	public List<HistoryDTO> order_history(@RequestBody Map map){
		System.out.println("order호출");
		List<HistoryDTO> list = mainService.order_history(map);
		System.out.println(list);
		return list;
	}

	@PostMapping(value="/delivery_insert")
	@ResponseBody
	public void delivery_insert(@RequestBody Map requestData){
		
		
		String user = (String) requestData.get("user");
		String addr1 = (String) requestData.get("addr1");
		String addr2 = (String)requestData.get("addr2");
		String name = (String)requestData.get("name");
		String phone = (String)requestData.get("phone");
		int checked = (int) requestData.get("checked");

		//System.out.println("딜리버리 유저: "+ user);
		
		System.out.println("유저 값: " + user);
		System.out.println("주소1 : " + addr1);
		System.out.println("주소2 : " + addr2);
		System.out.println("이름 : " + name);
		System.out.println("폰 : " + phone);
		System.out.println("체크 유무 : " + checked);
		
		Map<String, Object> map = new HashMap<>();

		map.put("user", user);
		map.put("addr1", addr1);
		map.put("addr2", addr2);
		map.put("name", name);
		map.put("checked", checked);

		String[] parts = new String[3];

        parts[0] = phone.substring(0, 3);     // "010"
        parts[1] = phone.substring(3, 7);     // "1234"
        parts[2] = phone.substring(7);        // "5678"

	    String tel1 = parts[0]; 
	    String tel2 = parts[1]; 
		String tel3 = parts[2];

	    System.out.println("tel1 : " + tel1);
	    System.out.println("tel2 : " + tel2);
		System.out.println("tel3 : " + tel3);

	    map.put("tel1", tel1);
	    map.put("tel2", tel2);
		
	    map.put("tel3", tel3);
	    
	    mainService.delivery_insert(map);	
		
	}

	@PostMapping(value="delivery_list")
	@ResponseBody
	public List<DeliveryDTO> delivery_list(@RequestBody Map map){
		System.out.println("배송지 리스트 서버 왔다 !");

		String user = (String) map.get("user");

		System.out.println("user: "+ user);

		return mainService.delivery_list(map);
	}

	@PostMapping(value="delivery_delete")
	@ResponseBody
	public void delivery_delete(@RequestBody Map map){

		System.out.println("배송지 삭제 서버 왔다!");
		String user = (String) map.get("user");
		String seq = (String) map.get("seq");

		System.out.println("user: "+ user + " seq: " + seq);

		System.out.println("데이터 길이: " + map.size()); 

		mainService.delivery_delete(map); 

	}
	
	@PostMapping(value="review")
	@ResponseBody
	public List<HistoryDTO> review(@RequestBody Map map){
		
		List<HistoryDTO> orderHistory = mainService.getOrderHistory(map);
		return orderHistory; 
	}
	
	
	@PostMapping("/ReviewSubmit")
	@ResponseBody
	public void ReviewSubmit(@RequestBody Map reviewData) {
	    String name = (String) reviewData.get("name");
	    String title = (String) reviewData.get("title");
	    String content = (String) reviewData.get("content");
	    
	    System.out.println("이름" + name);
	    System.out.println("title = " + title);
	    System.out.println("content = " + content);
	    
	    mainService.ReviewSubmit(reviewData);
	}
	
	
	@PostMapping(value = "checkInfo")
	@ResponseBody
	public UserDTO checkInfo(@RequestBody Map map) {
		
		UserDTO userDTO = mainService.checkInfo(map);
		System.out.println("checkInfo:" + userDTO);
		return userDTO;
	}
	
	//회원 정보 수정 페이지에서 변경할 회원 정보 가져오기
	@PostMapping(value="userUpdate")
	@ResponseBody
	public UserDTO userUpdate(@RequestBody Map map) {
		
		System.out.println("여기까지 오나?");
		return mainService.userUpdate(map); 
	}
	

	@PostMapping(value="/update_checked")
	@ResponseBody
	public void update_checked(@RequestBody Map requestData){
		String checked = (String)requestData.get("checked");
		String user = (String) requestData.get("user");
		String seq = (String) requestData.get("seq");

		System.out.println("데이터 길이: "+ requestData.size());
		System.out.println("data: " + requestData);

		System.out.println();
		System.out.println("update user: " + user);
		System.out.println("update seq: " + seq);
		System.out.println("update checked: " + checked);

		if (checked.equals("checkbox1")){
			checked = 0+"";
		}
		else checked= 1+"";

		int checkedInt = checked.equals("checkbox1") ? 0 : 1;
		boolean checkedValue = checked.equals("checkbox1") ? false : true;


		System.out.println();
		System.out.println("change checked: " + checked);
		System.out.println("change checkedInt: " + checkedInt);
		System.out.println("change checkedValue: " + checkedValue);

		Map<String, Object> map = new HashMap<>();

		map.put("user", user);
		map.put("seq", seq);
		map.put("checked", checkedInt);
		//map.put("checked", checkedValue);

		mainService.update_checked(map);
	}
	
	@PostMapping(value="getId")
	@ResponseBody
	public UserDTO getId(@RequestBody Map map) {
		return mainService.getId(map);
	}
	
	//회원 정보 수정
	@PostMapping(value = "modifyMember")
	@ResponseBody
	public void modifyMember(@RequestBody Map map) {
		String email = (String) map.get("email");
		String seq = (String) map.get("seq");
		String user = (String) map.get("id");
		String pwd = (String) map.get("pwd");
		System.out.println("user의 값은 = " + user);
		System.out.println("pwd값은 = " + pwd);
		System.out.println("email값은 = " + email);
		System.out.println("seq값은 = " + seq);
		mainService.modifyMember(map);
	}
	
	//회원 탈퇴
	@PostMapping(value="deleteUser")
	@ResponseBody
	public void deleteUser(@RequestBody Map map){
		System.out.println("delete 서버 성공");
		mainService.deleteUser(map);
	}

	// 유저 테이블 기본 배송지 설정
	@PostMapping(value="useraddr_update")
	@ResponseBody
	public void useraddr_update(@RequestBody Map requestData){
		String user = (String) requestData.get("user");
		String checked = (String) requestData.get("checked");
		String addr1 = (String) requestData.get("addr1");
		String addr2 = (String) requestData.get("addr2");


		System.out.println();
		System.out.println("updateD user: " + user);
		System.out.println("updateD checked: " + checked);
		System.out.println("updateD addr1: " + addr1);
		System.out.println("updateD addr2: " + addr2);

		Map<String, Object> map = new HashMap<>();
		map.put("user", user);
		map.put("addr1", addr1);
		map.put("addr2", addr2);
		map.put("checked", checked);

		mainService.useraddr_update(map);
	}
	

	// 장바구니 페이지 기본배송지 등록
	@PostMapping(value="cart_delivery")
	@ResponseBody
	public List<UserDTO> cart_delivery(@RequestBody Map map){
		String user = (String) map.get("user");
		System.out.println("장바구니 유저 값: " + user);

		return mainService.cart_delivery(user);
	}
	
	@PostMapping(value="resetfindId")
	@ResponseBody
	public UserDTO resetfindId(@RequestBody Map map) {
		
		return mainService.resetfindId(map);
	}
	
	@PostMapping(value="resetpwd")
	@ResponseBody
	public void resetpwd(@RequestBody Map map) {
		
		mainService.resetpwd(map);
	}
}













