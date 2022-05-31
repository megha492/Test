require 'rails_helper'

module SessionHelper
  	def login(user)
		@request.env["devise.mapping"] = Devise.mappings[:user]
	    auth_headers =  user.create_new_auth_token 
	    sign_in user
	    headers = {
	      'CONTENT_TYPE' => 'application/json',
	      'ACCEPT' => 'application/json',
	      'Uid' => auth_headers['uid'],
	      'Access-Token' => auth_headers['access-token'],
	      'Client' => auth_headers['client']
	      }
	    request.headers.merge!(headers)   
	end
end