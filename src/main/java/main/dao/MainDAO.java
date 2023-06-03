package main.dao;

import java.util.List;

import main.bean.MainDTO;

public interface MainDAO {

	List<MainDTO> mainList();

	List<MainDTO> prodcut_card();
}
