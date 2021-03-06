Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"
  mount ActionCable.server, at: '/cable'

  namespace 'api', defaults: {format: :json} do
    resources :users, only: [:index, :create, :update, :show]
    resource :session, only: [:create, :destroy]
    resources :servers, only: [:create, :show, :destroy]
    post "servers/:join_link", to: "servers#join_request"
    resources :rooms, only: [:create, :show, :destroy] do
      resources :messages, only:[:index,:create,:show,:update,:destroy]
    end

    resources :private_rooms, only: [:create, :index, :show] do
      resources :private_messages, only: [:create, :index]
    end
  end
end
