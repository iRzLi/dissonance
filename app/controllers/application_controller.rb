class ApplicationController < ActionController::Base
    helper_method :logged_in?, :current_user, :ensure_logged_in

    def current_user
        @current_user ||= User.includes( {servers: [:users,:rooms]}, :messages, :private_messages).with_attached_profile_picture.find_by(session_token: session[:session_token])
    end

    def login(user)
        session[:session_token] = user.reset_session_token
        @current_user = User.includes( {servers: :users}, :messages).with_attached_profile_picture.find_by(session_token: session[:session_token])
    end

    def logout
        current_user.reset_session_token
        session[:session_token] = nil
        @current_user = nil
    end

    def logged_in?
        !!current_user
    end

    def ensure_logged_in
        render json: ['Not logged in'], status: 403 unless logged_in?
    end
end
