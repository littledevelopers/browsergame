package browsergame.map.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import browsergame.map.entity.Map;
import browsergame.map.repository.MapRepository;

@Service
@Transactional
public class MapServiceImpl implements MapService{
	
	@Autowired
	private MapRepository mapRepository;

	@Override
	public List<Map> findAll() {
		return (List<Map>) mapRepository.findAll();
	}

}
