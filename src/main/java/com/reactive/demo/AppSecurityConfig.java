package com.reactive.demo;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.firewall.HttpFirewall;
import org.springframework.security.web.firewall.StrictHttpFirewall;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(securedEnabled = true)
public class AppSecurityConfig extends WebSecurityConfigurerAdapter{
//extends WebSecurityConfigurerAdapter{

//	@Bean
//	public PasswordEncoder passwordEncoder() {
//		return new BCryptPasswordEncoder();
//		
//	}
	
	@Bean
	public HttpFirewall allowUrlEncodedSlashHttpFirewall() {
	    StrictHttpFirewall firewall = new StrictHttpFirewall();
	    firewall.setAllowUrlEncodedSlash(true);
	    firewall.setAllowSemicolon(true);
	    return firewall;
	}
//	
	@Override
	protected void configure(HttpSecurity http) throws Exception {

		System.out.print("is it configure :: " + http.csrf().disable().authorizeRequests());
		
		http.csrf().disable()
		//http.headers().frameOptions().sameOrigin()
		.authorizeRequests()
		.antMatchers("/","/**","/#","/#/","/images/**","/js/**","/webjars/**","/css/**","/login", "/registration", "/forgotPassword","/h2/**","/h2","/console").permitAll()
		.antMatchers("/stuff").hasAnyRole("USER", "ADMIN")
		.antMatchers("/admin/**").hasAnyRole("ADMIN").anyRequest().authenticated()
		.and().formLogin().loginPage("/login").permitAll()
		.and().logout().permitAll();
		
		//				  .antMatchers("/home").hasRole("USER"). and ()
//                .formLogin ()
//                .loginPage ( "/login")
//                .permitAll ()
//                .and ()
//                .logout () // get method for I desabilitado CSRF
//                .permitAll ();
//				.antMatchers("/admin/**").hasRole("ADMIN").and().exceptionHandling()
//				.authenticationEntryPoint(new Http401AuthenticationEntryPoint("Basic realm=\"MyApp\"")).and()
//				.formLogin().loginPage ( "/login").permitAll().loginProcessingUrl("/login").successHandler(authenticationSuccessHandler)
//				.failureHandler(new SimpleUrlAuthenticationFailureHandler()).and().logout().permitAll()
//				.logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
//				.logoutSuccessHandler(new HttpStatusReturningLogoutSuccessHandler());
	}
}

