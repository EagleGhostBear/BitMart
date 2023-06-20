package main.controller;

import java.io.File;
import java.io.IOException;
import java.time.LocalDateTime;
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
import main.bean.FaqDTO;
import main.bean.InquiryDTO;
import main.bean.MainDTO;
import main.bean.NoticeDTO;
import main.bean.UserDTO;
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
	
	@PostMapping(value = "comment_list")
	@ResponseBody
	public List<CommentDTO> comment_list(@RequestBody Map map) {
		
		List<CommentDTO> list = mainService.comment_list(map);
		System.out.println("코멘트: " + list);
		return list;
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
	        System.out.println("list = " + inquiries);
	        return inquiries;
	    }

	    @PostMapping("/api/inquiries")
	    @CrossOrigin(origins = "http://localhost:3000")
	    @ResponseBody
	    public void insertInquiry(@RequestBody InquiryDTO inquiry) {
	        String selectedType = inquiry.getType();
	        String selectedSubType = inquiry.getSubType();
	    
	        // 선택한 유형과 상세유형 설정
	        if (selectedType.equals("주문/결제/반품/교환문의")) {
	            // 상세유형 설정
	            inquiry.setSubType(selectedSubType);
	        } else if (selectedType.equals("상품문의")) {
	            // 상세유형 설정
	            inquiry.setSubType(selectedSubType);
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
	

    
	
}













