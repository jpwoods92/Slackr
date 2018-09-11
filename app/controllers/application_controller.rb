class ApplicationController < ActionController::Base

    helper_method :current_user, :logged_in?
  
    def login(user)
      @current_user = user
      session[:session_token] = user.reset_session_token
    end
  
    def current_user
      @current_user ||= User.find_by_session_token(session[:session_token])
    end
  
    def logged_in?
      !!current_user
    end
  
    def logout
      current_user.reset_session_token
      session[:session_token] = nil
    end
  
    def find_invalid_field(user)
      errors = []
      @user = User.find_by(username: user[:username])
      if @user.nil?
          errors.push('username not found')
      else
        @user.password = user[:password]
        if user[:password].length < 6
          errors.push('password length is too short, minimum: 6')
        else
          errors.push('invalid password')
        end
      end
      return errors
    end
  end