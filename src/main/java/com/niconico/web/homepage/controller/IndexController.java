package com.niconico.web.homepage.controller;


import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class IndexController {

	@GetMapping("/")
	public String index(Model model) {
		return "/index";
	}

	@GetMapping("/first")
	public String first(Model model) {
//		this.setNews(model);
		return "first";
	}
	@GetMapping("/price")
	public String price(Model model) {
//		this.setNews(model);
		return "/price";
	}
	@GetMapping("/profile")
	public String profile(Model model) {
//		this.setNews(model);
		return "/profile";
	}
	@GetMapping("/access")
	public String access(Model model) {
//		this.setNews(model);
		return "/access";
	}
	@GetMapping("/sango")
	public String sango(Model model) {
//		this.setNews(model);
//		Collection<Post> posts = this.postService.findVoice("1");
//        model.addAttribute("posts", posts);
		return "/sango";
	}
	@GetMapping("/katakori")
	public String katakori(Model model) {
//		this.setNews(model);
//		Collection<Post> posts = this.postService.findVoice("2");
//        model.addAttribute("posts", posts);
		return "/katakori";
	}
	@GetMapping("/youtsu")
	public String youtsu(Model model) {
//		this.setNews(model);
//		Collection<Post> posts = this.postService.findVoice("3");
//        model.addAttribute("posts", posts);
		return "/youtsu";
	}
	@GetMapping("/zakotsu")
	public String zakotsu(Model model) {
//		this.setNews(model);
//		Collection<Post> posts = this.postService.findVoice("4");
//        model.addAttribute("posts", posts);
		return "/zakotsu";
	}
	@GetMapping("/gikkuri")
	public String gikkuri(Model model) {
//		this.setNews(model);
//		Collection<Post> posts = this.postService.findVoice("5");
//        model.addAttribute("posts", posts);
		return "/gikkuri";
	}
	@GetMapping("/headache")
	public String zutsu(Model model) {
//		this.setNews(model);
//		Collection<Post> posts = this.postService.findVoice("6");
//        model.addAttribute("posts", posts);
		return "/headache";
	}
	@GetMapping("/jiko")
	public String jiko(Model model) {
//		this.setNews(model);
//		Collection<Post> posts = this.postService.findVoice("7");
//        model.addAttribute("posts", posts);
		return "/jiko";
	}
	@GetMapping("/faq")
	public String faq(Model model) {
//		this.setNews(model);
		return "/faq";
	}
	@GetMapping("/voice")
	public String voice(Model model) {
//		this.setNews(model);
//		Collection<Post> postList = this.postService.getVoice();
//		List<PostForm> posts=new ArrayList<>();
//		for(Post post:postList) {
//			PostForm postForm=new PostForm();
//			modelMapper.map(post, postForm);
//			posts.add(postForm);
//		}
//        model.addAttribute("posts", posts);
		return "/voice";
	}

	@GetMapping("/panorama/panorama1")
	public String panorama(Model model) {
//		this.setNews(model);
		return "/panorama/panorama1";
	}
	@GetMapping("/panorama2")
	public String panorama2(Model model) {
//		this.setNews(model);
		return "/panorama/panorama2";
	}
	@GetMapping("/panorama3")
	public String panorama3(Model model) {
//		this.setNews(model);
		return "/panorama/panorama3";
	}
	@GetMapping("/panorama4")
	public String panorama4(Model model) {
//		this.setNews(model);
		return "/panorama/panorama4";
	}
	@GetMapping("/panorama5")
	public String panorama5(Model model) {
//		this.setNews(model);
		return "/panorama/panorama5";
	}
	@GetMapping("/panorama6")
	public String panorama6(Model model) {
//		this.setNews(model);
		return "/panorama/panorama6";
	}
	@GetMapping("/panorama7")
	public String panorama7(Model model) {
//		this.setNews(model);
		return "/panorama/panorama7";
	}
	@GetMapping("/blog")
	public String blog(Model model) {
		return "/blog";
	}
//	private void setNews(Model model) {
//		Post post = this.postService.findLastNews();
//        model.addAttribute("post", post);
//	}
}
