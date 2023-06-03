package main.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import main.bean.MainDTO;
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
	public List<MainDTO> prodcut_card() {
		
		return mainDAO.prodcut_card();
	}
}
