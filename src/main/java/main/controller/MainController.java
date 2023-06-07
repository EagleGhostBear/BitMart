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
import main.bean.MainDTO;
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
	
	@GetMapping("/product_card")
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
	public  List<MainDTO> list1(@RequestBody Map map, HttpSession session) {
		
		System.out.println("list1:" + map);

//		session.setAttribute("startNum", "0");
//		session.setAttribute("endNum", "9");

		return mainService.list(map);
	}
	
	@PostMapping(value = "list2")
	@ResponseBody // DispatcherServlet로 반환하는걸 막아준다 //알아서 JSON으로 변환시켜준다
	public List<MainDTO> list2(@RequestBody Map map, HttpSession session) {
		
		System.out.println("list2:" + map);

		// UserDTO를 JSON형태로 list에 넣어준 형태가 된다.
		return mainService.list(map);
	}
}
