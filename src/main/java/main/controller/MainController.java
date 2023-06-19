package main.controller;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import jakarta.servlet.http.HttpSession;
import main.bean.CartDTO;
import main.bean.MainDTO;
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
}