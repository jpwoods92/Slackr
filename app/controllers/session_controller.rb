class Api::SessionsController < ApplicationController

    def create
      @user = User.find_by_credentials(
        params[:user][:email],
        params[:user][:password]
      )
      if @user
        login(@user)
        render :root
      else
        render json: find_invalid_field(params[:user]), status: 422
      end
    end
  
    def destroy
      if current_user
        logout
        render json: {}
      else
        render json: ['no user logged in'], status: 404
      end
    end
  
  end