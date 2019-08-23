package com.reactive.demo;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;




@Controller
public class HomeController {

	@RequestMapping(value = "/")
	public String index() {
		return "index";
	}
	
	@RequestMapping(value = "/login")
	public String login(Model model) {
		model.addAttribute("user", new User());
		return "CustomLogin";
	}
	@GetMapping("/registration")
	public String showRegistration(Model model) {
		model.addAttribute("user", new User());
        return "registration";
		
	}
	
	@PostMapping("/registration")
	public String submitRegistration(User user) {
//		//model.addAttribute("message", "Spring Boot + Thymeleaf rocks");
//		List<Role> roles = new ArrayList<Role>();
//		Role role = new Role();
//		role.setId(2);
//		role.setName("ROLE_ADMIN");
//		roles.add(role);
//		user.setRoles(roles);
//		String encoder=encoder(user.getPassword());
//		user.setPassword(encoder);
//		userRepository.save(user);
		return "CustomLogin";
	}

}