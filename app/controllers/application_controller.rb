class ApplicationController < ActionController::Base

    helper_method :current_user, :logged_in?
  
    def login(user)
      @current_user = user
      session[:session_token] = user.reset_token!
    end
  
    def current_user
      @current_user ||= User.find_by_session_token(session[:session_token])
    end
  
    def logged_in?
      !!current_user
    end
  
    def logout
      current_user.reset_token!
      session[:session_token] = nil
    end
  
    def find_invalid_field(user)
      errors = []
      @user = User.find_by(email: user[:email])
      if @user.nil?
          errors.push('email not found')
      else
          errors.push('invalid password') 
      end
      return errors
    end
  end