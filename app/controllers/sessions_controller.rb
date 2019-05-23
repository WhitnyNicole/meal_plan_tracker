class SessionsController < ApplicationController

require 'securerandom'

def destroy
  session.clear
  redirect_to '/'
end

def new
  @user = User.new
  render :login
end

# def create
#   @user = User.find_by(email: params[:user][:email])
#   if @user && @user.authenticate(params[:user][:password])
#     session[:user_id] = @user.id
#     redirect_to user_path(@user)
#   else
#     flash[:error] = "Sorry, there was an error creating your account!"
#     redirect_to '/login'
#     # render :login
#   end
# end

def fbcreate
  @user = User.find_or_create_by(uid: auth['uid']) do |u|
    u.name = auth['info']['name']
    u.email = auth['info']['email']
    u.password = SecureRandom.hex(10)
  end
  session[:user_id] = @user.id
  redirect_to user_path(@user)
end

def create
  @user = User.find_by(email: params[:user][:email])
    return head(:forbidden) unless @user.authenticate(params[:password])
    session[:user_id] = @user.id
    redirect_to user_path(@user)
  else
    flash[:error] = "Sorry, there was an error creating your account!"
    redirect_to '/login'
    # render :login
  end
end



def home
end



private
  def auth
    request.env['omniauth.auth']
  end
