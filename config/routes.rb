Rails.application.routes.draw do
  mount ActionCable.server, at: '/cable'
  root to: 'static_pages#root'
  namespace :api, defaults: {format: 'json'} do
    resources :users
    resource :session
    resources :messages
    resources :rooms
    resources :room_memberships
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
