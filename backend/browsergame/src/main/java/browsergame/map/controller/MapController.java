package browsergame.map.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import browsergame.map.entity.Map;
import browsergame.map.service.MapService;

@RestController
@RequestMapping("map")
public class MapController {
	
	@Autowired
	private MapService mapService;

	@RequestMapping(value = "/getFullMap", method = RequestMethod.GET)
	public List<Map> getFullMap(){
		return mapService.findAll();
	}
}
