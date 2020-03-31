class Api::ApplicationController < ActionController::API
  protect_from_forgery
  skip_before_action :verify_authenticity_token
end
